import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'capstone2-theme'
const DEFAULT_THEME = 'dark'

function readStoredTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'light' || stored === 'dark' ? stored : DEFAULT_THEME
  } catch (e) {
    return DEFAULT_THEME
  }
}

/**
 * Theme state backed by localStorage. Writes `data-theme` on <html> so the
 * plain-CSS custom properties in global.css switch palettes.
 */
export function useTheme() {
  const [theme, setTheme] = useState(readStoredTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch (e) {
      /* storage unavailable — the in-memory theme still applies */
    }
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggle }
}
