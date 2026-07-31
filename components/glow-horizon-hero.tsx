'use client'

import { motion } from 'motion/react'
import GlowHorizonFM from '@/components/ui/glow-horizon'

export function GlowHorizonHero({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow: string
  title: string
  highlight?: string
  description: string
}) {
  return (
    <section className="relative min-h-[70vh] overflow-hidden border-b border-border bg-background md:min-h-[75vh]">
      <div className="pointer-events-none absolute inset-0">
        <GlowHorizonFM variant="top" />
      </div>

      <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-4 pb-20 pt-32 text-center md:min-h-[75vh] md:px-6 md:pb-24 md:pt-36">
        <motion.p
          className="font-mono text-sm text-primary"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="mt-4 max-w-4xl text-balance font-heading text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {title}
          {highlight ? (
            <>
              {' '}
              <span className="text-gradient">{highlight}</span>
            </>
          ) : null}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  )
}
