"use client"

import * as React from "react"
import { motion, Variants, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export interface SlideFromDepthProps {
  children: React.ReactNode
  className?: string
  delay?: number
  depth?: number
}

export function SlideFromDepth({
  children,
  className,
  delay = 0,
  depth = 24,
}: SlideFromDepthProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: true,
    amount: 0.6,
    margin: "-50px",
  })

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: depth,
      scale: 0.92,
      rotateX: 8,
      z: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      z: 0,
      transition: {
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const depthGlowVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: delay + 0.2,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={cn("relative preserve-3d", className)}
      style={{
        perspective: "1000px",
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      whileHover={{
        y: -4,
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 blur-xl -z-10 rounded-2xl"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={depthGlowVariants}
      />
      {children}
    </motion.div>
  )
}
