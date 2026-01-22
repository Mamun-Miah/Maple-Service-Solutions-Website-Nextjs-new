"use client"

import * as React from "react"
import { motion, Variants, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export interface SequentialIntelligenceProps {
  children: React.ReactNode
  className?: string
  index: number
  staggerDelay?: number
}

export function SequentialIntelligence({
  children,
  className,
  index,
  staggerDelay = 0.08,
}: SequentialIntelligenceProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
    margin: "-100px",
  })

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.35,
        delay: index * staggerDelay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const iconVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: -45,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        delay: index * staggerDelay + 0.1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -10,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: index * staggerDelay + 0.2,
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
    >
      {React.Children.map(children, (child, childIndex) => {
        if (childIndex === 0) {
          return (
            <motion.div
              key="icon"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={iconVariants}
            >
              {child}
            </motion.div>
          )
        }
        return (
          <motion.div
            key={`text-${childIndex}`}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
          >
            {child}
          </motion.div>
        )
      })}
    </motion.div>
  )
}
