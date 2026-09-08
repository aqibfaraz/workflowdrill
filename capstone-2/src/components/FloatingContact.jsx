import { useState } from 'react'
import { content } from '../data/content.js'

/**
 * Fixed bottom-right widget from the screenshot: a "more" (···) button that
 * toggles a small popover, plus a phone shortcut.
 */
export default function FloatingContact() {
  const [open, setOpen] = useState(false)

  return (
    <div className="floating-contact">
      {open && (
        <div className="floating-menu" role="menu">
          <a role="menuitem" href="#contact">Email</a>
          <a role="menuitem" href="#chat">Live chat</a>
          <a role="menuitem" href={content.phone.href}>Phone</a>
        </div>
      )}
      <button
        type="button"
        className="fab"
        aria-expanded={open}
        aria-label="More contact options"
        onClick={() => setOpen((v) => !v)}
      >
        <span aria-hidden="true">•••</span>
      </button>
      <a className="fab" href={content.phone.href} aria-label={content.phone.label}>
        <span aria-hidden="true">✆</span>
      </a>
    </div>
  )
}
