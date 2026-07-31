'use client'

import CardSwap, { Card } from '@/components/ui/CardSwap'

const process = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We map your goals, users, and constraints into a clear technical brief.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Architecture, UX flows, and prototypes — validated before a line of code.',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Agile sprints with weekly demos, code review, and automated testing.',
  },
  {
    num: '04',
    title: 'Ship & Support',
    desc: 'Zero-downtime launches, monitoring, and a team that stays on call.',
  },
]

export function ServicesProcessSwap() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-secondary/20 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-8 md:px-6">
        <div className="max-w-xl">
          <p className="font-mono text-sm text-primary">// how_we_work</p>
          <h2 className="mt-3 text-balance font-heading text-4xl font-bold tracking-tight md:text-5xl">
            A process built for shipping
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Four clear stages from brief to production — watch the stack cycle
            through how we take products from idea to launch.
          </p>
          <ul className="mt-8 space-y-3">
            {process.map((step) => (
              <li
                key={step.num}
                className="flex items-baseline gap-3 text-sm text-muted-foreground"
              >
                <span className="font-mono text-primary">{step.num}</span>
                <span className="font-medium text-foreground">{step.title}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto h-[28rem] w-full max-w-lg md:h-[32rem] md:max-w-none">
          <CardSwap
            width={340}
            height={260}
            cardDistance={52}
            verticalDistance={62}
            delay={4500}
            pauseOnHover
            skewAmount={5}
          >
            {process.map((step) => (
              <Card key={step.num} className="overflow-hidden p-7">
                <span className="font-heading text-4xl font-bold text-primary/45">
                  {step.num}
                </span>
                <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  )
}
