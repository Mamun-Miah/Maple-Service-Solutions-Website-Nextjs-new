'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

// Premium easing curves
const EASE_CINEMATIC = [0.16, 1, 0.3, 1]

interface CounterProps {
  target: number
  duration?: number
  className?: string
}

export function Counter({ target, duration = 1.5, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const prefersReducedMotion = useReducedMotion()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView || prefersReducedMotion) {
      if (prefersReducedMotion) {
        setCount(target)
      }
      return
    }

    let startTime: number | null = null
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const easeProgress = 1 - Math.pow(1 - progress, 3) // ease-out cubic

      setCount(Math.floor(easeProgress * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, target, duration, prefersReducedMotion])

  return (
    <span ref={ref} className={cn('font-semibold tabular-nums', className)}>
      {count}
    </span>
  )
}
