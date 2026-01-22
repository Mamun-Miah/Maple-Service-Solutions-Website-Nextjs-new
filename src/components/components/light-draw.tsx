"use client"

import * as React from "react"
import { motion, Variants, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export interface LightDrawProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function LightDraw({ children, className, delay = 0 }: LightDrawProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: true,
    amount: 0.6,
    margin: "-50px",
  })

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const gradientVariants: Variants = {
    hidden: {
      x: "-100%",
    },
    visible: {
      x: "200%",
      transition: {
        duration: 1.2,
        delay: delay + 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {children}
      </motion.div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={gradientVariants}
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </motion.div>
    </div>
  )
}
