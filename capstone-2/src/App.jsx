import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import FloatingContact from './components/FloatingContact.jsx'
import { useTheme } from './hooks/useTheme.js'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <div className="page">
      <Header theme={theme} onToggleTheme={toggle} />
      <Hero />
      <FloatingContact />
    </div>
  )
}
