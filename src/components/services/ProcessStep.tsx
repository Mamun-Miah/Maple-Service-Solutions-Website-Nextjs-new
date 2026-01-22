'use client'

import { motion, useInView, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'
import { CheckCircle } from 'lucide-react'

// Premium easing curves
const EASE_CINEMATIC = [0.16, 1, 0.3, 1]

interface ProcessStepProps {
  step: number
  title: string
  description: string
  isActive?: boolean
  index?: number
}

/**
 * ProcessStep - Step Activation Animation
 *
 * Each step activates with a soft glow when it's current step in view.
 * Works with vertical progress beam guidance.
 */
export function ProcessStep({
  step,
  title,
  description,
  isActive = false,
  index = 0
}: ProcessStepProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: -20
      }}
      animate={isInView ? {
        opacity: 1,
        x: 0
      } : undefined}
      transition={{
        duration: 0.56,
        ease: EASE_CINEMATIC,
        delay: index * 0.12
      }}
      className={cn(
        'relative flex items-start gap-6 p-6 rounded-2xl',
        'bg-[var(--svc-card)] border border-[var(--svc-border)]',
        'transition-all duration-500',
        isActive && 'ring-2 ring-[var(--svc-primary)]/20'
      )}
    >
      {/* Step Number */}
      <div className="relative z-10 flex-shrink-0">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isActive ? {
            scale: 1,
            opacity: 1
          } : {
            scale: 0.9,
            opacity: 0.7
          }}
          transition={{ duration: 0.4, ease: EASE_CINEMATIC }}
          className={cn(
            'w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold',
            'bg-[var(--svc-tint)] text-[var(--svc-primary)]',
            'transition-all duration-300'
          )}
        >
          {isActive ? <CheckCircle className="h-5 w-5" /> : step}
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h4 className="text-lg font-semibold text-[var(--svc-text)] mb-2">
          {title}
        </h4>
        <p className="text-[var(--svc-muted)] leading-relaxed">
          {description}
        </p>
      </div>

      {/* Active Glow */}
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--svc-primary)]/0 to-[var(--svc-secondary)]/20 blur-xl -z-10"
        />
      )}
    </motion.div>
  )
}
