'use client'

import { motion, useReducedMotion, useScroll, useTransform, useSpring } from 'framer-motion'

/**
 * ServicesChoreography - Studio Light Choreography
 *
 * Services page-specific scroll-linked effects:
 * - Diagonal light sweep across page
 * - Progress beam guidance in process section
 * - Section-based glow changes
 * - Vignette for readability
 */

export function ServicesChoreography() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()

  // Gentle diagonal drift of studio light
  const sweepX = useSpring(useTransform(scrollYProgress, [0, 1], ['-30%', '30%']), {
    stiffness: 60,
    damping: 18,
  })

  const sweepOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.55, 0.35, 0.25])

  // Section glow behavior: stronger around "Process" region
  const processGlow = useTransform(scrollYProgress, [0.25, 0.45, 0.6], [0, 0.45, 0.15])

  // Vignette for readability (subtle)
  const vignette = useTransform(scrollYProgress, [0, 0.25, 1], [0.08, 0.18, 0.22])

  if (reduce) return null

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base soft gradients */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 20% 12%, rgba(79,70,229,0.10), transparent 55%),' +
            'radial-gradient(circle at 78% 18%, rgba(167,139,250,0.10), transparent 55%),' +
            'radial-gradient(circle at 50% 80%, rgba(99,102,241,0.08), transparent 58%)',
        }}
      />

      {/* Diagonal studio light sweep */}
      <motion.div
        aria-hidden="true"
        style={{ x: sweepX, opacity: sweepOpacity }}
        className="absolute -inset-y-40 left-1/2 w-[52vw] -translate-x-1/2 rotate-[18deg] bg-gradient-to-r from-white/0 via-white/14 to-white/0 blur-2xl"
      />

      {/* Process region glow beam (mid page) */}
      <motion.div
        aria-hidden="true"
        style={{ opacity: processGlow }}
        className="absolute -inset-x-24 top-[46%] h-[420px] rounded-[999px] bg-gradient-to-r from-indigo-500/0 via-violet-400/16 to-indigo-500/0 blur-3xl"
      />

      {/* Vignette */}
      <motion.div
        aria-hidden="true"
        style={{ opacity: vignette }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.22)_62%,rgba(0,0,0,0.45)_100%)]"
      />
    </div>
  )
}
