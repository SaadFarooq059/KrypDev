'use client'

import Image from 'next/image'
import {
  Check,
  Cloud,
  Globe,
  Headset,
  MonitorCog,
  Plug,
  Smartphone,
} from 'lucide-react'
import { Timeline } from '@/components/ui/timeline'

const services = [
  {
    icon: Globe,
    title: 'Web App Development',
    desc: 'Fast, scalable web applications built with modern frameworks and pixel-perfect interfaces.',
    image: '/services/service-web.png',
    points: [
      'Next.js & React front-ends',
      'Progressive web apps',
      'E-commerce & SaaS platforms',
      'Performance & SEO optimization',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Native and cross-platform mobile experiences for iOS and Android that users love.',
    image: '/services/service-mobile.png',
    points: [
      'React Native & Flutter',
      'Native iOS / Android',
      'App Store launch support',
      'Push, offline & deep linking',
    ],
  },
  {
    icon: MonitorCog,
    title: 'Desktop Software',
    desc: 'High-performance desktop applications tailored to your operational workflows.',
    image: '/services/service-desktop.png',
    points: [
      'Cross-platform Electron & Tauri',
      'Internal tools & dashboards',
      'Hardware & peripheral integration',
      'Auto-update pipelines',
    ],
  },
  {
    icon: Plug,
    title: 'Custom API & Integrations',
    desc: 'Robust APIs and seamless integrations that connect your tools and data.',
    image: '/services/service-api.png',
    points: [
      'REST & GraphQL API design',
      'Third-party integrations',
      'Data pipelines & webhooks',
      'API documentation & versioning',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    desc: 'Secure, auto-scaling cloud architecture designed for reliability and growth.',
    image: '/services/service-cloud.png',
    points: [
      'AWS, GCP & Azure',
      'Kubernetes & containerization',
      'CI/CD & infrastructure as code',
      'Cost & performance audits',
    ],
  },
  {
    icon: Headset,
    title: 'IT Support & Helpdesk',
    desc: 'Responsive 24/7 support and proactive monitoring to keep your systems running.',
    image: '/services/service-support.png',
    points: [
      '24/7 monitoring & alerting',
      'Helpdesk & ticketing',
      'Security patching & backups',
      'On/off-boarding & device management',
    ],
  },
]

export function ServicesTimeline() {
  const data = services.map((service) => ({
    title: service.title,
    content: (
      <article className="group glass overflow-hidden rounded-2xl transition-all duration-300 hover:glow-accent">
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border">
          <Image
            src={service.image}
            alt={`${service.title} illustration`}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#1c0d33]/60 to-transparent"
          />
        </div>
        <div className="p-7 md:p-9">
        <div className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <service.icon className="size-6" />
        </div>
        <h3 className="mt-5 font-heading text-2xl font-semibold">
          {service.title}
        </h3>
        <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
          {service.desc}
        </p>
        <ul className="mt-6 grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
          {service.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
              {point}
            </li>
          ))}
        </ul>
        </div>
      </article>
    ),
  }))

  return <Timeline data={data} />
}
