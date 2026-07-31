'use client'

import { type KeyboardEvent, useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from 'motion/react'
import { Code2, Network, Sparkles } from 'lucide-react'

import { cn } from '@/lib/utils'

const AUTO_INTERVAL_MS = 4500

const tabs = [
  {
    icon: Code2,
    title: 'Build',
    headline: 'Products that ship',
    description:
      'Web, mobile, and desktop — designed and engineered to scale with your business.',
    image: '/how-we-deliver/deliver-build.png',
    isNew: false,
  },
  {
    icon: Network,
    title: 'Integrate',
    headline: 'Systems that connect',
    description:
      'APIs, cloud, and your existing tools unified into one reliable stack.',
    image: '/how-we-deliver/deliver-integrate.png',
    isNew: false,
  },
  {
    icon: Sparkles,
    title: 'Intelligence',
    headline: 'AI where it counts',
    description:
      'Assistants, automation, and insights embedded into the product — not bolted on.',
    image: '/how-we-deliver/deliver-intelligence.png',
    isNew: true,
  },
] as const

type Tab = (typeof tabs)[number]

function FeatureTab({
  selected,
  onSelect,
  icon: Icon,
  title,
  isNew,
}: Tab & { selected: boolean; onSelect: () => void }) {
  const tabRef = useRef<HTMLDivElement>(null)
  const xPercent = useMotionValue(100)
  const yPercent = useMotionValue(0)
  const maskImage = useMotionTemplate`radial-gradient(100px 50px at ${xPercent}% ${yPercent}%, black, transparent)`

  useEffect(() => {
    if (!tabRef.current || !selected) return

    xPercent.set(0)
    yPercent.set(0)
    const { height, width } = tabRef.current.getBoundingClientRect()
    const circumference = height * 2 + width * 2
    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ]

    const xAnim = animate(xPercent, [0, 100, 100, 0, 0], {
      duration: 4,
      times,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'loop',
    })
    const yAnim = animate(yPercent, [0, 0, 100, 100, 0], {
      times,
      duration: 4,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'loop',
    })

    return () => {
      xAnim.stop()
      yAnim.stop()
    }
  }, [selected, xPercent, yPercent])

  return (
    <div
      ref={tabRef}
      role="tab"
      aria-selected={selected}
      tabIndex={0}
      className={cn(
        'relative flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-card/50 py-2 pr-4 transition-colors',
        'hover:border-primary/40 hover:bg-card',
        selected && 'border-primary/50 bg-card',
      )}
      onClick={onSelect}
      onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect()
        }
      }}
    >
      {selected && (
        <motion.div
          style={{ maskImage }}
          className="pointer-events-none absolute inset-0 -m-px rounded-lg border border-primary"
        />
      )}

      <div className="ml-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div className="text-sm font-medium text-foreground">{title}</div>
      {isNew && (
        <div className="rounded-md bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">
          new
        </div>
      )}
    </div>
  )
}

export default function RuixenFeaturedImageSection() {
  const [selectedTab, setSelectedTab] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const active = tabs[selectedTab]

  const goTo = (index: number) => {
    if (index === selectedTab) return

    let dir = 1
    if (selectedTab === tabs.length - 1 && index === 0) dir = 1
    else if (selectedTab === 0 && index === tabs.length - 1) dir = -1
    else dir = index > selectedTab ? 1 : -1

    setDirection(dir)
    setSelectedTab(index)
  }

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => {
      setDirection(1)
      setSelectedTab((prev) => (prev + 1) % tabs.length)
    }, AUTO_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [paused])

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 72 : -72,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -72 : 72,
      opacity: 0,
      scale: 0.98,
    }),
  }

  const textVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
      y: 8,
    }),
    center: {
      x: 0,
      opacity: 1,
      y: 0,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -28 : 28,
      opacity: 0,
      y: -4,
    }),
  }

  return (
    <section
      className="relative overflow-hidden border-y border-border py-16 sm:py-20 md:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setPaused(false)
        }
      }}
    >
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-center font-mono text-sm text-primary">
          // how_we_deliver
        </p>
        <h2 className="mt-3 text-balance text-center font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          From idea to production
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          Three clear steps. One studio. Watch how KrypDev takes your product
          from build to intelligence.
        </p>

        <div
          className="relative mt-10 flex justify-center"
          role="tablist"
          aria-label="Delivery steps"
        >
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-4">
            {tabs.map((tab, tabIndex) => (
              <FeatureTab
                {...tab}
                selected={selectedTab === tabIndex}
                onSelect={() => goTo(tabIndex)}
                key={tab.title}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card/40 p-2 sm:p-2.5 md:rounded-[28px]">
          <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-background md:rounded-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active.image}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={active.image}
                  alt={active.headline}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0118]/95 via-[#0a0118]/35 to-transparent" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active.title}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-8"
              >
                <p className="font-mono text-xs text-primary md:text-sm">
                  Step {selectedTab + 1} — {active.title}
                </p>
                <h3 className="mt-1 font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  {active.headline}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {active.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="absolute bottom-4 right-4 z-10 flex gap-1.5 md:bottom-6 md:right-6">
              {tabs.map((tab, i) => (
                <button
                  key={tab.title}
                  type="button"
                  aria-label={`Go to ${tab.title}`}
                  onClick={() => goTo(i)}
                  className={cn(
                    'h-1.5 rounded-full transition-all duration-300',
                    i === selectedTab
                      ? 'w-6 bg-primary'
                      : 'w-1.5 bg-foreground/30 hover:bg-foreground/50',
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
