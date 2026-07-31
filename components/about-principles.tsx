'use client'

import { motion } from 'motion/react'
import { Eye, Handshake, LifeBuoy, Target } from 'lucide-react'

import OrbitingCirclesGlobe from '@/components/ui/orbiting-circles-02'

const principles = [
  {
    icon: Target,
    title: 'Own the outcome',
    description:
      'We measure success by what your product does in production — not by hours logged or tickets closed.',
  },
  {
    icon: Eye,
    title: 'No black boxes',
    description:
      'Weekly demos, honest estimates, and code you fully own. You always know where the build stands.',
  },
  {
    icon: Handshake,
    title: 'One team, one roof',
    description:
      'Product, infrastructure, and AI under a single studio — so nothing gets lost between vendors.',
  },
  {
    icon: LifeBuoy,
    title: 'Stay after launch',
    description:
      'Shipping is the start. We monitor, support, and keep improving long after the first release.',
  },
]

export function AboutPrinciples() {
  return (
    <section className="relative overflow-hidden border-y border-border py-28 md:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 15%, rgba(192,132,252,0.12), transparent 55%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-sm text-primary">
            // what_we_stand_for
          </p>
          <h2 className="mt-3 text-balance font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Principles we don&apos;t bend
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
            Every engagement runs on the same four commitments. They are the
            reason clients stay with KrypDev after the first release.
          </p>
        </motion.div>

        <div className="mt-6 flex w-full items-end justify-center md:mt-8">
          <OrbitingCirclesGlobe />
        </div>

        <div className="mt-20 grid gap-10 sm:grid-cols-2 md:mt-28 lg:grid-cols-4 lg:gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.55,
                delay: 0.08 * index,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
                <principle.icon className="size-6" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight">
                {principle.title}
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
