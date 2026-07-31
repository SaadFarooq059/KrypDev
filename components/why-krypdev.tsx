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
    <section id="why" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          className="mb-16 text-center sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-primary">// why_krypdev</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-balance bg-gradient-to-r from-primary via-primary to-accent bg-clip-text pb-2 font-heading text-3xl font-bold leading-relaxed tracking-tight text-transparent sm:text-4xl md:text-5xl">
            A partner, not just a vendor
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-4 h-1 rounded-full bg-gradient-to-r from-primary to-accent"
            style={{ width: '60%', maxWidth: '200px' }}
          />
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-8">
          {/* Left column */}
          <div className="space-y-6 pr-0 md:col-span-4 md:pr-4">
            {leftPoints.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="group relative p-3 transition-transform duration-300 hover:translate-x-1">
                  <div className="absolute -left-2 top-1/2 z-0 -translate-y-1/2 font-heading text-[120px] font-bold leading-none text-primary opacity-20">
                    {p.num}
                  </div>
                  <div className="relative z-10 pl-8">
                    <h3 className="mb-2 font-heading text-xl font-bold text-foreground">
                      {p.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Middle column - image */}
          <div ref={imageContainerRef} className="py-6 md:col-span-4 md:py-0">
            <div className="relative mx-auto flex h-[450px] w-full max-w-[600px] items-center justify-center sm:h-[500px]">
              <div
                className="absolute left-1/2 top-1/2 z-[1] h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-primary/40"
                style={{ backgroundColor: 'rgba(168, 85, 247, 0.05)' }}
              />
              <div className="absolute left-1/2 top-1/2 z-[1] h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/20" />
              <div className="absolute left-1/2 top-1/2 z-[1] h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/10" />

              <div
                className="absolute left-1/2 top-1/2 transition-all duration-500 ease-out"
                style={{
                  transform: `translate(-50%, -50%) scale(${1 + scrollProgress * 0.2}) rotate(${
                    scrollProgress * 5
                  }deg)`,
                  opacity: isLoaded ? 1 : 0,
                  zIndex: 10,
                  willChange: 'transform',
                }}
              >
                <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-primary/30 shadow-2xl shadow-primary/30">
                  <Image
                    src="/why/why-partner.png"
                    alt="KrypDev engineering partnership"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6 pl-0 md:col-span-4 md:pl-4">
            {rightPoints.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="group relative p-3 transition-transform duration-300 hover:-translate-x-1">
                  <div className="absolute -right-2 top-1/2 z-0 -translate-y-1/2 font-heading text-[120px] font-bold leading-none text-primary opacity-20">
                    {p.num}
                  </div>
                  <div className="relative z-10 pr-8 text-right">
                    <h3 className="mb-2 font-heading text-xl font-bold text-foreground">
                      {p.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
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
