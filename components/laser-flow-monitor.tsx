'use client'

import Link from 'next/link'
import { Activity, ArrowRight } from 'lucide-react'
import LaserFlow from '@/components/ui/LaserFlow'

export function LaserFlowMonitor() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-background">
      <div className="relative mx-auto min-h-[36rem] w-full max-w-6xl md:min-h-[42rem]">
        <div className="absolute inset-0">
          <LaserFlow
            color="#c084fc"
            horizontalBeamOffset={0.0}
            verticalBeamOffset={0.05}
            horizontalSizing={0.45}
            verticalSizing={2.1}
            fogIntensity={0.4}
            wispIntensity={4.5}
            flowSpeed={0.32}
          />
        </div>

        <div className="relative z-10 flex min-h-[36rem] items-end justify-center px-4 pb-10 pt-28 md:min-h-[42rem] md:pb-14 md:pt-32">
          <div className="glass w-full max-w-3xl rounded-2xl border border-primary/35 p-8 text-center shadow-[0_0_60px_-12px_rgba(192,132,252,0.45)] md:p-10">
            <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              <Activity className="size-3.5" />
              Always-on monitoring
            </p>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Issues caught before your users notice
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              KrypDev watches your stack around the clock — alerts, patching, and
              a helpdesk that answers when something actually breaks.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-shadow hover:glow-accent"
            >
              Get IT coverage <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
