'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// Premium easing curves
const EASE_CINEMATIC = [0.16, 1, 0.3, 1]

interface ExpertiseItemProps {
  title: string
  items: string[]
  index?: number
}

/**
 * ExpertiseItem - Editorial Split Reveal
 *
 * Each bullet reveals with stagger + underline grow (not fade).
 */
function ExpertiseItem({ title, items, index = 0 }: ExpertiseItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div ref={ref} className="mb-8">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{
          duration: 0.48,
          ease: EASE_CINEMATIC,
          delay: index * 0.08
        }}
        className="text-lg font-semibold text-[var(--svc-text)] mb-4"
      >
        {title}
      </motion.h3>

      <ul className="space-y-3">
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : undefined}
            transition={{
              duration: 0.4,
              ease: EASE_CINEMATIC,
              delay: index * 0.08 + (i * 0.06)
            }}
            className="relative"
          >
            <div className="flex items-start gap-3 text-[var(--svc-muted)]">
              <div className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--svc-secondary)]" />
              <span>{item}</span>
            </div>

            {/* Underline grow (not fade) */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[var(--svc-secondary)]/0 via-[var(--svc-secondary)] to-[var(--svc-secondary)]/0"
              initial={{ width: '0%' }}
              animate={isInView ? { width: '100%' } : undefined}
              transition={{
                duration: 0.56,
                ease: EASE_CINEMATIC,
                delay: index * 0.08 + (i * 0.06) + 0.1
              }}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

interface ExpertiseColumnProps {
  title: string
  expertiseItems: Array<{ title: string; items: string[] }>
  delay?: number
}

/**
 * ExpertiseColumn - Editorial Split Reveal
 *
 * Left column reveals first, right column reveals second.
 */
export function ExpertiseColumn({ title, expertiseItems, delay = 0 }: ExpertiseColumnProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div ref={ref} className="flex-1">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{
          duration: 0.56,
          ease: EASE_CINEMATIC,
          delay
        }}
        className="text-2xl font-semibold text-[var(--svc-text)] mb-8"
      >
        {title}
      </motion.h2>

      <div className="space-y-6">
        {expertiseItems.map((item, i) => (
          <ExpertiseItem
            key={i}
            title={item.title}
            items={item.items}
            index={i}
          />
        ))}
      </div>
    </div>
  )
}
