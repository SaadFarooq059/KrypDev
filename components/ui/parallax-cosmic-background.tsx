'use client'

import React, { useEffect, useState } from 'react'

interface CosmicParallaxBgProps {
  /** Main heading text (displayed large in the center) */
  head: string
  /** Subtitle text — comma-separated parts animate in sequence */
  text: string
  /** Whether the text animations should loop @default true */
  loop?: boolean
  /** Custom class name for additional styling */
  className?: string
}

function generateStarBoxShadow(count: number, color: string): string {
  const shadows: string[] = []
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 2000)
    const y = Math.floor(Math.random() * 2000)
    shadows.push(`${x}px ${y}px ${color}`)
  }
  return shadows.join(', ')
}

/**
 * Cosmic parallax background with animated stars, horizon, and title text.
 */
const CosmicParallaxBg: React.FC<CosmicParallaxBgProps> = ({
  head,
  text,
  loop = true,
  className = '',
}) => {
  const [smallStars, setSmallStars] = useState('')
  const [mediumStars, setMediumStars] = useState('')
  const [bigStars, setBigStars] = useState('')

  const textParts = text.split(',').map((part) => part.trim()).filter(Boolean)

  useEffect(() => {
    setSmallStars(generateStarBoxShadow(700, 'rgba(232, 223, 245, 0.9)'))
    setMediumStars(generateStarBoxShadow(200, 'rgba(192, 132, 252, 0.95)'))
    setBigStars(generateStarBoxShadow(100, '#ffffff'))
  }, [])

  return (
    <div
      className={`cosmic-parallax-container ${className}`.trim()}
      style={
        {
          '--animation-iteration': loop ? 'infinite' : '1',
        } as React.CSSProperties
      }
    >
      <div
        id="stars"
        className="cosmic-stars"
        style={
          {
            boxShadow: smallStars,
            '--star-shadow': smallStars,
          } as React.CSSProperties
        }
      />
      <div
        id="stars2"
        className="cosmic-stars-medium"
        style={
          {
            boxShadow: mediumStars,
            '--star-shadow': mediumStars,
          } as React.CSSProperties
        }
      />
      <div
        id="stars3"
        className="cosmic-stars-large"
        style={
          {
            boxShadow: bigStars,
            '--star-shadow': bigStars,
          } as React.CSSProperties
        }
      />

      <div id="horizon">
        <div className="glow" />
      </div>
      <div id="earth" />

      <div id="title">{head.toUpperCase()}</div>
      <div id="subtitle">
        {textParts.map((part, index) => (
          <React.Fragment key={`${part}-${index}`}>
            <span className={`subtitle-part-${Math.min(index + 1, 3)}`}>
              {part.toUpperCase()}
            </span>
            {index < textParts.length - 1 ? ' ' : null}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export { CosmicParallaxBg }
