'use client'

/**
 * Editorial-style team member card with overlapping layers and motion.
 * Adapted for KrypDev (colors, fonts, motion/react).
 */
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface TeamMemberCardProps {
  position?: 'left' | 'right'
  jobPosition?: string
  firstName?: string
  lastName?: string
  imageUrl?: string
  description?: string
  className?: string
  href?: string
}

export default function TeamMemberCard({
  position = 'left',
  jobPosition = 'Backend Engineer',
  firstName = 'Jennie',
  lastName = 'Garcia',
  imageUrl = 'https://images.unsplash.com/photo-1526510747491-58f928ec870f?fm=jpg&q=60',
  description = 'Jennie is a skilled developer with expertise in modern web technologies and a passion for creating seamless user experiences.',
  className,
  href = '/contact',
}: TeamMemberCardProps) {
  const fullName = `${firstName} ${lastName}`
  const isPositionRight = position === 'right'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn('relative my-10 flex flex-col justify-center md:my-16', className)}
    >
      <motion.div
        initial={{ opacity: 0, x: isPositionRight ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p
          className={cn(
            'mb-4 font-mono text-xs font-medium tracking-[0.3em] text-primary uppercase',
            isPositionRight && 'md:text-right',
          )}
        >
          {jobPosition}
        </p>
      </motion.div>

      <div
        className={cn(
          'flex flex-col items-stretch gap-6 md:flex-row md:items-center md:justify-end md:gap-0',
          isPositionRight && 'md:flex-row-reverse',
        )}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-[420px] w-full max-w-[320px] shrink-0 overflow-hidden rounded-2xl border border-border md:mx-0 md:h-[500px] md:w-[360px] md:max-w-none md:rounded-none md:border-0"
        >
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#0a0118]/50 via-transparent to-transparent" />
          <img
            src={imageUrl}
            alt={fullName}
            className="h-full w-full object-cover duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
          />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: isPositionRight ? -40 : 40,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'relative z-[2] flex w-full flex-col gap-8 md:w-[calc(100%-280px)] md:gap-14',
            !isPositionRight && 'md:-ml-8',
            isPositionRight && 'md:-mr-8 md:items-end',
          )}
        >
          <div>
            <p
              className={cn(
                'font-heading text-4xl leading-[1.1] font-light tracking-tight text-foreground md:text-5xl',
                isPositionRight && 'md:text-right',
              )}
            >
              {firstName}
              <br />
              <span className="font-bold text-primary">{lastName}</span>
            </p>
          </div>

          <div
            className={cn(
              'flex items-start gap-6 md:gap-8',
              isPositionRight && 'md:flex-row-reverse md:justify-end',
            )}
          >
            <motion.a
              href={href}
              aria-label={`Contact ${fullName}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border bg-card/40 transition-colors duration-300 hover:border-primary hover:bg-primary/15 md:h-20 md:w-20"
            >
              <ArrowRight
                size={22}
                className={cn(
                  'text-muted-foreground transition-all duration-300 group-hover:-rotate-45 group-hover:text-primary',
                  isPositionRight && 'rotate-180 group-hover:rotate-[225deg]',
                )}
              />
            </motion.a>

            <div className="max-w-sm flex-1 md:w-[40%] md:max-w-none md:flex-none">
              <p
                className={cn(
                  'text-sm leading-[1.8] text-muted-foreground',
                  isPositionRight && 'md:text-right',
                )}
              >
                {description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
