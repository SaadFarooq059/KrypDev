'use client'

import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { HalomotButton } from '@/components/ui/halomot-button'

export type ProjectShowcaseItem = {
  quote: string
  name: string
  designation: string
  src: string
  link?: string
}

type ProjectShowcaseProps = {
  testimonials: ProjectShowcaseItem[]
  autoplay?: boolean
  colors?: { name?: string; position?: string; testimony?: string }
  fontSizes?: { name?: string; position?: string; testimony?: string }
  spacing?: {
    top?: string
    bottom?: string
    lineHeight?: string
    nameTop?: string
    nameBottom?: string
    positionTop?: string
    positionBottom?: string
    testimonyTop?: string
    testimonyBottom?: string
  }
  desktopVersionBottomThreshold?: number
  imageAspectRatio?: number
  isRTL?: boolean
  onItemClick?: (link: string) => void
  outerRounding?: string
  innerRounding?: string
  outlineColor?: string
  hoverOutlineColor?: string
  buttonInscriptions?: {
    previousButton: string
    nextButton: string
    openWebAppButton: string
  }
  halomotButtonGradient?: string
  halomotButtonBackground?: string
  halomotButtonTextColor?: string
  halomotButtonOuterBorderRadius?: string
  halomotButtonInnerBorderRadius?: string
  halomotButtonHoverTextColor?: string
}

function rotateForIndex(index: number) {
  // Deterministic tilt — avoids hydration mismatch from Math.random()
  return ((index * 7) % 21) - 10
}

