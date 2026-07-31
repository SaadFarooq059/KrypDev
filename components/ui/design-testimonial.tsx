'use client'

import type React from 'react'
import { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react'

type TestimonialItem = {
  quote: string
  author: string
  role: string
  company: string
}

const defaultTestimonials: TestimonialItem[] = [
  {
    quote: 'KrypDev shipped our platform in weeks — quality never slipped.',
    author: 'Amina Okonkwo',
    role: 'CTO',
    company: 'Northline Health',
  },
  {
    quote: 'Their AI pipeline cut our support load by half in the first month.',
    author: 'James Rivera',
    role: 'Head of Operations',
    company: 'ParcelGrid',
  },
  {
    quote: 'Finally a partner that treats engineering like craftsmanship.',
    author: 'Priya Nair',
    role: 'Founder',
    company: 'Lumen Labs',
  },
]

export function DesignTestimonial({
  testimonials = defaultTestimonials,
}: {
  testimonials?: TestimonialItem[]
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const numberX = useTransform(x, [-200, 200], [-20, 20])
  const numberY = useTransform(y, [-200, 200], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  const goPrev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    )

  useEffect(() => {
    const timer = setInterval(goNext, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const current = testimonials[activeIndex]

  return (
    <section className="relative overflow-hidden border-y border-border bg-secondary/20 py-16 sm:py-20 md:py-24">
      <div
        ref={containerRef}
        className="relative mx-auto w-full max-w-5xl px-4 md:px-6"
        onMouseMove={handleMouseMove}
      >
        <p className="mb-6 font-mono text-sm text-primary md:hidden">
          // testimonials
        </p>
        <motion.div
          className="pointer-events-none absolute -left-4 top-1/2 hidden -translate-y-1/2 select-none text-[16rem] font-bold leading-none tracking-tighter text-foreground/[0.04] md:block lg:-left-8 lg:text-[28rem]"
          style={{ x: numberX, y: numberY }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {String(activeIndex + 1).padStart(2, '0')}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <div className="relative flex">
          <div className="hidden flex-col items-center justify-center border-r border-border pr-10 md:flex lg:pr-16">
            <motion.span
              className="font-mono text-sm text-primary"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              // testimonials
            </motion.span>

            <div className="relative mt-8 h-32 w-px bg-border">
              <motion.div
                className="absolute top-0 left-0 w-full origin-top bg-primary"
                animate={{
                  height: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          <div className="flex-1 py-2 md:py-8 md:pl-10 lg:pl-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="mb-6 sm:mb-8"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-primary" />
                  {current.company}
                </span>
              </motion.div>
            </AnimatePresence>

            <div className="relative mb-10 min-h-[100px] sm:mb-12 sm:min-h-[120px] md:min-h-[140px]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeIndex}
                  className="font-heading text-2xl font-semibold leading-[1.2] tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {current.quote.split(' ').map((word, i) => (
                    <motion.span
                      key={`${activeIndex}-${i}`}
                      className="mr-[0.3em] inline-block"
                      variants={{
                        hidden: { opacity: 0, y: 20, rotateX: 90 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          rotateX: 0,
                          transition: {
                            duration: 0.5,
                            delay: i * 0.05,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                        exit: {
                          opacity: 0,
                          y: -10,
                          transition: { duration: 0.2, delay: i * 0.02 },
                        },
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex items-center gap-4"
                >
                  <motion.div
                    className="h-px w-8 bg-primary"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{ originX: 0 }}
                  />
                  <div>
                    <p className="text-base font-medium text-foreground">
                      {current.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {current.role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-4">
                <motion.button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={goPrev}
                  className="group relative flex size-12 items-center justify-center overflow-hidden rounded-full border border-border"
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="relative z-10 text-foreground transition-colors group-hover:text-primary"
                  >
                    <path
                      d="M10 12L6 8L10 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>

                <motion.button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={goNext}
                  className="group relative flex size-12 items-center justify-center overflow-hidden rounded-full border border-border"
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="relative z-10 text-foreground transition-colors group-hover:text-primary"
                  >
                    <path
                      d="M6 4L10 8L6 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -bottom-16 left-0 right-0 overflow-hidden opacity-[0.08]">
          <motion.div
            className="flex whitespace-nowrap text-5xl font-bold tracking-tight md:text-6xl"
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-8">
                {testimonials.map((t) => t.company).join(' • ')} •
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
