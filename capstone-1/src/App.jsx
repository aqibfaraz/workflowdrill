import avatar1 from './assets/avatar1.svg'
import avatar2 from './assets/avatar2.svg'
import avatar3 from './assets/avatar3.svg'
import avatar4 from './assets/avatar4.svg'

const navLinks = ['Home', 'About', 'Services', 'Portfolio', 'Contact']
const avatars = [avatar1, avatar2, avatar3, avatar4]

export default function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="logo">
          SAAS<span>.App</span>
        </div>

        <nav className="main-nav">
          {navLinks.map((link) => (
            <a key={link} href="#">
              {link}
            </a>
          ))}
        </nav>

        <a href="#" className="btn btn-dark">
          Let's Talk <span className="arrow">&rarr;</span>
        </a>
      </header>

      <main className="hero">
        <h1 className="hero-heading">SAAS.App Web Solution</h1>

        <div className="hero-bottom">
          <div className="social-proof">
            <div className="avatars">
              {avatars.map((src, i) => (
                <img key={i} src={src} alt={`Client ${i + 1}`} />
              ))}
            </div>
            <div className="stars">
              {'★ ★ ★ ★ ★'}
            </div>
            <p className="trusted">Trusted by 150+ clients</p>
          </div>

          <div className="hero-intro">
            <p>
              We design and build modern SaaS platforms, web apps, and digital
              products that help startups launch faster and scale with confidence.
            </p>
            <a href="#" className="btn btn-outline">
              View Portfolio <span className="arrow">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
