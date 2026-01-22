"use client"

import * as React from "react"
import { motion, Variants, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export interface ExpansionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  center?: boolean
}

export function Expansion({ children, className, delay = 0, center = false }: ExpansionProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
    margin: "-50px",
  })

  const origin = center ? "center" : "left"

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: center ? 0.8 : 0.95,
      x: center ? 0 : -20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
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
      style={{
        transformOrigin: origin,
      }}
    >
      {children}
    </motion.div>
  )
}
