'use client'

import { useMemo } from 'react'

export function Particles({ count = 28 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 6,
        duration: Math.random() * 6 + 6,
        opacity: Math.random() * 0.5 + 0.2,
      })),
    [count],
  )

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            opacity: d.opacity,
            animation: `float ${d.duration}s ease-in-out ${d.delay}s infinite`,
            boxShadow: '0 0 8px rgba(192,132,252,0.8)',
          }}
        />
      ))}
    </div>
  )
}
