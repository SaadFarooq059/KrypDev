'use client'

import { motion } from 'motion/react'
import { WorldMap } from '@/components/ui/map'

const networkDots = [
  {
    start: { lat: 64.2008, lng: -149.4937, label: 'Fairbanks' },
    end: { lat: 34.0522, lng: -118.2437, label: 'Los Angeles' },
  },
  {
    start: { lat: 64.2008, lng: -149.4937, label: 'Fairbanks' },
    end: { lat: -15.7975, lng: -47.8919, label: 'Brasília' },
  },
  {
    start: { lat: -15.7975, lng: -47.8919, label: 'Brasília' },
    end: { lat: 38.7223, lng: -9.1393, label: 'Lisbon' },
  },
  {
    start: { lat: 51.5074, lng: -0.1278, label: 'London' },
    end: { lat: 28.6139, lng: 77.209, label: 'New Delhi' },
  },
  {
    start: { lat: 28.6139, lng: 77.209, label: 'New Delhi' },
    end: { lat: 43.1332, lng: 131.9113, label: 'Vladivostok' },
  },
  {
    start: { lat: 28.6139, lng: 77.209, label: 'New Delhi' },
    end: { lat: -1.2921, lng: 36.8219, label: 'Nairobi' },
  },
]

export function GlobalReach() {
  return (
    <section className="relative overflow-hidden border-y border-border py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          className="mb-10 text-center sm:mb-12 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-primary">// global_reach</p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            We ship <span className="text-gradient">worldwide</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            From startups to enterprises across every timezone, KrypDev builds
            scalable products with real-time collaboration — no matter where you
            are on the map.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-border bg-card/40 p-2 sm:rounded-3xl md:p-4"
        >
          <WorldMap dots={networkDots} lineColor="#c084fc" />
        </motion.div>
      </div>
    </section>
  )
}
