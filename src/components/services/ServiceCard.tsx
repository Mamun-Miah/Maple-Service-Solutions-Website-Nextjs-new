'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

// Premium easing curves
const EASE_CINEMATIC = [0.16, 1, 0.3, 1]
const EASE_LUXURY = [0.22, 1, 0.36, 1]

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  index?: number
}

/**
 * ServiceCard - "Precision Drop" Animation
 *
 * Cards do not "slide up" like homepage. Different signature:
 * - initial: opacity 0, y 0 but clipPath inset(0 0 100% 0)
 * - animate: clip opens upward + subtle blur clears
 * - hover: micro tilt (1-2deg) + border specular highlight
 */
export function ServiceCard({
  title,
  description,
  icon,
  features,
  index = 0
}: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 0,
        filter: prefersReducedMotion ? 'blur(0px)' : 'blur(8px)',
        clipPath: prefersReducedMotion ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)'
      }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        clipPath: 'inset(0 0 0 0)'
      } : undefined}
      transition={{
        duration: 0.72,
        ease: EASE_CINEMATIC,
        delay: prefersReducedMotion ? 0 : index * 0.1
      }}
      whileHover={{
        rotateX: 1,
        rotateY: 2,
        scale: 1.01,
        transition: { duration: 0.4, ease: EASE_LUXURY }
      }}
      className={cn(
        'relative z-50 rounded-2xl p-6 border',
        'bg-[var(--svc-card)] border-[var(--svc-border)]',
        'cursor-pointer transition-all duration-500'
      )}
    >
      {/* Border Specular Highlight on Hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: EASE_LUXURY }}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--svc-primary)]/10 to-[var(--svc-secondary)]/10 blur-md -z-10" />
      </motion.div>

      {/* Card Content */}
      <div className="relative z-10 space-y-4">
        {/* Icon + Title */}
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-[var(--svc-tint)] text-[var(--svc-primary)]">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-[var(--svc-text)] flex-1">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-[var(--svc-muted)] leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-sm text-[var(--svc-muted)]"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-[var(--svc-primary)]" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Learn More Link */}
        <div className="flex items-center gap-2 text-[var(--svc-primary)] text-sm font-semibold group mt-6">
          <span className="group-hover:underline underline-offset-2 decoration-2">Learn more</span>
          <motion.div
            whileHover={{ x: 4 }}
            transition={{ duration: 0.28, ease: EASE_LUXURY }}
          >
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
