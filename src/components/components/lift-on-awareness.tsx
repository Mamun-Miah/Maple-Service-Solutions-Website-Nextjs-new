"use client"

import * as React from "react"
import { motion, Variants, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export interface LiftOnAwarenessProps {
  children: React.ReactNode
  className?: string
  delay?: number
  liftDistance?: number
  viewportThreshold?: number
}

export function LiftOnAwareness({
  children,
  className,
  delay = 0,
  liftDistance = 12,
  viewportThreshold = 0.6,
}: LiftOnAwarenessProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: true,
    amount: viewportThreshold,
    margin: "-50px",
  })

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: liftDistance,
      scale: 0.92,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const borderGlowVariants: Variants = {
    hidden: {
      opacity: 0,
      boxShadow: "0 0 0 transparent",
    },
    visible: {
      opacity: 1,
      boxShadow: "0 0 20px -5px rgba(99, 102, 241, 0.3)",
      transition: {
        duration: 0.6,
        delay: delay + 0.3,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={cn("", className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      whileHover={{
        y: -3,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
    >
      <motion.div
        className="h-full w-full"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={borderGlowVariants}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
