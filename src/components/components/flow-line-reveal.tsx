"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

export interface FlowLineRevealProps {
  children: string
  className?: string
  delay?: number
}

export function FlowLineReveal({ children, className, delay = 1.2 }: FlowLineRevealProps) {
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const lineVariants: Variants = {
    hidden: {
      width: "0%",
      opacity: 0,
    },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay + 0.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <div className={cn("relative", className)}>
      <motion.div
        className="relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {children}
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        initial="hidden"
        animate="visible"
        variants={lineVariants}
      />
    </div>
  )
}
