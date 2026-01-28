# ISO 9001 Landing Page

A clean, modern landing page for ISO 9001 certification services built with Next.js 14 and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git installed
- GitHub account
- Vercel account (free)

### Local Development

1. **Install dependencies:**

```bash
cd iso9001-landing
npm install
```

2. **Run the development server:**

```bash
npm run dev
```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Deploy to GitHub + Vercel

### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name your repository (e.g., `iso9001-landing`)
3. Keep it Public or Private as needed
4. Click **Create repository**

### Step 2: Push Code to GitHub

Run these commands in your terminal:

```bash
cd iso9001-landing

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: ISO 9001 landing page"

# Add your GitHub repository as remote (replace with your URL)
git remote add origin https://github.com/YOUR_USERNAME/iso9001-landing.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New Project**
3. Import your `iso9001-landing` repository
4. Vercel auto-detects Next.js - keep default settings
5. Click **Deploy**

Your site will be live at `https://iso9001-landing.vercel.app` (or similar).

### Automatic Deployments

After initial setup, every push to the `main` branch automatically deploys to Vercel.

## Customization

### Update Contact Information

Edit these files to update contact details:
- `components/Contact.tsx` - Email, phone, WhatsApp
- `components/Footer.tsx` - Footer contact info

### Update Content

- `components/Hero.tsx` - Main headline and stats
- `components/WhatIsISO.tsx` - ISO 9001 explanation
- `components/Benefits.tsx` - Benefits list
- `components/Process.tsx` - Certification steps
- `components/WhyChooseUs.tsx` - Trust points

### Update Colors

Edit `tailwind.config.ts` to change the primary color scheme.

### Add Form Backend

The contact form currently logs to console. To make it functional:

1. **Option A: Email service** - Use [EmailJS](https://emailjs.com), [Formspree](https://formspree.io), or [Resend](https://resend.com)
2. **Option B: API route** - Create `app/api/contact/route.ts` with your email logic

## Project Structure

```
iso9001-landing/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout + metadata
│   └── page.tsx         # Main page
├── components/
│   ├── Header.tsx       # Navigation
│   ├── Hero.tsx         # Hero section
│   ├── WhatIsISO.tsx    # ISO explanation
│   ├── Benefits.tsx     # Benefits cards
│   ├── Process.tsx      # Step-by-step process
│   ├── WhyChooseUs.tsx  # Trust points
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer
├── tailwind.config.ts
├── package.json
└── README.md
```

## License

MIT