export function ProjectShowcase({
  testimonials,
  autoplay = false,
  colors = {
    name: 'var(--project-showcase-name-color)',
    position: 'var(--project-showcase-position-color)',
    testimony: 'var(--project-showcase-testimony-color)',
  },
  fontSizes = {
    name: 'var(--project-showcase-name-size)',
    position: 'var(--project-showcase-position-size)',
    testimony: 'var(--project-showcase-testimony-size)',
  },
  spacing = {
    top: '0',
    bottom: '0',
    lineHeight: 'var(--project-showcase-line-height)',
    nameTop: 'var(--project-showcase-name-top)',
    nameBottom: 'var(--project-showcase-name-bottom)',
    positionTop: 'var(--project-showcase-position-top)',
    positionBottom: 'var(--project-showcase-position-bottom)',
    testimonyTop: 'var(--project-showcase-testimony-top)',
    testimonyBottom: 'var(--project-showcase-testimony-bottom)',
  },
  desktopVersionBottomThreshold = 1024,
  imageAspectRatio = 1.37,
  isRTL = false,
  onItemClick,
  outerRounding = '18.2px',
  innerRounding = '18px',
  outlineColor = 'rgba(192, 132, 252, 0.25)',
  hoverOutlineColor = 'rgba(192, 132, 252, 0.55)',
  buttonInscriptions = {
    previousButton: 'Previous',
    nextButton: 'Next',
    openWebAppButton: 'View Project',
  },
  halomotButtonGradient = 'var(--project-showcase-button-gradient)',
  halomotButtonBackground = 'var(--project-showcase-button-background)',
  halomotButtonTextColor = 'var(--project-showcase-button-text-color)',
  halomotButtonOuterBorderRadius = 'var(--project-showcase-button-outer-radius)',
  halomotButtonInnerBorderRadius = 'var(--project-showcase-button-inner-radius)',
  halomotButtonHoverTextColor = 'var(--project-showcase-button-hover-text-color)',
}: ProjectShowcaseProps) {
  const [active, setActive] = useState(0)
  const [isMobileView, setIsMobileView] = useState(false)
  const [componentWidth, setComponentWidth] = useState(0)
  const componentRef = useRef<HTMLDivElement>(null)

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const handlePrev = () => {
    setActive(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    )
  }

  const isActive = (index: number) => index === active

  useEffect(() => {
    if (!autoplay) return
    const interval = setInterval(handleNext, 5000)
    return () => clearInterval(interval)
  }, [autoplay, handleNext])

  const handleResize = useCallback(() => {
    if (!componentRef.current) return
    setComponentWidth(componentRef.current.offsetWidth)
    setIsMobileView(
      componentRef.current.offsetWidth < desktopVersionBottomThreshold,
    )
  }, [desktopVersionBottomThreshold])

  useEffect(() => {
    const node = componentRef.current
    if (!node) return
    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(node)
    handleResize()
    return () => resizeObserver.disconnect()
  }, [handleResize])

  const calculateGap = (width: number) => {
    const minWidth = 1024
    const maxWidth = 1456
    const minGap = 60
    const maxGap = 86
    if (width <= minWidth) return minGap
    if (width >= maxWidth)
      return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth))
    return (
      minGap +
      (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth))
    )
  }

  const activeItem = testimonials[active]

  const buttonProps = {
    gradient: halomotButtonGradient,
    backgroundColor: halomotButtonBackground,
    textColor: halomotButtonTextColor,
    innerBorderRadius: halomotButtonInnerBorderRadius,
    outerBorderRadius: halomotButtonOuterBorderRadius,
    ...(halomotButtonHoverTextColor
      ? { hoverTextColor: halomotButtonHoverTextColor }
      : {}),
  }

  return (
    <div
      ref={componentRef}
      className="mx-auto w-full font-sans antialiased"
      style={{
        lineHeight: spacing.lineHeight,
        backgroundColor: 'transparent',
        direction: isRTL ? 'rtl' : 'ltr',
        paddingTop: spacing.top,
        paddingBottom: spacing.bottom,
      }}
    >
      <div
        className="relative"
        style={{
          display: 'grid',
          gridTemplateColumns: isMobileView ? '1fr' : '1fr 1fr',
          gap: `${calculateGap(componentWidth)}px`,
        }}
      >
        <div className={isRTL && !isMobileView ? 'order-2 w-full' : 'w-full'}>
          <div
            className="relative"
            style={{ paddingTop: `${(1 / imageAspectRatio) * 100}%` }}
          >
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.name}-${index}`}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: rotateForIndex(index),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : rotateForIndex(index),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -40, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: rotateForIndex(index),
                  }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="absolute inset-0 origin-bottom"
                >
                  <ImageContainer
                    src={testimonial.src}
                    alt={testimonial.name}
                    outerRounding={outerRounding}
                    innerRounding={innerRounding}
                    outlineColor={outlineColor}
                    hoverOutlineColor={hoverOutlineColor}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div
          className={`flex w-full flex-col justify-between py-4 ${
            isRTL && !isMobileView ? 'order-1' : ''
          }`}
        >
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <h3
              className="font-heading font-bold"
              style={{
                fontSize: fontSizes.name,
                color: colors.name,
                marginTop: spacing.nameTop,
                marginBottom: spacing.nameBottom,
                textAlign: isRTL && !isMobileView ? 'right' : 'left',
              }}
            >
              {activeItem.name}
            </h3>
            <p
              style={{
                fontSize: fontSizes.position,
                color: colors.position,
                marginTop: spacing.positionTop,
                marginBottom: spacing.positionBottom,
                textAlign: isRTL && !isMobileView ? 'right' : 'left',
              }}
            >
              {activeItem.designation}
            </p>
            <motion.p
              style={{
                fontSize: fontSizes.testimony,
                color: colors.testimony,
                marginTop: spacing.testimonyTop,
                marginBottom: spacing.testimonyBottom,
                textAlign: isRTL && !isMobileView ? 'right' : 'left',
              }}
            >
              {activeItem.quote.split(' ').map((word, index) => (
                <motion.span
                  key={`${active}-${index}`}
                  initial={{ filter: 'blur(10px)', opacity: 0, y: 5 }}
                  animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: 'easeInOut',
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          <div
            className={`flex w-full flex-wrap gap-3 ${isMobileView ? 'pt-8' : 'pt-6 md:pt-0'}`}
            style={{
              justifyContent:
                isRTL && !isMobileView ? 'flex-start' : 'flex-start',
            }}
          >
            <HalomotButton
              inscription={buttonInscriptions.previousButton}
              onClick={handlePrev}
              fixedWidth="140px"
              {...buttonProps}
            />
            <HalomotButton
              inscription={buttonInscriptions.nextButton}
              onClick={handleNext}
              fixedWidth="140px"
              {...buttonProps}
            />
            <HalomotButton
              inscription={buttonInscriptions.openWebAppButton}
              onClick={() => onItemClick?.(activeItem.link || '')}
              fillWidth
              href={activeItem.link}
              {...buttonProps}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function ImageContainer({
  src,
  alt,
  outerRounding,
  innerRounding,
  outlineColor,
  hoverOutlineColor,
}: {
  src: string
  alt: string
  outerRounding: string
  innerRounding: string
  outlineColor: string
  hoverOutlineColor: string
}) {
  return (
    <div
      className="group relative h-full w-full p-px transition-colors duration-300"
      style={{
        borderRadius: outerRounding,
        backgroundColor: outlineColor,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverOutlineColor
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = outlineColor
      }}
    >
      <div
        className="relative h-full w-full overflow-hidden"
        style={{ borderRadius: innerRounding }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          draggable={false}
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  )
}
