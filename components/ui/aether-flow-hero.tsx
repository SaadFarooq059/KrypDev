'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Particle = {
  x: number
  y: number
  directionX: number
  directionY: number
  size: number
  color: string
  draw: () => void
  update: () => void
}

export default function AetherFlowHero({
  eyebrow = 'AI-First Engineering',
  title = 'Intelligence, engineered in',
  description = 'Our AI-first approach embeds machine intelligence at the core of your products — premium, cutting-edge, and built to scale from prototype to production.',
  ctaLabel = 'Talk to us',
  ctaHref = '/contact',
  className,
}: {
  eyebrow?: string
  title?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
  className?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId = 0
    let particles: Particle[] = []
    const mouse = { x: null as number | null, y: null as number | null, radius: 200 }

    class ParticleImpl implements Particle {
      x: number
      y: number
      directionX: number
      directionY: number
      size: number
      color: string

      constructor(
        x: number,
        y: number,
        directionX: number,
        directionY: number,
        size: number,
        color: string,
      ) {
        this.x = x
        this.y = y
        this.directionX = directionX
        this.directionY = directionY
        this.size = size
        this.color = color
      }

      draw() {
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
        ctx!.fillStyle = this.color
        ctx!.fill()
      }

      update() {
        if (this.x > canvas!.width || this.x < 0) {
          this.directionX = -this.directionX
        }
        if (this.y > canvas!.height || this.y < 0) {
          this.directionY = -this.directionY
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x
          const dy = mouse.y - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < mouse.radius + this.size) {
            const forceDirectionX = dx / distance
            const forceDirectionY = dy / distance
            const force = (mouse.radius - distance) / mouse.radius
            this.x -= forceDirectionX * force * 5
            this.y -= forceDirectionY * force * 5
          }
        }

        this.x += this.directionX
        this.y += this.directionY
        this.draw()
      }
    }

    function init() {
      particles = []
      const numberOfParticles = (canvas!.height * canvas!.width) / 9000
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 1
        const x = Math.random() * (canvas!.width - size * 4) + size * 2
        const y = Math.random() * (canvas!.height - size * 4) + size * 2
        const directionX = Math.random() * 0.4 - 0.2
        const directionY = Math.random() * 0.4 - 0.2
        const color = 'rgba(192, 132, 252, 0.85)'
        particles.push(
          new ParticleImpl(x, y, directionX, directionY, size, color),
        )
      }
    }

    const resizeCanvas = () => {
      const parent = canvas.parentElement
      const w = parent?.clientWidth ?? window.innerWidth
      const h = parent?.clientHeight ?? window.innerHeight
      canvas.width = w
      canvas.height = h
      init()
    }
    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance =
            (particles[a].x - particles[b].x) *
              (particles[a].x - particles[b].x) +
            (particles[a].y - particles[b].y) *
              (particles[a].y - particles[b].y)

          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            const opacityValue = 1 - distance / 20000

            let stroke = `rgba(192, 132, 252, ${opacityValue * 0.7})`
            if (mouse.x !== null && mouse.y !== null) {
              const dxMouseA = particles[a].x - mouse.x
              const dyMouseA = particles[a].y - mouse.y
              const distanceMouseA = Math.sqrt(
                dxMouseA * dxMouseA + dyMouseA * dyMouseA,
              )
              if (distanceMouseA < mouse.radius) {
                stroke = `rgba(192, 132, 252, ${opacityValue})`
              }
            }

            ctx.strokeStyle = stroke
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const particle of particles) particle.update()
      connect()
    }
    animate()

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = event.clientX - rect.left
      mouse.y = event.clientY - rect.top
    }
    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    canvas.parentElement?.addEventListener('mousemove', handleMouseMove)
    canvas.parentElement?.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
      canvas.parentElement?.removeEventListener('mousemove', handleMouseMove)
      canvas.parentElement?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 0.5,
        duration: 0.8,
        ease: 'easeInOut' as const,
      },
    }),
  }

  const titleParts = title.split(',')
  const titleLead = titleParts[0]?.trim() ?? title
  const titleTail = titleParts.slice(1).join(',').trim()

  return (
    <div
      className={cn(
        'relative flex h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-background',
        className,
      )}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      <div className="relative z-10 px-4 text-center sm:px-6">
        <motion.p
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-5 font-mono text-sm text-primary"
        >
          // {eyebrow.toLowerCase().replace(/\s+/g, '_')}
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-6 text-balance font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {titleTail ? (
            <>
              {titleLead}, <span className="text-gradient">{titleTail}</span>
            </>
          ) : (
            <span className="text-gradient">{titleLead}</span>
          )}
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto mb-10 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {description}
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <Link
            href={ctaHref}
            className="mx-auto inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-shadow duration-300 hover:glow-accent sm:px-8 sm:py-4 sm:text-base"
          >
            {ctaLabel}
            <ArrowRight className="size-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
