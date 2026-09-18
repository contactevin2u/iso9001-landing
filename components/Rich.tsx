import { Fragment } from 'react'

/**
 * Renders dictionary strings that carry inline **bold** and [text](/href)
 * markup, so translated paragraphs can keep their emphasis and links.
 */
export default function Rich({
  text,
  strongClassName = 'text-gray-900',
  linkClassName = 'text-primary-600 hover:underline',
}: {
  text: string
  strongClassName?: string
  linkClassName?: string
}) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
  return (
    <>
      {parts.map((part, i) => {
        const bold = part.match(/^\*\*([^*]+)\*\*$/)
        if (bold) {
          return (
            <strong key={i} className={strongClassName}>
              {bold[1]}
            </strong>
          )
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (link) {
          const external = /^https?:\/\//.test(link[2])
          return (
            <a key={i} href={link[2]} rel={external ? 'noopener' : undefined} className={linkClassName}>
              {link[1]}
            </a>
          )
        }
        return <Fragment key={i}>{part}</Fragment>
      })}
    </>
  )
}
