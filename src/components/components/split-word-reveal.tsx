"use client"

import * as React from "react"
import { motion, Variants, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export interface SplitWordRevealProps {
  children: string
  className?: string
  delay?: number
  viewportOnce?: boolean
}

export function SplitWordReveal({
  children,
  className,
  delay = 0,
  viewportOnce = true,
}: SplitWordRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: viewportOnce,
    margin: "-50px",
  })

  const words = children.split(" ")

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: 0.1,
      },
    },
  }

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 15,
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

  return (
    <div ref={ref} className={cn("inline-block", className)}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="inline-flex flex-wrap items-center"
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className="inline-block mr-2"
            variants={wordVariants}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}
