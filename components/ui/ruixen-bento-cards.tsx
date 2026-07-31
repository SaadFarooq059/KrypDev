'use client'

import React from 'react'
import { cn } from '@/lib/utils'

const cardContents = [
  {
    title: 'The right software',
    description:
      'Most businesses don’t need more software — they need the right software, built by a team that treats their product like its own.',
  },
  {
    title: 'One roof',
    description:
      'Custom applications, dependable IT operations, and production-grade AI engineering — partnered under a single studio.',
  },
  {
    title: 'Remote-first, worldwide',
    description:
      'We work in agile sprints with weekly demos, honest estimates, and a relentless focus on shipping. From startups to enterprises across every timezone, KrypDev stays close to the product — not the office.',
  },
  {
    title: '50+ projects shipped',
    description:
      'Real products in production across 12 countries, with 99.9% uptime across client systems we operate.',
  },
  {
    title: '1-day response',
    description:
      'When you reach out, you hear back fast — clear next steps, no agency runaround.',
  },
]

const PlusCard: React.FC<{
  className?: string
  title: string
  description: string
}> = ({ className = '', title, description }) => {
  return (
    <div
      className={cn(
        'relative flex min-h-[160px] flex-col justify-between rounded-lg border border-dashed border-border bg-card/60 p-4 sm:min-h-[180px] sm:p-5 md:min-h-[200px] md:p-6',
        className,
      )}
    >
      <CornerPlusIcons />
      <div className="relative z-10 space-y-2">
        <h3 className="font-heading text-lg font-bold text-foreground sm:text-xl">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>
      </div>
    </div>
  )
}

const CornerPlusIcons = () => (
  <>
    <PlusIcon className="absolute -top-2.5 -left-2.5 sm:-top-3 sm:-left-3" />
    <PlusIcon className="absolute -top-2.5 -right-2.5 sm:-top-3 sm:-right-3" />
    <PlusIcon className="absolute -bottom-2.5 -left-2.5 sm:-bottom-3 sm:-left-3" />
    <PlusIcon className="absolute -bottom-2.5 -right-2.5 sm:-bottom-3 sm:-right-3" />
  </>
)

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    strokeWidth="1"
    stroke="currentColor"
    className={cn('size-5 text-primary sm:size-6', className)}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
)

export default function RuixenBentoCards() {
  return (
    <section className="border-y border-border bg-transparent">
      <div className="container mx-auto overflow-visible border-x border-border px-3 py-10 sm:px-4 sm:py-12 md:py-16">
        <p className="mb-6 font-mono text-sm text-primary sm:mb-8">
          // our_story
        </p>

        <div className="grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          <PlusCard
            {...cardContents[0]}
            className="sm:col-span-2 lg:col-span-3 lg:row-span-2"
          />
          <PlusCard
            {...cardContents[1]}
            className="lg:col-span-2 lg:row-span-2"
          />
          <PlusCard
            {...cardContents[2]}
            className="sm:col-span-2 lg:col-span-4 lg:row-span-1"
          />
          <PlusCard
            {...cardContents[3]}
            className="lg:col-span-2 lg:row-span-1"
          />
          <PlusCard
            {...cardContents[4]}
            className="sm:col-span-2 lg:col-span-2 lg:row-span-1"
          />
        </div>

        <div className="mt-8 max-w-2xl text-left sm:mt-10 sm:ml-auto sm:text-right lg:-mt-20">
          <h2 className="mb-3 font-heading text-3xl font-bold text-foreground sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
            We build what comes next
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            KrypDev is a partner, not just a vendor — AI-first engineering for
            ambitious teams that need the right software, shipped with care.
          </p>
        </div>
      </div>
    </section>
  )
}
