import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { SiteFooter } from '@/components/site-footer'
import { PageCta } from '@/components/page-cta'
import { TechStack } from '@/components/tech-stack'
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
      <section className="relative h-screen w-full overflow-hidden">
        <CosmicParallaxBg
          head="KrypDev"
          text="AI-First, Engineering, Worldwide"
          loop={true}
        />
      </section>

      <RuixenBentoCards />

      <ImpactSection />

      <TechStack />

      <PageCta title="Want to build with us?" />
      <SiteFooter />
    </main>
  )
}
