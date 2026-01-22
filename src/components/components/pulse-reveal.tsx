"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

export interface PulseRevealProps {
  children: string
  className?: string
  delay?: number
  wordDelay?: number
}

export function PulseReveal({ children, className, delay = 0, wordDelay = 0.12 }: PulseRevealProps) {
  const words = children.split(" ")

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: wordDelay,
      },
    },
  }

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 4,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const dotVariants: Variants = {
    hidden: {
      opacity: 0,
      filter: "brightness(0.5)",
    },
    visible: {
      opacity: 1,
      filter: "brightness(1)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    glow: {
      filter: "brightness(1.5) drop-shadow(0 0 8px currentColor)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  return (
    <motion.div
      className={cn("inline-flex flex-wrap items-center", className)}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {words.map((word, index) => (
        <React.Fragment key={index}>
          {word === "·" ? (
            <motion.span
              className="text-muted mx-2"
              variants={dotVariants}
              initial="hidden"
              animate={["visible", "glow"]}
            >
              ·
            </motion.span>
          ) : (
            <motion.span
              className="inline-block mr-2"
              variants={wordVariants}
            >
              {word}
            </motion.span>
          )}
        </React.Fragment>
      ))}
    </motion.div>
  )
}
