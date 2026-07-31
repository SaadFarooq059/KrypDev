'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

const founders = [
  {
    role: 'CEO',
    firstName: 'Saad',
    lastName: 'Farooq',
    imageUrl: '/founder1.png',
    description:
      'Saad leads KrypDev’s vision and client partnerships — aligning product strategy, delivery, and growth so ambitious teams ship software that actually moves the business.',
  },
  {
    role: 'CTO',
    firstName: 'Rija',
    lastName: 'Sohail',
    imageUrl: '/founder2.png',
    description:
      'Rija architects KrypDev’s engineering systems — from AI-first platforms to resilient infrastructure — keeping every build sharp, scalable, and production-ready.',
  },
]

export function AboutFounders() {
  return (
    <section className="relative overflow-hidden border-y border-border py-16 sm:py-20 md:py-28 lg:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 0%, rgba(192,132,252,0.16), transparent 45%), radial-gradient(circle at 85% 100%, rgba(124,58,237,0.12), transparent 40%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-sm text-primary">// founders</p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Led by builders
          </h2>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            KrypDev is founded by operators who ship — pairing product vision
            with deep technical craft.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-10 sm:mt-14 sm:gap-12 md:mt-20 md:grid-cols-2 md:gap-10 lg:gap-16">
          {founders.map((founder, index) => (
            <motion.article
              key={founder.lastName}
              className="group flex flex-col"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: 0.12 * index,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card sm:rounded-[28px] md:mx-0 md:max-w-none">
                <Image
                  src={founder.imageUrl}
                  alt={`${founder.firstName} ${founder.lastName}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0118]/70 via-transparent to-transparent" />
              </div>

              <p className="mt-5 font-mono text-xs tracking-[0.25em] text-primary uppercase sm:mt-6">
                {founder.role}
              </p>
              <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                {founder.firstName}{' '}
                <span className="text-primary">{founder.lastName}</span>
              </h3>
              <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                {founder.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
