'use client'

import {
  Check,
  FlaskConical,
  Radar,
  Rocket,
  ShieldCheck,
} from 'lucide-react'
import { Timeline } from '@/components/ui/timeline'

const phases = [
  {
    icon: Radar,
    title: 'Discover',
    shortTitle: 'Discover',
    desc: 'We map the workflows where AI delivers measurable ROI — not just demos that look good in a slide deck.',
    points: [
      'Opportunity & risk audit',
      'Data readiness assessment',
      'Success metrics locked early',
      'Build vs buy recommendations',
    ],
  },
  {
    icon: FlaskConical,
    title: 'Prototype',
    shortTitle: 'Prototype',
    desc: 'A working proof of concept on your real data within weeks, evaluated against the tasks your team actually runs.',
    points: [
      'Scoped PoC on live data',
      'Eval harness from day one',
      'Human-in-the-loop checkpoints',
      'Cost & latency baselines',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Harden',
    shortTitle: 'Harden',
    desc: 'Guardrails, monitoring, fallbacks, and cost controls so nothing reaches users until it holds under real load.',
    points: [
      'Safety & policy guardrails',
      'Observability & alerting',
      'Fallback & escalation paths',
      'Security & compliance review',
    ],
  },
  {
    icon: Rocket,
    title: 'Operate',
    shortTitle: 'Operate',
    desc: 'Launch is the start. We stay on the system — iterating with evals, tuning prompts and models, and keeping production sharp.',
    points: [
      'Production rollout plan',
      'Continuous eval loops',
      'Model & prompt iteration',
      'On-call & support ownership',
    ],
  },
]

export function AiIdeaToProd() {
  const data = phases.map((phase) => ({
    title: phase.shortTitle,
    content: (
      <article className="overflow-hidden rounded-2xl border border-border bg-card/60 transition-all duration-300 hover:border-primary/40 hover:glow-accent">
        <div className="p-6 sm:p-8 md:p-9">
          <div className="flex size-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
            <phase.icon className="size-6" />
          </div>
          <h3 className="mt-5 font-heading text-2xl font-semibold text-foreground">
            {phase.title}
          </h3>
          <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {phase.desc}
          </p>
          <ul className="mt-6 grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
            {phase.points.map((point) => (
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

  return (
    <Timeline
      data={data}
      eyebrow="// from_idea_to_prod"
      heading="From idea to production"
      description="Discover, prototype, harden, operate — a clear path from first conversation to AI systems your users can rely on."
      className="border-y border-border"
    />
  )
}
