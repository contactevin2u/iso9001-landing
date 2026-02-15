import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time
import json
import sys

DOMAIN = "https://isoconsultantmalaysia.com"
HEADERS = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}

visited = set()
results = []

def crawl(url):
    if url in visited:
        return []
    visited.add(url)

    internal_links = []
    row = {"url": url}

    try:
        start = time.time()
        r = requests.get(url, headers=HEADERS, timeout=15, allow_redirects=True)
        row["response_time_ms"] = round((time.time() - start) * 1000)
        row["status"] = r.status_code
        row["content_length"] = len(r.content)

        if "text/html" not in r.headers.get("content-type", ""):
            row["note"] = "non-html"
            results.append(row)
            return []

        soup = BeautifulSoup(r.text, "html.parser")

        # Title
        title_tag = soup.find("title")
        row["title"] = title_tag.get_text(strip=True) if title_tag else "MISSING"
        row["title_len"] = len(row["title"]) if row["title"] != "MISSING" else 0

        # Meta description
        meta_desc = soup.find("meta", attrs={"name": "description"})
        row["meta_desc"] = meta_desc["content"].strip() if meta_desc and meta_desc.get("content") else "MISSING"
        row["meta_desc_len"] = len(row["meta_desc"]) if row["meta_desc"] != "MISSING" else 0

        # Canonical
        canonical = soup.find("link", rel="canonical")
        row["canonical"] = canonical["href"] if canonical and canonical.get("href") else "MISSING"

        # Headings
        for tag in ["h1", "h2", "h3", "h4"]:
            headings = [h.get_text(strip=True) for h in soup.find_all(tag)]
            row[f"{tag}_count"] = len(headings)
            row[f"{tag}s"] = headings

        # Word count (visible text)
        for s in soup(["script", "style", "noscript"]):
            s.decompose()
        text = soup.get_text(separator=" ", strip=True)
        row["word_count"] = len(text.split())

        # Images
        imgs = soup.find_all("img")
        row["img_count"] = len(imgs)
        row["imgs_missing_alt"] = sum(1 for img in imgs if not img.get("alt"))

        # Schema/JSON-LD
        schemas = soup.find_all("script", type="application/ld+json")
        schema_types = []
        for s in schemas:
            try:
                data = json.loads(s.string)
                if "@graph" in data:
                    for item in data["@graph"]:
                        schema_types.append(item.get("@type", "unknown"))
                else:
                    schema_types.append(data.get("@type", "unknown"))
            except:
                schema_types.append("parse_error")
        row["schema_types"] = schema_types

        # Open Graph
        og_title = soup.find("meta", property="og:title")
        row["og_title"] = og_title["content"] if og_title and og_title.get("content") else "MISSING"

        # Robots meta
        robots = soup.find("meta", attrs={"name": "robots"})
        row["robots"] = robots["content"] if robots and robots.get("content") else "not set"

        # Internal links
        for a in soup.find_all("a", href=True):
            href = a["href"]
            full = urljoin(url, href)
            parsed = urlparse(full)
            clean = f"{parsed.scheme}://{parsed.netloc}{parsed.path}"
            if parsed.netloc and DOMAIN.replace("https://", "") in parsed.netloc:
                if clean not in visited:
                    internal_links.append(clean)
        row["internal_links"] = len([a for a in soup.find_all("a", href=True) if urljoin(url, a["href"]).startswith(DOMAIN)])

    except requests.exceptions.Timeout:
        row["status"] = "TIMEOUT"
    except Exception as e:
        row["status"] = f"ERROR: {str(e)[:80]}"

    results.append(row)
    return internal_links


