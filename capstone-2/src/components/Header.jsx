import Logo from './Logo.jsx'
import Nav from './Nav.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import IconButton from './IconButton.jsx'
import { content } from '../data/content.js'

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header" id="top">
      <Logo />
      <Nav />
      <div className="header-actions">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <a className="btn btn-solid" href={content.cta.href}>
          {content.cta.label}
        </a>
        <IconButton href={content.cta.href} direction="left" label="Get in touch" />
      </div>
    </header>
  )
}
