'use client'

import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

export interface GalleryHoverCarouselItem {
  id: string
  title: string
  summary: string
  url: string
  image: string
}

const defaultItems: GalleryHoverCarouselItem[] = [
  {
    id: 'web',
    title: 'Web App Development',
    summary:
      'Fast, scalable web applications built with modern frameworks and pixel-perfect interfaces.',
    url: '/services',
    image: '/services/service-web.png',
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    summary:
      'Native and cross-platform mobile experiences for iOS and Android that users love.',
    url: '/services',
    image: '/services/service-mobile.png',
  },
  {
    id: 'desktop',
    title: 'Desktop Software',
    summary:
      'High-performance desktop applications tailored to your operational workflows.',
    url: '/services',
    image: '/services/service-desktop.png',
  },
  {
    id: 'api',
    title: 'Custom API & Integrations',
    summary:
      'Robust APIs and seamless integrations that connect your tools and data.',
    url: '/services',
    image: '/services/service-api.png',
  },
  {
    id: 'cloud',
    title: 'Cloud Infrastructure',
    summary:
      'Secure, auto-scaling cloud architecture designed for reliability and growth.',
    url: '/services',
    image: '/services/service-cloud.png',
  },
  {
    id: 'support',
    title: 'IT Support & Helpdesk',
    summary:
      'Responsive 24/7 support and proactive monitoring to keep your systems running.',
    url: '/it-support',
    image: '/services/service-support.png',
  },
]

export default function GalleryHoverCarousel({
  eyebrow = '// featured_work',
  heading = 'Engineering, on display',
  subheading = 'A closer look at the kind of products and platforms we design, build, and operate for our clients.',
  items = defaultItems,
}: {
  eyebrow?: string
  heading?: string
  subheading?: string
  items?: GalleryHoverCarouselItem[]
}) {
  const [index, setIndex] = useState(0)

  const canScrollPrev = index > 0
  const canScrollNext = index < items.length - 1

  return (
    <section className="relative overflow-hidden border-y border-border bg-secondary/20 py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(192,132,252,0.14), transparent 50%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-sm text-primary">{eyebrow}</p>
            <h2 className="mt-3 text-balance font-heading text-4xl font-bold tracking-tight md:text-5xl">
              {heading}
            </h2>
            <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              {subheading}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => canScrollPrev && setIndex(index - 1)}
              disabled={!canScrollPrev}
              className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-40"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => canScrollNext && setIndex(index + 1)}
              disabled={!canScrollNext}
              className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-40"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <Carousel
          index={index}
          onIndexChange={setIndex}
          className="relative w-full"
        >
          <CarouselContent className="-mx-2.5">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="w-[85%] px-2.5 sm:w-1/2 lg:w-1/3"
              >
                <Link
                  href={item.url}
                  className="group relative block h-[300px] w-full md:h-[350px]"
                >
                  <div className="glass relative h-full w-full overflow-hidden rounded-3xl transition-shadow duration-300 hover:glow-accent">
                    {/* Image */}
                    <div className="relative h-full w-full transition-all duration-500 group-hover:h-1/2">
                      <Image
                        width={400}
                        height={300}
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover object-center"
                      />
                      <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-[#0a0118]/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>

                    {/* Title always visible until hover reveal */}
                    <div className="absolute inset-x-0 bottom-0 p-4 transition-opacity duration-300 group-hover:opacity-0">
                      <p className="rounded-xl bg-[#0a0118]/60 px-4 py-2.5 font-heading text-lg font-semibold backdrop-blur-sm">
                        {item.title}
                      </p>
                    </div>

                    {/* Text section revealed on hover */}
                    <div className="absolute bottom-0 left-0 flex h-0 w-full flex-col justify-center bg-card/95 px-5 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:h-1/2 group-hover:opacity-100">
                      <h3 className="font-heading text-lg font-semibold md:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-1 line-clamp-3 pr-10 text-sm leading-relaxed text-muted-foreground">
                        {item.summary}
                      </p>
                      <span className="absolute bottom-3 right-3 flex size-9 items-center justify-center rounded-full border border-border text-primary transition-all duration-500 hover:-rotate-45 hover:border-primary">
                        <ArrowRight className="size-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
