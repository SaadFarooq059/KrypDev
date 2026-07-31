'use client'

import React, { useMemo } from 'react'
import { cn } from '@/lib/utils'
import { GridPattern } from '@/components/ui/grid-pattern'

export function GridCard({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  // Stable pattern per mount — avoids hydration mismatch from Math.random()
  const squares = useMemo(() => getPattern(5), [])

  return (
    <div
      className={cn(
        'group relative isolate z-0 flex h-full flex-col justify-between overflow-hidden rounded-xl border border-border bg-card px-5 py-4 transition-colors duration-150 hover:border-primary/40',
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0">
        <div className="absolute -inset-[25%] -skew-y-12 [mask-image:linear-gradient(225deg,black,transparent)]">
          <GridPattern
            width={30}
            height={30}
            x={0}
            y={0}
            squares={squares}
            className="fill-border/50 stroke-border absolute inset-0 size-full translate-y-2 transition-transform duration-150 ease-out group-hover:translate-y-0"
          />
        </div>
        <div
          className={cn(
            'absolute -inset-[10%] opacity-0 blur-[50px] transition-opacity duration-150 group-hover:opacity-20',
            'bg-[conic-gradient(#c084fc_0deg,#c084fc_117deg,#a855f7_180deg,#7c3aed_240deg,#c084fc_360deg)]',
          )}
        />
      </div>
      {children}
    </div>
  )
}

function getPattern(length = 5): [x: number, y: number][] {
  // Deterministic pattern based on index — no Math.random
  return Array.from({ length }, (_, i) => [
    7 + ((i * 3) % 4),
    1 + ((i * 2) % 6),
  ])
}
