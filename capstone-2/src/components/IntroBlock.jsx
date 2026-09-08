import IconButton from './IconButton.jsx'
import { content } from '../data/content.js'

export default function IntroBlock() {
  return (
    <div className="intro-block">
      <p className="intro-text">{content.intro}</p>
      <div className="intro-actions">
        <a className="btn btn-solid" href={content.portfolio.href}>
          {content.portfolio.label}
        </a>
        <IconButton
          href={content.portfolio.href}
          direction="left"
          label="View portfolio"
        />
      </div>
    </div>
  )
}
