'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

export function AiNeuralIntro() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/15 py-16 sm:py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 90% 20%, rgba(59,26,107,0.35), transparent 45%)',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:gap-12 md:px-6 lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="relative mx-auto flex w-full max-w-lg items-center justify-center lg:max-w-none"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[5/4] w-full max-w-[560px] lg:max-w-[640px]">
            <Image
              src="/icon.png"
              alt="KrypDev"
              fill
              sizes="(max-width: 1024px) 90vw, 640px"
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          className="max-w-xl lg:justify-self-end"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-sm text-primary">// production_ai</p>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Intelligence that{' '}
            <span className="text-gradient">belongs in your product</span>
            — not a demo deck.
          </h2>
          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            We embed chatbots, models, and agent pipelines into real workflows,
            then harden them with evals, monitoring, and cost controls before
            anyone depends on them.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
