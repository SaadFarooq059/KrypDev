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
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="mb-10 text-center md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Global Reach
          </p>
          <h2 className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text pb-2 font-heading text-3xl font-bold leading-tight text-transparent text-balance sm:text-4xl md:text-5xl">
            We Ship Worldwide
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-lg">
            From startups to enterprises across every timezone, KrypDev builds
            scalable products with real-time collaboration — no matter where you
            are on the map.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 h-1 rounded-full bg-gradient-to-r from-primary to-accent"
            style={{ width: '60%', maxWidth: '200px' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/10 p-2 shadow-lg md:p-4"
        >
          <WorldMap dots={networkDots} lineColor="#c084fc" />
        </motion.div>
      </div>
    </section>
  )
}
