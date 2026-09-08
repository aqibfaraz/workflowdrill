import ThumbCollage from './ThumbCollage.jsx'
import SocialProof from './SocialProof.jsx'
import IntroBlock from './IntroBlock.jsx'
import { content } from '../data/content.js'

export default function Hero() {
  return (
    <main className="hero">
      <div className="hero-top">
        <h1 className="hero-heading">
          {content.heading.map((line, i) => (
            <span className="hero-heading-line" key={i}>
              {line}
            </span>
          ))}
        </h1>
        <ThumbCollage />
      </div>

      <div className="hero-bottom">
        <SocialProof />
        <IntroBlock />
      </div>
    </main>
  )
}
