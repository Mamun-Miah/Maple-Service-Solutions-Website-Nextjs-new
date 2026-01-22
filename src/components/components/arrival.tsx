"use client"

import * as React from "react"
import { motion, Variants, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export interface ArrivalProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function Arrival({ children, className, delay = 0 }: ArrivalProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
    margin: "-100px",
  })

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const gradientVariants: Variants = {
    hidden: {
      opacity: 0,
      backgroundPosition: "0% 50%",
    },
    visible: {
      opacity: 1,
      backgroundPosition: ["0% 50%", "50% 50%", "100% 50%"],
      transition: {
        duration: 2,
        delay: delay + 0.2,
        ease: "easeInOut",
      },
    },
  }

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.05,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        className="relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={gradientVariants}
      >
        {children}
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 pointer-events-none"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={gradientVariants}
      />
    </motion.div>
  )
}
