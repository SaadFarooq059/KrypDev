'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

const leftPoints = [
  {
    num: '01',
    title: 'Fast Delivery',
    desc: 'Agile sprints and clear milestones get your product shipped quickly without cutting corners.',
  },
  {
    num: '02',
    title: 'Scalable Solutions',
    desc: 'Architecture designed to grow with you — from your first user to your millionth.',
  },
]

const rightPoints = [
  {
    num: '03',
    title: '24/7 IT Support',
    desc: 'Always-on monitoring and a responsive helpdesk keep your operations uninterrupted.',
  },
  {
    num: '04',
    title: 'AI-First Approach',
    desc: 'We embed intelligence into everything we build to give you a competitive edge.',
  },
]

export function WhyKrypDev() {
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    let animationFrameId: number

    const handleScroll = () => {
      if (!imageContainerRef.current) return

      const rect = imageContainerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const startPosition = windowHeight * 0.7

      if (rect.top <= startPosition) {
        const scrollDistance = startPosition - rect.top
        const progress = Math.min(1, scrollDistance / 400)
        animationFrameId = requestAnimationFrame(() => {
          setScrollProgress(progress)
        })
      } else {
        setScrollProgress(0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <section
      id="why"
      className="relative overflow-hidden border-y border-border bg-secondary/20 py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          className="mb-10 text-center sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-primary">// why_krypdev</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            A partner, <span className="text-gradient">not just a vendor</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Delivery speed, scale, support, and intelligence — the four reasons
            teams stay with KrypDev after the first release.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-8">
          <div className="space-y-5 md:col-span-4 md:space-y-6 md:pr-2">
            {leftPoints.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="group relative overflow-hidden p-3">
                  <div className="absolute -left-1 top-1/2 z-0 -translate-y-1/2 font-heading text-7xl font-bold leading-none text-primary/15 sm:text-[100px] md:text-[110px]">
                    {p.num}
                  </div>
                  <div className="relative z-10 pl-6 sm:pl-8">
                    <h3 className="mb-2 font-heading text-lg font-bold text-foreground sm:text-xl">
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div ref={imageContainerRef} className="py-2 md:col-span-4 md:py-0">
            <div className="relative mx-auto flex h-[320px] w-full max-w-[420px] items-center justify-center sm:h-[400px] md:h-[450px]">
              <div className="absolute left-1/2 top-1/2 z-[1] h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/35 sm:h-[300px] sm:w-[300px] md:h-[350px] md:w-[350px]" />
              <div className="absolute left-1/2 top-1/2 z-[1] h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 sm:h-[200px] sm:w-[200px] md:h-[230px] md:w-[230px]" />

              <div
                className="absolute left-1/2 top-1/2 z-10 transition-all duration-500 ease-out"
                style={{
                  transform: `translate(-50%, -50%) scale(${1 + scrollProgress * 0.15}) rotate(${
                    scrollProgress * 4
                  }deg)`,
                  opacity: isLoaded ? 1 : 0,
                  willChange: 'transform',
                }}
              >
                <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full border-2 border-primary/30 sm:h-[240px] sm:w-[240px] md:h-[280px] md:w-[280px]">
                  <Image
                    src="/why/why-partner.png"
                    alt="KrypDev engineering partnership"
                    fill
                    sizes="(max-width: 640px) 200px, 280px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5 md:col-span-4 md:space-y-6 md:pl-2">
            {rightPoints.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="group relative overflow-hidden p-3">
                  <div className="absolute -right-1 top-1/2 z-0 -translate-y-1/2 font-heading text-7xl font-bold leading-none text-primary/15 sm:text-[100px] md:text-[110px]">
                    {p.num}
                  </div>
                  <div className="relative z-10 pr-6 text-left sm:pr-8 md:text-right">
                    <h3 className="mb-2 font-heading text-lg font-bold text-foreground sm:text-xl">
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
