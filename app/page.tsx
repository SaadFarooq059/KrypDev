import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { AiSpotlight } from '@/components/ai-spotlight'
import { HomeFeatureCarousel } from '@/components/home-feature-carousel'
import { WhyKrypDev } from '@/components/why-krypdev'
import { DesignTestimonial } from '@/components/ui/design-testimonial'
import { GlobalReach } from '@/components/global-reach'
import { PageCta } from '@/components/page-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <AiSpotlight />
      <HomeFeatureCarousel />
      <WhyKrypDev />
      <DesignTestimonial />
      <GlobalReach />
      <PageCta
        title="Ready to build what comes next?"
        leftBadge="Custom Software"
        rightBadge="Worldwide Delivery"
      />
      <SiteFooter />
    </main>
  )
}
