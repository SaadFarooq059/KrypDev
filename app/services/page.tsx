import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { SiteFooter } from '@/components/site-footer'
import { ServicesLightPillarHero } from '@/components/services-light-pillar-hero'
import { PageCta } from '@/components/page-cta'
import { ServicesTimeline } from '@/components/services-timeline'
import { ServicesProcessSwap } from '@/components/services-process-swap'

export const metadata: Metadata = {
  title: 'Services — KrypDev',
  description:
    'Web, mobile, and desktop development, custom APIs, cloud infrastructure, and 24/7 IT support — end-to-end engineering services from KrypDev.',
}

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <ServicesLightPillarHero />

      <ServicesTimeline />

      <ServicesProcessSwap />

      <PageCta />
      <SiteFooter />
    </main>
  )
}
