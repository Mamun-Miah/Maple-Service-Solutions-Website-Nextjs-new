"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

export interface PrideRevealProps {
  children: string
  className?: string
  delay?: number
}

export function PrideReveal({ children, className, delay = 0.8 }: PrideRevealProps) {
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const glowVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 0.5,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: delay + 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <div className={cn("relative inline-block", className)}>
      <motion.p
        className="relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {children}
      </motion.p>

      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-primary/20 blur-md rounded-full"
        initial="hidden"
        animate="visible"
        variants={glowVariants}
      />
    </div>
  )
}
