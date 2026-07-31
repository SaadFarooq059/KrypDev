'use client'

import React from 'react'
import { LazyMotion, domAnimation, m } from 'motion/react'

interface CardProps {
  number: string
  title: string
  description: string
  className?: string
  rotate?: string
}

const Pin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
  </svg>
)

const Card = ({
  number,
  title,
  description,
  className,
  rotate,
}: CardProps) => {
  return (
    <div
      className={`relative w-full transition-transform duration-300 hover:z-30 hover:scale-105 md:w-[380px] ${rotate} ${className}`}
    >
      <div className="rounded-[28px] border border-border bg-card p-3 shadow-[0_20px_50px_-20px_rgba(192,132,252,0.35)]">
        <Pin className="mx-auto mb-7 h-10 w-10 text-primary" />
        <div className="relative flex h-full flex-col overflow-hidden rounded-[18px] border border-primary/25 bg-primary/10 p-6">
          <span
            className="mb-6 font-heading text-5xl font-bold text-primary"
            style={{
              fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif',
            }}
          >
            {number}
          </span>
          <h3 className="mb-3 font-heading text-3xl font-semibold leading-none text-foreground">
            {title}
          </h3>
          <p className="text-base leading-relaxed tracking-tight text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export interface Step {
  title: string
  description: string
}

export interface StepPosition {
  className?: string
  rotate?: string
}

export interface HowItWorksProps {
  features?: Step[]
  className?: string
  stepPositions?: StepPosition[]
}

const DEFAULT_CARD_POSITIONS: StepPosition[] = [
  { className: 'md:absolute md:top-0 md:left-[8%]', rotate: 'rotate-6' },
  {
    className: 'md:absolute md:top-[140px] md:right-[8%]',
    rotate: '-rotate-6',
  },
  { className: 'md:absolute md:top-[520px] md:left-[8%]', rotate: 'rotate-6' },
  {
    className: 'md:absolute md:top-[660px] md:right-[6%]',
    rotate: '-rotate-6',
  },
  { className: 'md:absolute md:top-[1000px] md:left-[8%]', rotate: 'rotate-6' },
]

const STAGE_WIDTH = 1280

export default function HowItWorks({
  features,
  className,
  stepPositions,
}: HowItWorksProps) {
  const defaultFeatures: Step[] = [
    {
      title: 'Discover',
      description:
        'We map your vision, users, and constraints before anything is built.',
    },
    {
      title: 'Prototype',
      description:
        'Architecture and interaction blueprints get pressure-tested early.',
    },
    {
      title: 'Design & Build',
      description:
        'Design and engineering share the same sprint from day one.',
    },
    {
      title: 'Harden & Launch',
      description:
        'Load, security, and edge cases get equal weight before go-live.',
    },
    {
      title: 'Operate & Evolve',
      description:
        'The same team that built it stays on call after launch.',
    },
  ]

  const data = features && features.length > 0 ? features : defaultFeatures
  const positions = stepPositions || DEFAULT_CARD_POSITIONS

  let height = 1360
  if (data.length === 1) height = 480
  else if (data.length === 2) height = 560
  else if (data.length === 3) height = 960
  else if (data.length === 4) height = 1120
  else height = 1360

  return (
    <LazyMotion features={domAnimation}>
      <div className={`relative bg-background px-4 max-md:pb-28 max-md:pt-10 md:px-8 md:py-24 ${className}`}>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: 'linear-gradient(#c084fc 1px, transparent 1px)',
            backgroundSize: '100% 36px',
            marginTop: '4px',
          }}
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div
            className="relative mx-auto flex h-auto w-full max-w-[1280px] flex-col space-y-10 md:block md:h-[var(--md-height)] md:space-y-0"
            style={{ '--md-height': `${height}px` } as React.CSSProperties}
          >
            {data.length > 1 && (
              <svg
                className="pointer-events-none absolute top-0 left-0 z-0 hidden h-full w-full md:block"
                viewBox={`0 0 ${STAGE_WIDTH} ${height}`}
                preserveAspectRatio="none"
              >
                {(() => {
                  const pathD = data.reduce((acc, _, index) => {
                    if (index >= data.length - 1) return acc
                    if (index === 0)
                      return 'M 280 180 C 560 180, 720 320, 980 320'
                    if (index === 1)
                      return acc + ' C 1180 320, 640 420, 280 540'
                    if (index === 2)
                      return acc + ' C 280 720, 700 860, 1000 860'
                    if (index === 3)
                      return acc + ' C 1220 860, 640 980, 280 1040'
                    return acc
                  }, '')
                  return (
                    <m.path
                      d={pathD}
                      stroke="currentColor"
                      className="text-primary/40"
                      strokeWidth="2.5"
                      strokeDasharray="10 8"
                      fill="none"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                      initial={{ strokeDashoffset: 0 }}
                      animate={{ strokeDashoffset: -144 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                  )
                })()}
              </svg>
            )}

            {data.map((step, index) => {
              const position = positions[index % positions.length]

              return (
                <Card
                  key={step.title}
                  number={`0${index + 1}`}
                  title={step.title}
                  description={step.description}
                  rotate={position.rotate}
                  className={position.className}
                />
              )
            })}
          </div>
        </div>
      </div>
    </LazyMotion>
  )
}
