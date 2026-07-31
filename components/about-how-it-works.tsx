'use client'

import HowItWorks, { type Step } from '@/components/ui/how-it-works'

const STEPS: Step[] = [
  {
    title: 'Discover',
    description:
      'We map your vision, users, and constraints before anything is built — so the outcome stays locked from day one.',
  },
  {
    title: 'Prototype',
    description:
      'Architecture and interaction blueprints get pressure-tested early, while changes are still cheap.',
  },
  {
    title: 'Design & Build',
    description:
      'Design and engineering share the same sprint. Interfaces stay on-brand; APIs stay typed and shippable.',
  },
  {
    title: 'Harden & Launch',
    description:
      'Load, security, and edge cases get equal weight. We ship when the product holds under real traffic.',
  },
  {
    title: 'Operate & Evolve',
    description:
      'The same team that built it stays on call — monitoring, iterating, and keeping production sharp.',
  },
]

export function AboutHowItWorks() {
  return (
    <section className="relative border-b border-border">
      <div className="mx-auto max-w-7xl px-4 pt-20 text-center md:px-8 md:pt-28">
        <p className="font-mono text-sm text-primary">// how_it_works</p>
        <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          How we take a product live
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
          Five pinned phases from first conversation to production support —
          one studio owning the whole path.
        </p>
      </div>

      <HowItWorks features={STEPS} />
    </section>
  )
}
