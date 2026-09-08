/**
 * Circular outline button with an arrow glyph. Used in the header (next to
 * "LET'S TALK") and in the intro block (next to "VIEW PORTFOLIO").
 *
 * Renders as <a> when `href` is given, otherwise <button>.
 */
export default function IconButton({
  href,
  direction = 'left',
  label = 'Continue',
  onClick,
}) {
  const arrow = direction === 'left' ? '←' : '→'
  const common = {
    className: 'icon-button',
    'aria-label': label,
    title: label,
  }

  if (href) {
    return (
      <a {...common} href={href} onClick={onClick}>
        <span aria-hidden="true">{arrow}</span>
      </a>
    )
  }

  return (
    <button {...common} type="button" onClick={onClick}>
      <span aria-hidden="true">{arrow}</span>
    </button>
  )
}
