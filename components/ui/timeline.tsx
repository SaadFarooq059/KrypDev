'use client'

import {
  motion,
  useScroll,
  useTransform,
} from 'motion/react'
import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'

export interface TimelineEntry {
  title: string
  content: ReactNode
}

export function Timeline({
  data,
  eyebrow = '// service_capabilities',
  heading = 'Everything your product needs',
  description = 'Explore our services as you scroll — from customer-facing applications to the infrastructure and support behind them.',
  className,
}: {
  data: TimelineEntry[]
  eyebrow?: string
  heading?: string
  description?: string
  className?: string
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const element = contentRef.current
    if (!element) return

    const updateHeight = () => setHeight(element.getBoundingClientRect().height)
    updateHeight()

    const observer = new ResizeObserver(updateHeight)
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 20%', 'end 55%'],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.08], [0, 1])

  return (
    <section
      ref={containerRef}
      className={`relative w-full overflow-hidden bg-background ${className ?? ''}`}
    >
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-16 sm:pt-20 md:px-6 md:pt-24">
        <p className="font-mono text-sm text-primary">{eyebrow}</p>
        <h2 className="mt-3 max-w-3xl text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {heading}
        </h2>
        <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      </div>

      <div
        ref={contentRef}
        className="relative mx-auto max-w-6xl px-4 pb-24 md:px-6"
      >
        {data.map((item, index) => (
          <div
            key={item.title}
            className="flex justify-start gap-4 pt-14 md:gap-10 md:pt-28"
          >
            <div className="sticky top-32 z-40 flex h-fit w-12 shrink-0 self-start items-center md:w-[32%]">
              <div className="absolute left-0 flex size-10 items-center justify-center rounded-full border border-border bg-background">
                <div className="size-3 rounded-full border border-primary/50 bg-secondary" />
              </div>
              <div className="hidden pl-16 md:block">
                <span className="font-mono text-xs text-primary/60">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="mt-2 text-balance font-heading text-2xl font-bold text-muted-foreground lg:text-3xl">
                  {item.title}
                </p>
              </div>
            </div>

            <div className="relative min-w-0 flex-1 pl-4">
              <div className="mb-5 md:hidden">
                <span className="font-mono text-xs text-primary/60">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="mt-1 font-heading text-2xl font-bold text-muted-foreground">
                  {item.title}
                </p>
              </div>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{ height: `${height}px` }}
          className="absolute left-9 top-0 w-px overflow-hidden bg-border md:left-11"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-px rounded-full bg-primary"
          />
        </div>
      </div>
    </section>
  )
}
