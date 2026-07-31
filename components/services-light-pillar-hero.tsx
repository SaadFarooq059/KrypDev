'use client'

import { motion } from 'motion/react'
import LightPillar from '@/components/ui/LightPillar'

export function ServicesLightPillarHero({
  eyebrow = '// services',
  title = 'End-to-end',
  highlight = 'engineering services',
  description = 'From concept to deployment and beyond, we cover the full software and infrastructure lifecycle — one accountable team for every layer of your product.',
}: {
  eyebrow?: string
  title?: string
  highlight?: string
  description?: string
}) {
  return (
    <section className="relative min-h-[78vh] overflow-hidden border-b border-border bg-background md:min-h-[85vh]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 55% at 70% 45%, rgba(192,132,252,0.18), transparent 60%), radial-gradient(ellipse 50% 40% at 20% 20%, rgba(59,26,107,0.45), transparent 55%)',
        }}
      />

      <div className="pointer-events-none absolute inset-0 opacity-80">
        <LightPillar
          topColor="#3b1a6b"
          bottomColor="#c084fc"
          intensity={0.85}
          rotationSpeed={0.25}
          glowAmount={0.0045}
          pillarWidth={2.6}
          pillarHeight={0.4}
          noiseIntensity={0.22}
          mixBlendMode="screen"
          pillarRotation={90}
          quality="high"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,1,24,0.55) 0%, transparent 35%, transparent 65%, rgba(10,1,24,0.9) 100%), radial-gradient(circle at 50% 50%, transparent 20%, rgba(10,1,24,0.55) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-4 pb-20 pt-36 md:min-h-[85vh] md:px-6 md:pb-24 md:pt-40">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-sm text-primary">{eyebrow}</p>
          <h1 className="mt-3 text-balance font-heading text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {title}{' '}
            <span className="text-gradient">{highlight}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
