'use client'

import Link from 'next/link'
import { ArrowRight, Code2 } from 'lucide-react'
import {
  FaReact,
  FaAws,
  FaDocker,
  FaNodeJs,
  FaGithub,
  FaPython,
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiVercel,
  SiRedux,
  SiTypescript,
  SiGraphql,
  SiPostgresql,
  SiKubernetes,
  SiTensorflow,
  SiTailwindcss,
} from 'react-icons/si'

const iconConfigs = [
  { Icon: FaReact, color: '#61DAFB' },
  { Icon: FaAws, color: '#FF9900' },
  { Icon: FaDocker, color: '#2496ED' },
  { Icon: FaNodeJs, color: '#339933' },
  { Icon: SiNextdotjs, color: '#ffffff' },
  { Icon: SiVercel, color: '#ffffff' },
  { Icon: SiRedux, color: '#764ABC' },
  { Icon: SiTypescript, color: '#3178C6' },
  { Icon: FaGithub, color: '#ffffff' },
  { Icon: FaPython, color: '#3776AB' },
  { Icon: SiGraphql, color: '#E10098' },
  { Icon: SiPostgresql, color: '#4169E1' },
  { Icon: SiKubernetes, color: '#326CE5' },
  { Icon: SiTensorflow, color: '#FF6F00' },
  { Icon: SiTailwindcss, color: '#06B6D4' },
]

export default function StackFeatureSection({
  title = 'Ready to build what comes next?',
  description = 'Tell us about your project and our team will get back to you within one business day.',
}: {
  title?: string
  description?: string
}) {
  const orbitCount = 3
  const orbitGap = 8 // rem between orbits
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount)

  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6">
      <div className="glass relative flex items-center justify-between overflow-hidden rounded-3xl p-10 md:h-[30rem] md:pl-14">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              'radial-gradient(circle at 85% 50%, rgba(192,132,252,0.2), transparent 55%)',
          }}
        />

        {/* Left side: heading and CTAs */}
        <div className="relative z-10 w-full md:w-1/2">
          <p className="font-mono text-sm text-primary">// let&apos;s build</p>
          <h2 className="mt-3 text-balance font-heading text-4xl font-bold tracking-tight md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-shadow hover:glow-accent"
            >
              Get a Quote <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/30 px-7 py-3.5 font-semibold text-foreground transition-colors hover:bg-secondary/60"
            >
              Contact us
            </Link>
          </div>
        </div>

        {/* Right side: orbiting tech stack, cropped to the card */}
        <div className="relative hidden h-[30rem] w-1/2 items-center justify-start overflow-hidden md:flex">
          <div className="relative flex h-[50rem] w-[50rem] translate-x-[50%] items-center justify-center">
            {/* Center circle */}
            <div className="glass z-10 flex size-24 items-center justify-center rounded-full glow-accent">
              <Code2 className="size-12 text-primary" />
            </div>

            {/* Orbits */}
            {[...Array(orbitCount)].map((_, orbitIdx) => {
              const size = `${12 + orbitGap * (orbitIdx + 1)}rem`
              const angleStep = (2 * Math.PI) / iconsPerOrbit

              return (
                <div
                  key={orbitIdx}
                  className="absolute rounded-full border-2 border-dotted border-primary/20"
                  style={{
                    width: size,
                    height: size,
                    animation: `orbit-spin ${12 + orbitIdx * 6}s linear infinite`,
                  }}
                >
                  {iconConfigs
                    .slice(
                      orbitIdx * iconsPerOrbit,
                      orbitIdx * iconsPerOrbit + iconsPerOrbit,
                    )
                    .map((cfg, iconIdx) => {
                      const angle = iconIdx * angleStep
                      const x = 50 + 50 * Math.cos(angle)
                      const y = 50 + 50 * Math.sin(angle)

                      return (
                        <div
                          key={iconIdx}
                          className="absolute rounded-full border border-border bg-card p-2"
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            transform: 'translate(-50%, -50%)',
                          }}
                        >
                          <cfg.Icon
                            className="size-7"
                            style={{ color: cfg.color }}
                          />
                        </div>
                      )
                    })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
