'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
  ArrowRight,
  BrainCircuit,
  ChevronLeft,
  ChevronRight,
  Headset,
  Rocket,
  Scaling,
  type LucideIcon,
} from 'lucide-react'

const impactCards: {
  id: number
  metric: string
  title: string
  description: string
  icon: LucideIcon
  isFeature?: boolean
  featureTitle?: string
  featureSubtitle?: string
}[] = [
  {
    id: 0,
    metric: '3x',
    title: 'Faster delivery',
    description:
      'Agile sprints, weekly demos, and clear milestones get products shipped quickly — without cutting corners on quality.',
    icon: Rocket,
    isFeature: true,
    featureTitle: 'Fast Delivery',
    featureSubtitle: 'how we work',
  },
  {
    id: 1,
    metric: '10x',
    title: 'Scale without rewrite',
    description:
      'Architecture designed to grow with you — from your first user to your millionth — so you never rebuild from scratch.',
    icon: Scaling,
  },
  {
    id: 2,
    metric: '24/7',
    title: 'Always-on support',
    description:
      'Proactive monitoring and a responsive helpdesk keep operations uninterrupted across every timezone.',
    icon: Headset,
  },
  {
    id: 3,
    metric: 'AI',
    title: 'Intelligence embedded',
    description:
      'We embed machine intelligence into products and workflows so you ship with a lasting competitive edge.',
    icon: BrainCircuit,
  },
]

export default function ImpactSection() {
  const [openCard, setOpenCard] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const sync = () => setIsDesktop(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const goPrev = () =>
    setOpenCard((prev) => (prev - 1 + impactCards.length) % impactCards.length)
  const goNext = () =>
    setOpenCard((prev) => (prev + 1) % impactCards.length)

  return (
    <section className="w-full border-y border-border bg-secondary/20 py-10 sm:py-14 md:py-20">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 md:px-8">
        <div className="mb-6 flex items-start justify-between gap-4 sm:mb-8 sm:gap-6 md:mb-10">
          <div className="max-w-[620px]">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary sm:mb-4">
              // the_way_we_work
            </p>
            <h2 className="font-heading text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
              Principles that drive every build
            </h2>
            <p className="mt-3 max-w-[560px] text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
              Fast delivery, scalable architecture, always-on support, and an
              AI-first mindset — measurable impact across every engagement.
            </p>
          </div>

          <div className="hidden shrink-0 items-center gap-2 md:flex">
            <button
              type="button"
              aria-label="Previous"
              onClick={goPrev}
              className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={goNext}
              className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-end md:gap-0">
          {impactCards.map((card, idx) => {
            const isOpen = openCard === idx
            const closedHeights = [280, 330, 390, 430]
            const targetHeight = isOpen ? 460 : closedHeights[idx]
            const Icon = card.icon

            return (
              <motion.div
                key={card.id}
                onMouseEnter={() => {
                  if (isDesktop) setOpenCard(idx)
                }}
                onFocus={() => setOpenCard(idx)}
                onClick={() => setOpenCard(idx)}
                tabIndex={0}
                animate={isDesktop ? { flex: isOpen ? 4.8 : 1.5 } : undefined}
                transition={{ type: 'spring', stiffness: 220, damping: 28 }}
                className={`relative cursor-pointer overflow-hidden border border-border ${
                  isOpen
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-foreground'
                } ${
                  isOpen
                    ? 'min-h-[300px]'
                    : 'h-[100px] sm:h-[112px] md:h-auto'
                }`}
              >
                <motion.div
                  animate={isDesktop ? { height: targetHeight } : undefined}
                  transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                  className="h-full"
                >
                  {isOpen ? (
                    <div className="flex h-full flex-col p-5 sm:p-6 md:p-8 lg:p-10">
                      {card.isFeature ? (
                        <div className="max-w-[280px]">
                          <h3 className="mb-3 font-heading text-2xl font-semibold leading-[1.05] sm:mb-4 sm:text-[28px] md:text-[32px] lg:text-[36px]">
                            {card.featureTitle}
                            <br />
                            {card.featureSubtitle}
                          </h3>
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[1.4px]"
                          >
                            Start a project <ArrowRight size={14} />
                          </Link>
                        </div>
                      ) : (
                        <div className="max-w-[300px]">
                          <p className="font-mono text-[10px] font-semibold uppercase tracking-[1.3px] opacity-80">
                            How we work
                          </p>
                          <h3 className="mt-2 font-heading text-xl font-semibold leading-[1.08] sm:text-[22px] md:text-[26px] lg:text-[30px]">
                            {card.title}
                          </h3>
                          <p className="mt-2 text-[13px] leading-[1.6] opacity-90 sm:mt-3 sm:text-[14px]">
                            {card.description}
                          </p>
                          <Link
                            href="/contact"
                            className="mt-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[1.4px] sm:mt-4"
                          >
                            Start a project <ArrowRight size={14} />
                          </Link>
                        </div>
                      )}

                      <div className="mt-5 grid flex-1 grid-cols-1 items-end gap-4 sm:mt-6 sm:grid-cols-[1.05fr_1fr]">
                        <div className="self-start sm:self-end">
                          <p className="font-heading text-5xl font-semibold leading-none sm:text-[56px] md:text-[62px] lg:text-[72px]">
                            {card.metric}
                          </p>
                          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[1.2px]">
                            {card.title}
                          </p>
                        </div>

                        <div
                          className={`flex w-full items-center justify-center rounded-xl border ${
                            isOpen
                              ? 'border-primary-foreground/20 bg-primary-foreground/10'
                              : 'border-border bg-secondary/40'
                          } ${
                            card.isFeature
                              ? 'h-[140px] sm:h-[180px] md:h-[220px] lg:h-[240px]'
                              : 'h-[110px] sm:h-[140px] md:h-[160px] lg:h-[180px]'
                          }`}
                        >
                          <Icon
                            className={`${
                              card.isFeature
                                ? 'size-16 sm:size-20 md:size-24'
                                : 'size-12 sm:size-14 md:size-16'
                            } opacity-90`}
                            strokeWidth={1.25}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-full flex-row items-center justify-between gap-4 p-4 sm:p-5 md:flex-col md:items-stretch md:justify-between md:p-6 lg:p-7">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary sm:size-11">
                        <Icon className="size-5" strokeWidth={1.5} />
                      </div>
                      <div className="min-w-0 flex-1 text-right md:mt-auto md:text-left">
                        <p className="font-heading text-2xl font-semibold leading-none text-primary sm:text-[28px] md:text-[32px] lg:text-[36px]">
                          {card.metric}
                        </p>
                        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[1.2px] text-muted-foreground sm:mt-2 md:max-w-[120px]">
                          {card.title}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-5 flex items-center justify-center gap-3 md:hidden">
          <button
            type="button"
            aria-label="Previous"
            onClick={goPrev}
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-1.5">
            {impactCards.map((card, idx) => (
              <button
                key={card.id}
                type="button"
                aria-label={`Show ${card.title}`}
                onClick={() => setOpenCard(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  openCard === idx ? 'w-6 bg-primary' : 'w-1.5 bg-border'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next"
            onClick={goNext}
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="mt-5 flex items-center justify-center rounded-full border border-border bg-card px-4 py-3.5 text-center sm:mt-6 sm:px-8 sm:py-4">
          <p className="text-[13px] leading-[1.4] text-muted-foreground sm:text-[14px]">
            Ready to build with us?{' '}
            <Link
              href="/contact"
              className="font-medium text-primary underline underline-offset-4 transition-opacity hover:opacity-80"
            >
              Tell us what you want to ship
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
