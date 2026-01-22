'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

// Premium easing curves
const EASE_CINEMATIC = [0.16, 1, 0.3, 1]
const EASE_LUXURY = [0.22, 1, 0.36, 1]

interface ProductCardProps {
  name: string
  description: string
  tags: string[]
  status?: 'live' | 'beta' | 'coming-soon'
  index?: number
  onClick?: () => void
}

export function ProductCard({
  name,
  description,
  tags,
  status = 'live',
  index = 0,
  onClick
}: ProductCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const prefersReducedMotion = useReducedMotion()

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'live': return 'Live'
      case 'beta': return 'Beta'
      case 'coming-soon': return 'Coming Soon'
      default: return status
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 1,
        y: 0,
        filter: prefersReducedMotion ? 'blur(0px)' : 'blur(0px)'
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)'
      }}
      transition={{
        duration: 0.68,
        ease: EASE_CINEMATIC
      }}
      whileHover={{
        y: -6,
        scale: 1.01,
        transition: { duration: 0.32, ease: EASE_LUXURY }
      }}
      onClick={onClick}
      className={cn(
        'relative bg-[var(--prod-card)] rounded-2xl p-6',
        'border border-[var(--prod-border)] cursor-pointer',
        'transition-all duration-300'
      )}
    >
      {/* Status Badge */}
      <div className="absolute top-4 right-4">
        <span className={cn(
          'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium',
          status === 'live' && 'status-live',
          status === 'beta' && 'status-beta',
          status === 'coming-soon' && 'status-coming-soon'
        )}>
          {getStatusLabel(status)}
        </span>
      </div>

      {/* Card Content */}
      <div className="space-y-4">
        {/* Product Name */}
        <h3 className="text-xl font-semibold text-[var(--prod-text)] pr-16">
          {name}
        </h3>

        {/* One-line Value */}
        <p className="text-sm text-[var(--prod-muted)] leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-[var(--prod-tint)]/40 text-[var(--prod-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Product with Arrow Motion */}
        <div className="flex items-center gap-2 text-[var(--prod-primary)] text-sm font-medium group">
          <span>View Product</span>
          <motion.div
            whileHover={{ x: 4 }}
            transition={{ duration: 0.28, ease: EASE_LUXURY }}
          >
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        </div>
      </div>

      {/* Border Glow on Hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-[var(--prod-primary)]/20 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.32, ease: EASE_LUXURY }}
      />
    </motion.div>
  )
}
