'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ChevronRight, FastForward } from 'lucide-react'
import { cn } from '@/lib/utils'

const barTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1] as const,
}

const barHeights = [
  '88%',
  '72%',
  '58%',
  '42%',
  '28%',
  '22%',
  '28%',
  '42%',
  '58%',
  '72%',
  '88%',
]

function Chevrons({ direction }: { direction: 'left' | 'right' }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'hidden items-center gap-0.5 text-primary/35 sm:flex',
        direction === 'left' && 'flex-row-reverse',
      )}
    >
      {[0, 1, 2].map((i) => (
        <ChevronRight
          key={i}
          className={cn(
            'size-5 md:size-7',
            direction === 'left' && 'rotate-180',
          )}
          strokeWidth={1.5}
          style={{ opacity: 0.35 + i * 0.25 }}
        />
      ))}
    </div>
  )
}

function CornerBadge({ label }: { label: string }) {
  return (
    <div className="inline-flex max-w-[46%] items-center gap-1.5 rounded-sm bg-card px-2 py-1.5 shadow-lg ring-1 ring-border sm:max-w-none sm:gap-2 sm:px-2.5">
      <span className="size-2 shrink-0 bg-primary" aria-hidden="true" />
      <span className="truncate font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-foreground sm:text-[10px] md:text-xs md:tracking-[0.18em]">
        {label}
      </span>
    </div>
  )
}

export function BuildSystemCta({
  title = "Let's build your AI system",
  leftBadge = 'Intelligent Automation',
  rightBadge = 'Global Support',
  href = '/contact',
}: {
  title?: string
  leftBadge?: string
  rightBadge?: string
  href?: string
}) {
  const words = title.toUpperCase().split(' ')
  const mid = Math.floor(words.length / 2) || 1
  const line1 = words.slice(0, mid).join(' ')
  const line2 = words.slice(mid).join(' ')

  return (
    <section className="relative overflow-hidden border-t border-border">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-background"
        style={{
          backgroundImage: `
            linear-gradient(rgba(192,132,252,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(192,132,252,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(192,132,252,0.12), transparent 55%)',
        }}
      />

      <div className="relative mx-auto flex min-h-[22rem] max-w-6xl flex-col px-4 pt-12 sm:min-h-[28rem] sm:pt-16 md:min-h-[34rem] md:px-6 md:pt-20">
        <motion.div
          className="relative z-10 mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="font-heading text-3xl font-bold uppercase leading-[0.95] tracking-tight text-foreground sm:text-5xl md:text-7xl">
            <span className="mb-1 flex items-center justify-center gap-2 sm:gap-3 md:gap-5">
              <Chevrons direction="right" />
              <span className="min-w-0 break-words">{line1}</span>
              <Chevrons direction="left" />
            </span>
            <span className="mt-1 block break-words text-gradient">{line2}</span>
          </h2>
        </motion.div>

        <div className="relative mt-auto flex min-h-[11rem] flex-1 items-end md:min-h-[14rem]">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 flex h-[70%] items-end gap-1.5 md:gap-2"
          >
            {barHeights.map((height, i) => (
              <motion.div
                key={i}
                className="origin-bottom flex-1 rounded-t-sm bg-primary"
                style={{ height }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ ...barTransition, delay: 0.05 * i }}
              />
            ))}
          </div>

          {/* Soft dip mask so the button sits in the valley */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[28%] bottom-0 h-[45%] bg-gradient-to-t from-background/40 to-transparent md:inset-x-[32%]"
          />

          <motion.div
            className="absolute bottom-[18%] left-1/2 z-20 -translate-x-1/2 md:bottom-[22%]"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.35 }}
          >
            <Link
              href={href}
              aria-label="Get started — contact KrypDev"
              className="group relative flex size-16 items-center justify-center rounded-full bg-card text-foreground shadow-[0_12px_40px_-8px_rgba(192,132,252,0.55)] ring-1 ring-border transition-transform duration-300 hover:scale-105 hover:glow-accent md:size-20"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-primary/15 opacity-0 transition-opacity group-hover:opacity-100"
              />
              <FastForward className="relative size-6 fill-current md:size-7" />
            </Link>
          </motion.div>

          <div className="relative z-20 flex w-full items-end justify-between pb-4 md:pb-5">
            <CornerBadge label={leftBadge} />
            <CornerBadge label={rightBadge} />
          </div>
        </div>
      </div>
    </section>
  )
}
