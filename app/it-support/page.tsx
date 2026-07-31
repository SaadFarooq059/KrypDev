import type { Metadata } from 'next'
import {
  Headset,
  Activity,
  ShieldCheck,
  HardDrive,
  Laptop,
  Network,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { PageCta } from '@/components/page-cta'
import { LaserFlowMonitor } from '@/components/laser-flow-monitor'

export const metadata: Metadata = {
  title: 'IT Support — KrypDev',
  description:
    '24/7 helpdesk, proactive monitoring, security patching, and managed infrastructure — responsive IT support from KrypDev.',
}

const stats = [
  { value: '24/7', label: 'Monitoring & helpdesk' },
  { value: '<15m', label: 'Critical response time' },
  { value: '99.9%', label: 'Uptime target' },
  { value: '100%', label: 'Remote-capable coverage' },
]

const services = [
  {
    icon: Headset,
    title: 'Helpdesk & Ticketing',
    desc: 'A responsive support desk your team can actually reach — chat, email, or phone, with clear SLAs.',
  },
  {
    icon: Activity,
    title: 'Proactive Monitoring',
    desc: 'Always-on monitoring and alerting that catches issues before your users do.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Patching',
    desc: 'Endpoint protection, patch management, and security reviews that keep threats out.',
  },
  {
    icon: HardDrive,
    title: 'Backup & Recovery',
    desc: 'Automated backups and tested disaster-recovery plans, so downtime never becomes data loss.',
  },
  {
    icon: Laptop,
    title: 'Device Management',
    desc: 'On/off-boarding, device provisioning, and fleet management for growing teams.',
  },
  {
    icon: Network,
    title: 'Network & Infrastructure',
    desc: 'Office networks, VPNs, and cloud infrastructure managed, documented, and kept healthy.',
  },
]

const tiers = [
  {
    name: 'Essential',
    desc: 'Business-hours helpdesk, monitoring, and patching for small teams.',
    points: ['Business-hours support', 'Core monitoring', 'Monthly reporting'],
  },
  {
    name: 'Managed',
    desc: 'Full managed IT with 24/7 monitoring and priority response.',
    points: [
      '24/7 monitoring & alerting',
      'Priority response SLAs',
      'Security & backup management',
      'Quarterly infrastructure reviews',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    desc: 'Dedicated engineers, custom SLAs, and compliance-ready operations.',
    points: [
      'Dedicated support engineers',
      'Custom SLAs & compliance',
      'On-site options',
    ],
  },
]

export default function ItSupportPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <PageHero
        eyebrow="// it_support"
        title="IT that just"
        highlight="keeps running"
        description="Responsive 24/7 support and proactive monitoring keep your systems healthy, your data safe, and your team unblocked — so you can focus on the business."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-7 text-center">
              <p className="font-heading text-4xl font-bold text-primary">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <LaserFlowMonitor />

      <section className="border-t border-border bg-secondary/20 py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-14 max-w-2xl">
            <p className="font-mono text-sm text-primary">// what_we_cover</p>
            <h2 className="mt-3 text-balance font-heading text-4xl font-bold tracking-tight md:text-5xl">
              Full-stack IT operations
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="group glass rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:glow-accent"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="size-6" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 md:px-6">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono text-sm text-primary">// support_plans</p>
          <h2 className="mt-3 text-balance font-heading text-4xl font-bold tracking-tight md:text-5xl">
            Plans that scale with you
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`glass rounded-2xl p-8 ${
                t.featured ? 'border-primary/50 glow-accent' : ''
              }`}
            >
              {t.featured && (
                <span className="mb-4 inline-block rounded-full border border-primary/40 bg-secondary/40 px-3 py-1 font-mono text-xs text-primary">
                  most popular
                </span>
              )}
              <h3 className="font-heading text-2xl font-bold">{t.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t.desc}
              </p>
              <ul className="mt-6 space-y-3 border-t border-border pt-6">
                {t.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <PageCta
        title="Need IT off your plate?"
        leftBadge="24/7 Monitoring"
        rightBadge="Remote Ops"
      />
      <SiteFooter />
    </main>
  )
}
