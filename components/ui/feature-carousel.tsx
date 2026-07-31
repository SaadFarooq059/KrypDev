'use client'

import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from 'react'
import Image, { type StaticImageData } from 'next/image'
import clsx from 'clsx'
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  type MotionStyle,
  type MotionValue,
  type Variants,
} from 'motion/react'
import Balancer from 'react-wrap-balancer'

import { cn } from '@/lib/utils'

type WrapperStyle = MotionStyle & {
  '--x': MotionValue<string>
  '--y': MotionValue<string>
}

interface CardProps {
  title: string
  description: string
  bgClass?: string
}

interface ImageSet {
  step1dark1?: StaticImageData | string
  step1dark2?: StaticImageData | string
  step1light1: StaticImageData | string
  step1light2: StaticImageData | string
  step2dark1?: StaticImageData | string
  step2dark2?: StaticImageData | string
  step2light1: StaticImageData | string
  step2light2: StaticImageData | string
  step3dark?: StaticImageData | string
  step3light: StaticImageData | string
  step4light: StaticImageData | string
  alt: string
}

export interface ComponentProps extends CardProps {
  step1img1Class?: string
  step1img2Class?: string
  step2img1Class?: string
  step2img2Class?: string
  step3imgClass?: string
  step4imgClass?: string
  image: ImageSet
}

interface StepImageProps {
  src: StaticImageData | string
  alt: string
  className?: string
  style?: React.CSSProperties
  width?: number
  height?: number
}

interface Step {
  id: string
  name: string
  title: string
  description: string
}

const TOTAL_STEPS = 4

const steps: readonly Step[] = [
  {
    id: '1',
    name: 'Build',
    title: 'Ship products that scale',
    description:
      'From web and mobile apps to desktop software — we design and build products that grow with your business.',
  },
  {
    id: '2',
    name: 'Integrate',
    title: 'Connect your stack',
    description:
      'Custom APIs, cloud infrastructure, and seamless integrations that unify your tools and data.',
  },
  {
    id: '3',
    name: 'Intelligence',
    title: 'Embed AI where it counts',
    description:
      'AI-powered features, chatbots, and automation that enhance your product without the hype.',
  },
  {
    id: '4',
    name: 'Support',
    title: 'Stay online, stay ahead',
    description:
      'Proactive IT support, monitoring, and helpdesk services to keep your systems running 24/7.',
  },
] as const

const ANIMATION_PRESETS = {
  fadeInScale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 25,
      mass: 0.5,
    },
  },
  slideInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 25,
      mass: 0.5,
    },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 25,
      mass: 0.5,
    },
  },
} as const

type AnimationPreset = keyof typeof ANIMATION_PRESETS

interface AnimatedStepImageProps extends StepImageProps {
  preset?: AnimationPreset
  delay?: number
  onAnimationComplete?: () => void
}

function useNumberCycler(
  totalSteps: number = TOTAL_STEPS,
  interval: number = 3000,
) {
  const [currentNumber, setCurrentNumber] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const setupTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => {
      setCurrentNumber((prev) => (prev + 1) % totalSteps)
      setupTimer()
    }, interval)
  }, [interval, totalSteps])

  const increment = useCallback(() => {
    setCurrentNumber((prev) => (prev + 1) % totalSteps)
    setupTimer()
  }, [totalSteps, setupTimer])

  useEffect(() => {
    setupTimer()
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [setupTimer])

  return {
    currentNumber,
    increment,
  }
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const userAgent = navigator.userAgent
    const isSmall = window.matchMedia('(max-width: 768px)').matches
    const isMobileUserAgent = Boolean(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.exec(
        userAgent,
      ),
    )
    const isDev = process.env.NODE_ENV !== 'production'
    if (isDev) {
      setIsMobile(isSmall || isMobileUserAgent)
    } else {
      setIsMobile(isSmall && isMobileUserAgent)
    }
  }, [])
  return isMobile
}

function IconCheck({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  )
}

const stepVariants: Variants = {
  inactive: {
    scale: 0.8,
    opacity: 0.5,
  },
  active: {
    scale: 1,
    opacity: 1,
  },
}

const StepImage = forwardRef<
  HTMLImageElement,
  StepImageProps & { [key: string]: unknown }
>(
  (
    { src, alt, className, style, width = 1200, height = 630, ...props },
    ref,
  ) => {
    return (
      <Image
        ref={ref}
        alt={alt}
        className={className}
        src={src}
        width={width}
        height={height}
        style={{
          position: 'absolute',
          userSelect: 'none',
          maxWidth: 'unset',
          ...style,
        }}
        {...props}
      />
    )
  },
)
StepImage.displayName = 'StepImage'

