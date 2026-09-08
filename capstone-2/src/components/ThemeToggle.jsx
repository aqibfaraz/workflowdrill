/**
 * Sun/moon button that flips the theme. Controlled by App via props so there
 * is a single source of theme truth (useTheme in App).
 */
export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      <span aria-hidden="true">{isDark ? '☾' : '☀'}</span>
    </button>
  )
}