def print_report():
    print("\n" + "=" * 80)
    print(f"  SEO CRAWL REPORT: {DOMAIN}")
    print(f"  Pages crawled: {len(results)}")
    print("=" * 80)

    issues = []

    for r in results:
        url_short = r["url"].replace(DOMAIN, "") or "/"
        print(f"\n{'-' * 70}")
        print(f"  PAGE: {url_short}")
        print(f"{'-' * 70}")
        print(f"  Status:        {r.get('status', '?')}")
        print(f"  Response:      {r.get('response_time_ms', '?')}ms")
        print(f"  Word Count:    {r.get('word_count', '?')}")
        print(f"  Content Size:  {r.get('content_length', 0) // 1024}KB")

        # Title
        title = r.get("title", "?")
        tlen = r.get("title_len", 0)
        flag = ""
        if title == "MISSING":
            flag = " *** MISSING ***"
            issues.append(f"{url_short}: Missing title tag")
        elif tlen > 60:
            flag = f" (too long: {tlen} chars)"
            issues.append(f"{url_short}: Title too long ({tlen} chars)")
        elif tlen < 30:
            flag = f" (too short: {tlen} chars)"
        print(f"  Title:         {title[:70]}{flag}")

        # Meta desc
        desc = r.get("meta_desc", "?")
        dlen = r.get("meta_desc_len", 0)
        flag = ""
        if desc == "MISSING":
            flag = " *** MISSING ***"
            issues.append(f"{url_short}: Missing meta description")
        elif dlen > 160:
            flag = f" (too long: {dlen} chars)"
        elif dlen < 70:
            flag = f" (too short: {dlen} chars)"
        print(f"  Meta Desc:     {desc[:70]}...{flag}")

        # Canonical
        canon = r.get("canonical", "?")
        if canon == "MISSING":
            issues.append(f"{url_short}: Missing canonical tag")
        print(f"  Canonical:     {canon}")

        # Headings
        h1c = r.get("h1_count", 0)
        if h1c == 0:
            issues.append(f"{url_short}: No H1 tag found")
        elif h1c > 1:
            issues.append(f"{url_short}: Multiple H1 tags ({h1c})")
        print(f"  H1 ({h1c}):        {'; '.join(r.get('h1s', []))[:80]}")
        print(f"  H2 ({r.get('h2_count', 0)}):        {'; '.join(r.get('h2s', [])[:5])[:80]}...")
        print(f"  H3 ({r.get('h3_count', 0)})  H4 ({r.get('h4_count', 0)})")

        # Word count
        wc = r.get("word_count", 0)
        if wc < 300:
            issues.append(f"{url_short}: Thin content ({wc} words)")

        # Images
        missing_alt = r.get("imgs_missing_alt", 0)
        if missing_alt > 0:
            issues.append(f"{url_short}: {missing_alt} images missing alt text")
        print(f"  Images:        {r.get('img_count', 0)} total, {missing_alt} missing alt")

        # Schema
        print(f"  Schema:        {', '.join(r.get('schema_types', []))}")

        # OG
        og = r.get("og_title", "?")
        if og == "MISSING":
            issues.append(f"{url_short}: Missing Open Graph title")
        print(f"  OG Title:      {og[:70]}")

        print(f"  Int. Links:    {r.get('internal_links', 0)}")

    # Summary
    print(f"\n\n{'=' * 80}")
    print("  ISSUES FOUND")
    print("=" * 80)
    if issues:
        for i, issue in enumerate(issues, 1):
            print(f"  {i}. {issue}")
    else:
        print("  No critical issues found!")

    print(f"\n{'=' * 80}")
    print("  SUMMARY")
    print("=" * 80)
    total_words = sum(r.get("word_count", 0) for r in results)
    avg_words = total_words // len(results) if results else 0
    print(f"  Total pages:       {len(results)}")
    print(f"  Total word count:  {total_words:,}")
    print(f"  Avg words/page:    {avg_words:,}")
    print(f"  Issues found:      {len(issues)}")
    print(f"  Pages with schema: {sum(1 for r in results if r.get('schema_types'))}")
    avg_speed = sum(r.get("response_time_ms", 0) for r in results) // len(results) if results else 0
    print(f"  Avg response:      {avg_speed}ms")
    print("=" * 80)


if __name__ == "__main__":
    print(f"Crawling {DOMAIN}...")
    to_crawl = [DOMAIN + "/"]
    while to_crawl:
        url = to_crawl.pop(0)
        new_links = crawl(url)
        for link in new_links:
            if link not in visited and link not in to_crawl:
                to_crawl.append(link)
        print(f"  Crawled: {url.replace(DOMAIN, '') or '/'} ({len(visited)} pages)")

    print_report()
