'use client'

import type { CSSProperties, ReactNode } from 'react'
import {
  Boxes,
  Eye,
  Gauge,
  Handshake,
  LifeBuoy,
  Rocket,
  ShieldCheck,
  Target,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import ParticleSphereAnimation from '@/components/ui/orbiting-circles-02-utils/particalsphear'

export interface OrbitItem {
  node: ReactNode
  alt: string
  angle: number
}

export interface Orbit {
  size: string
  duration: number
  items: OrbitItem[]
}

const defaultOrbits: Orbit[] = [
  {
    size: 'w-[22rem] h-[22rem] md:w-[34rem] md:h-[34rem]',
    duration: 22,
    items: [
      { node: <Target />, alt: 'Outcomes', angle: -60 },
      { node: <Rocket />, alt: 'Momentum', angle: 0 },
      { node: <Gauge />, alt: 'Performance', angle: 60 },
    ],
  },
  {
    size: 'w-[29rem] h-[29rem] md:w-[43rem] md:h-[43rem]',
    duration: 30,
    items: [
      { node: <Eye />, alt: 'Transparency', angle: 0 },
      { node: <Handshake />, alt: 'Partnership', angle: -90 },
    ],
  },
  {
    size: 'w-[36rem] h-[36rem] md:w-[53rem] md:h-[53rem]',
    duration: 38,
    items: [
      { node: <ShieldCheck />, alt: 'Reliability', angle: -60 },
      { node: <Boxes />, alt: 'Craft', angle: 0 },
      { node: <LifeBuoy />, alt: 'Support', angle: 60 },
    ],
  },
]

export default function OrbitingCirclesGlobe({
  orbits = defaultOrbits,
  className,
}: {
  orbits?: Orbit[]
  className?: string
}) {
  return (
    <div
      className={cn(
        // Height hugs the largest ring radius (18rem / 26.5rem) plus the icon
        // overhang, so no dead space collects above the arcs.
        'relative flex h-[20.5rem] w-full justify-center overflow-hidden md:h-[29.5rem]',
        className,
      )}
    >
      <style>{`
        @keyframes orbit-cw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) + 360deg)) }
        }
        @keyframes orbit-ccw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) - 360deg)) }
        }
        @keyframes counter-cw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) - 360deg)) }
        }
        @keyframes counter-ccw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) + 360deg)) }
        }
      `}</style>

      <div className="pointer-events-none absolute bottom-0 left-1/2 z-10 aspect-square w-[20rem] -translate-x-1/2 translate-y-1/2 sm:w-[24rem] md:w-[34rem] lg:w-[40rem]">
        <ParticleSphereAnimation />
      </div>

      {orbits.map((orbit, index) => {
        const isCW = index % 2 === 0
        const orbitAnim = isCW ? 'orbit-cw' : 'orbit-ccw'
        const counterAnim = isCW ? 'counter-cw' : 'counter-ccw'

        const allItems = [
          ...orbit.items,
          ...orbit.items.map((item) => ({
            ...item,
            angle: item.angle + 180,
            alt: `${item.alt}-mirror`,
          })),
        ]

        return (
          <div
            key={index}
            className={cn(
              'absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full border border-primary/20',
              orbit.size,
            )}
          >
            {allItems.map((item) => (
              <div
                key={item.alt}
                className="absolute left-1/2 top-0 -ml-8 flex h-1/2 origin-bottom flex-col items-center justify-start md:-ml-10"
                style={
                  {
                    '--start-angle': `${item.angle}deg`,
                    animation: `${orbitAnim} ${orbit.duration}s linear infinite`,
                  } as CSSProperties
                }
              >
                <div
                  className="relative z-10 -mt-8 flex size-16 items-center justify-center rounded-full border border-primary/30 bg-card text-primary shadow-[0_0_30px_-10px_rgba(192,132,252,0.65)] md:-mt-10 md:size-20 [&_svg]:size-7 md:[&_svg]:size-8"
                  style={
                    {
                      '--counter-offset': `${-item.angle}deg`,
                      animation: `${counterAnim} ${orbit.duration}s linear infinite`,
                    } as CSSProperties
                  }
                  aria-hidden="true"
                >
                  {item.node}
                </div>
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}
