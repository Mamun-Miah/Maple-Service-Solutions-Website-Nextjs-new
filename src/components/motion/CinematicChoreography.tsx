"use client"

import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion"
import { EASE_CINEMATIC, EASE_LUXURY } from "../motion/variants"

/**
 * Cinematic choreography layer:
 * - Controls subtle background parallax + vignette + section glow intensity based on scroll
 * - Drop once into Home page (top-level) and keep behind content
 * - Uses aurora breathing + intensity control
 */
export function CinematicChoreography() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()

  // Global parallax drift for background aurora layer
  const yDrift = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "10%"]), {
    stiffness: 90,
    damping: 20,
  })

  // Vignette intensity - strengthens as you scroll for readability
  const vignette = useTransform(scrollYProgress, [0, 0.22, 1], [0.25, 0.35, 0.42])

  // Mid-page aurora glow pulses - breathes around "hero -> products/services" area
  const glow = useTransform(scrollYProgress, [0, 0.35, 0.55, 1], [0.0, 0.28, 0.18, 0.0])

  if (reduce) return null

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Parallax aurora texture with slow drift */}
      <motion.div
        style={{ y: yDrift }}
        className="absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.12),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.08),transparent_55%),radial-gradient(circle_at_50%_70%,rgba(139,92,246,0.10),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[url('/textures/noise.png')] bg-repeat bg-fixed" />
      </motion.div>

      {/* Cinematic vignette for depth and readability control */}
      <motion.div
        style={{ opacity: vignette }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.32)_60%,rgba(0,0,0,0.55)_100%)]"
        aria-hidden="true"
      />

      {/* Mid-page aurora glow "breathing" effect */}
      <motion.div
        style={{ opacity: glow }}
        className="absolute -inset-x-24 top-[38%] h-[420px] rounded-[999px] bg-gradient-to-r from-indigo-500/0 via-indigo-400/16 to-cyan-300/0 blur-3xl"
        aria-hidden="true"
      />
    </div>
  )
}
