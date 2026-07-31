import Link from 'next/link'
import HeroGlobe from '@/components/hero-globe'
import './hero.css'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-eyebrow">Custom Dev · AI · IT Support</span>

        <h1 className="hero-title">
          We Build{' '}
          <span className="hero-title-accent">What Comes Next</span>
        </h1>

        <p className="hero-subtitle">
          KrypDev engineers custom applications, resilient IT infrastructure,
          and AI-powered solutions that move your business into the future.
        </p>

        <div className="hero-actions">
          <Link href="/contact" className="btn btn-primary">
            Get a Quote
          </Link>
          <Link href="#services" className="btn btn-ghost">
            View Services <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="hero-globe">
        <HeroGlobe />
      </div>
    </section>
  )
}
