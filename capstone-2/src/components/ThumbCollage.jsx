import t1 from '../assets/thumbs/t1.svg'
import t2 from '../assets/thumbs/t2.svg'
import t3 from '../assets/thumbs/t3.svg'
import t4 from '../assets/thumbs/t4.svg'
import t5 from '../assets/thumbs/t5.svg'
import t6 from '../assets/thumbs/t6.svg'
import t7 from '../assets/thumbs/t7.svg'
import t8 from '../assets/thumbs/t8.svg'
import t9 from '../assets/thumbs/t9.svg'

// Placeholder portfolio screenshots. Replace t1..t9.svg with real 16:10
// images (same filenames) and the grid is unchanged.
const thumbs = [t1, t2, t3, t4, t5, t6, t7, t8, t9]

export default function ThumbCollage() {
  return (
    <div className="thumb-collage" aria-label="Selected work">
      {thumbs.map((src, i) => (
        <img key={i} src={src} alt={`Project ${i + 1}`} loading="lazy" />
      ))}
    </div>
  )
}
