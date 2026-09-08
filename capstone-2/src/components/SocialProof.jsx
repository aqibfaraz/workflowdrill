import StarRating from './StarRating.jsx'
import { content } from '../data/content.js'
import a1 from '../assets/avatars/a1.svg'
import a2 from '../assets/avatars/a2.svg'
import a3 from '../assets/avatars/a3.svg'
import a4 from '../assets/avatars/a4.svg'

const avatars = [
  { src: a1, alt: 'Client B' },
  { src: a2, alt: 'Client C' },
  { src: a3, alt: 'Client A' },
  { src: a4, alt: 'Client C' },
]

export default function SocialProof() {
  const { rating, text } = content.socialProof
  return (
    <div className="social-proof">
      <div className="avatars">
        {avatars.map((a, i) => (
          <img key={i} src={a.src} alt={a.alt} width="44" height="44" />
        ))}
      </div>
      <div className="social-proof-copy">
        <StarRating value={rating} />
        <p className="trusted">{text}</p>
      </div>
    </div>
  )
}
