import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { SiteFooter } from '@/components/site-footer'
import { PageCta } from '@/components/page-cta'
import { AboutFounders } from '@/components/about-founders'
import { AboutHowItWorks } from '@/components/about-how-it-works'
import { AboutPrinciples } from '@/components/about-principles'
import ImpactSection from '@/components/ui/impact-section'
import { CosmicParallaxBg } from '@/components/ui/parallax-cosmic-background'
import RuixenBentoCards from '@/components/ui/ruixen-bento-cards'

export const metadata: Metadata = {
  title: 'About — KrypDev',
  description:
    'KrypDev is an AI-first engineering studio building custom software, resilient infrastructure, and intelligent products for ambitious teams worldwide.',
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <section className="relative h-[100svh] w-full overflow-hidden">
        <CosmicParallaxBg
          head="KrypDev"
          text="AI-First, Engineering, Worldwide"
          loop={true}
        />
      </section>

      {/* Who we are */}
      <RuixenBentoCards />

      {/* Who leads */}
      <AboutFounders />

      {/* What we stand for */}
      <AboutPrinciples />

      {/* How an engagement runs */}
      <AboutHowItWorks />

      {/* What that delivers */}
      <ImpactSection />

      <PageCta
        title="Want to build with us?"
        leftBadge="AI-First Studio"
        rightBadge="Founder-Led Team"
      />
      <SiteFooter />
    </main>
  )
}
