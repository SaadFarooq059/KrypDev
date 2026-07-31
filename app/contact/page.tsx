import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { SiteFooter } from '@/components/site-footer'
import { ColorBendsHero } from '@/components/color-bends-hero'
import { PageCta } from '@/components/page-cta'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact — KrypDev',
  description:
    'Tell us about your project. KrypDev responds within one business day — custom development, AI solutions, and IT support.',
}

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@krypdev.com',
    href: 'mailto:hello@krypdev.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 012-3456',
    href: 'tel:+15550123456',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Remote · Worldwide',
  },
  {
    icon: Clock,
    label: 'Response time',
    value: 'Within one business day',
  },
]

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <ColorBendsHero
        eyebrow="// contact"
        title="Let's build"
        highlight="what comes next"
        description="Tell us about your project — custom development, AI solutions, or IT support — and our team will get back to you within one business day."
      />

      <section className="relative overflow-hidden py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 100%, rgba(192,132,252,0.2), transparent 55%)',
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-start gap-14 px-4 md:px-6 lg:grid-cols-2">
          <div>
            <p className="font-mono text-sm text-primary">// reach_us</p>
            <h2 className="mt-3 text-balance font-heading text-4xl font-bold tracking-tight">
              Talk to a human, fast
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Prefer email or a call? Every channel lands with an engineer who
              can actually answer your questions.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {channels.map((c) => (
                <div key={c.label} className="glass rounded-2xl p-6">
                  <c.icon className="size-6 text-primary" />
                  <p className="mt-4 font-mono text-xs text-muted-foreground">
                    {c.label}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="mt-1 block font-heading font-semibold text-foreground transition-colors hover:text-primary"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-heading font-semibold">{c.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pt-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <PageCta
        title="Ready to start the conversation?"
        leftBadge="1-Day Reply"
        rightBadge="Engineering Team"
      />
      <SiteFooter />
    </main>
  )
}
