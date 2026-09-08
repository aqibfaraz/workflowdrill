import { content } from '../data/content.js'

export default function Logo() {
  const { primary, secondary } = content.logo
  return (
    <a className="logo" href="#top" aria-label={`${primary} ${secondary} home`}>
      <span className="logo-primary">{primary}</span>
      <span className="logo-secondary">{secondary}</span>
    </a>
  )
}
