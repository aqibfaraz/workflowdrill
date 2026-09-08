import { navItems } from '../data/nav.js'

export default function Nav() {
  return (
    <nav className="main-nav" aria-label="Primary">
      <ul>
        {navItems.map((item) => (
          <li key={item.label}>
            <a href={item.href}>
              {item.label}
              {item.hasPlus && <span className="nav-plus" aria-hidden="true">+</span>}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