const MotionStepImage = motion(StepImage)

const AnimatedStepImage = ({
  preset = 'fadeInScale',
  delay = 0,
  onAnimationComplete,
  ...props
}: AnimatedStepImageProps) => {
  const presetConfig = ANIMATION_PRESETS[preset]
  return (
    <MotionStepImage
      {...props}
      {...presetConfig}
      transition={{
        ...presetConfig.transition,
        delay,
      }}
      onAnimationComplete={onAnimationComplete}
    />
  )
}

function FeatureCard({
  bgClass,
  children,
  step,
  stepsNav,
  overlay,
}: CardProps & {
  children: React.ReactNode
  step: number
  stepsNav?: React.ReactNode
  overlay?: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const isMobile = useIsMobile()

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    if (isMobile) return
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <motion.div className="animated-cards relative w-full rounded-[16px]">
      <div
        className={clsx(
          'group relative w-full overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-card to-secondary transition duration-300',
          'md:hover:border-primary/30',
          bgClass,
        )}
        onMouseMove={handleMouseMove}
        style={
          {
            '--x': useMotionTemplate`${mouseX}px`,
            '--y': useMotionTemplate`${mouseY}px`,
          } as WrapperStyle
        }
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at var(--x) var(--y), rgba(192,132,252,0.12), transparent 40%)`,
          }}
        />
        <div className="relative flex min-h-[520px] w-full flex-col p-6 md:min-h-[560px] md:p-10">
          <div className="relative z-30 mb-5 shrink-0 md:mb-6">{stepsNav}</div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              className="relative z-20 flex max-w-md shrink-0 flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.3,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              <motion.h2
                className="font-heading text-xl font-bold tracking-tight text-foreground md:text-2xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.1,
                  duration: 0.3,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                {steps[step].title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.3,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <Balancer>{steps[step].description}</Balancer>
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="relative z-10 mt-8 min-h-[240px] flex-1 md:mt-10 md:min-h-[300px]">
            {mounted ? children : null}
          </div>
        </div>
        {overlay}
      </div>
    </motion.div>
  )
}

function Steps({
  steps: stepData,
  current,
  onChange,
}: {
  steps: readonly Step[]
  current: number
  onChange: (index: number) => void
}) {
  return (
    <nav aria-label="Progress" className="flex justify-start px-1 md:px-2">
      <ol
        className="flex w-full flex-wrap items-center justify-start gap-2"
        role="list"
      >
        {stepData.map((step, stepIdx) => {
          const isCompleted = current > stepIdx
          const isCurrent = current === stepIdx
          const isFuture = !isCompleted && !isCurrent

          return (
            <motion.li
              key={`${step.name}-${stepIdx}`}
              initial="inactive"
              animate={isCurrent ? 'active' : 'inactive'}
              variants={stepVariants}
              transition={{ duration: 0.3 }}
              className={cn(
                'relative z-50 rounded-full px-3 py-1 transition-all duration-300 ease-in-out md:flex',
                isCompleted ? 'bg-muted/40' : 'bg-muted/20',
              )}
            >
              <div
                className={cn(
                  'group flex w-full cursor-pointer items-center focus:outline-none focus-visible:ring-2',
                  (isFuture || isCurrent) && 'pointer-events-none',
                )}
                onClick={() => onChange(stepIdx)}
              >
                <span className="flex items-center gap-2 text-sm font-medium">
                  <motion.span
                    initial={false}
                    animate={{
                      scale: isCurrent ? 1.2 : 1,
                    }}
                    className={cn(
                      'flex h-4 w-4 shrink-0 items-center justify-center rounded-full duration-300',
                      isCompleted && 'bg-primary text-primary-foreground',
                      isCurrent && 'bg-primary/30 text-muted-foreground',
                      isFuture && 'bg-primary/10',
                    )}
                  >
                    {isCompleted ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        <IconCheck className="h-3 w-3 stroke-primary-foreground stroke-[3] text-primary-foreground" />
                      </motion.div>
                    ) : (
                      <span
                        className={cn(
                          'text-xs',
                          isCurrent && 'text-muted-foreground',
                          isFuture && 'text-primary',
                        )}
                      >
                        {stepIdx + 1}
                      </span>
                    )}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={clsx(
                      'text-sm font-medium duration-300',
                      isCompleted && 'text-muted-foreground',
                      isCurrent && 'text-primary',
                      isFuture && 'text-muted-foreground',
                    )}
                  >
                    {step.name}
                  </motion.span>
                </span>
              </div>
            </motion.li>
          )
        })}
      </ol>
    </nav>
  )
}

const defaultClasses = {
  step1img1:
    'pointer-events-none w-[50%] border border-border/50 transition-all duration-500 rounded-2xl',
  step1img2:
    'pointer-events-none w-[60%] border border-border/50 transition-all duration-500 overflow-hidden rounded-2xl',
  step2img1:
    'pointer-events-none w-[50%] border border-border/50 transition-all duration-500 rounded-2xl overflow-hidden',
  step2img2:
    'pointer-events-none w-[40%] border border-border/50 transition-all duration-500 rounded-2xl overflow-hidden',
  step3img:
    'pointer-events-none w-[90%] border border-border/50 rounded-2xl transition-all duration-500 overflow-hidden',
  step4img:
    'pointer-events-none w-[90%] border border-border/50 rounded-2xl transition-all duration-500 overflow-hidden',
} as const

export const FeatureCarousel = ({
  image,
  step1img1Class = defaultClasses.step1img1,
  step1img2Class = defaultClasses.step1img2,
  step2img1Class = defaultClasses.step2img1,
  step2img2Class = defaultClasses.step2img2,
  step3imgClass = defaultClasses.step3img,
  step4imgClass = defaultClasses.step4img,
  ...props
}: ComponentProps) => {
  const { currentNumber: step, increment } = useNumberCycler()
  const [isAnimating, setIsAnimating] = useState(false)

  const handleIncrement = () => {
    if (isAnimating) return
    setIsAnimating(true)
    increment()
  }

  const handleAnimationComplete = () => {
    setIsAnimating(false)
  }

  const renderStepContent = () => {
    const content = () => {
      switch (step) {
        case 0:
          return (
            <motion.div
              className="relative h-full w-full"
              onAnimationComplete={handleAnimationComplete}
            >
              <AnimatedStepImage
                alt={image.alt}
                className={clsx(step1img1Class)}
                src={image.step1light1}
                preset="slideInLeft"
                width={828}
                height={592}
              />
              <AnimatedStepImage
                alt={image.alt}
                className={clsx(step1img2Class)}
                src={image.step1light2}
                preset="slideInRight"
                delay={0.1}
                width={864}
                height={624}
              />
            </motion.div>
          )
        case 1:
          return (
            <motion.div
              className="relative h-full w-full"
              onAnimationComplete={handleAnimationComplete}
            >
              <AnimatedStepImage
                alt={image.alt}
                className={clsx(step2img1Class, 'rounded-2xl')}
                src={image.step2light1}
                preset="fadeInScale"
                width={828}
                height={592}
              />
              <AnimatedStepImage
                alt={image.alt}
                className={clsx(step2img2Class, 'rounded-2xl')}
                src={image.step2light2}
                preset="fadeInScale"
                delay={0.1}
                width={648}
                height={532}
              />
            </motion.div>
          )
        case 2:
          return (
            <AnimatedStepImage
              alt={image.alt}
              className={clsx(step3imgClass, 'rounded-2xl')}
              src={image.step3light}
              preset="fadeInScale"
              onAnimationComplete={handleAnimationComplete}
              width={1656}
              height={654}
            />
          )
        case 3:
          return (
            <AnimatedStepImage
              alt={image.alt}
              className={clsx(step4imgClass, 'rounded-2xl')}
              src={image.step4light}
              preset="fadeInScale"
              onAnimationComplete={handleAnimationComplete}
              width={1656}
              height={654}
            />
          )
        default:
          return null
      }
    }

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          {...ANIMATION_PRESETS.fadeInScale}
          className="pointer-events-none absolute inset-0 z-10"
        >
          {content()}
        </motion.div>
      </AnimatePresence>
    )
  }

  return (
    <FeatureCard
      {...props}
      step={step}
      stepsNav={
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          <Steps current={step} onChange={() => {}} steps={steps} />
        </motion.div>
      }
      overlay={
        <motion.div
          className="absolute inset-0 z-40 cursor-pointer"
          onClick={handleIncrement}
          whileHover={{ scale: 1.005 }}
          whileTap={{ scale: 0.995 }}
          aria-label="Next step"
        />
      }
    >
      {renderStepContent()}
    </FeatureCard>
  )
}

FeatureCarousel.displayName = 'FeatureCarousel'

export { FeatureCarousel as Component }
