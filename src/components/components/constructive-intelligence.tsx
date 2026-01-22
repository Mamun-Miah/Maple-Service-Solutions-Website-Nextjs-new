"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"
import ShinyText from "../ui/ShinyText"

export interface ConstructiveIntelligenceProps {
  className?: string
}

export function ConstructiveIntelligence({ className }: ConstructiveIntelligenceProps) {
  const wordStages = ["We", "Build", "Intelligent", "Products", "That", "Define", "Markets"]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const wordVariants: Variants = {
    hidden: (i: number) => ({
      opacity: i === 0 ? 1 : 0,
      y: i === 0 ? 0 : 20,
      filter: i === 2 ? "blur(8px)" : "blur(0px)",
    }),
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.28,
        delay: i === 0 ? 0 : i * 0.12,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  }

  return (
    <motion.div
      className={cn("flex flex-wrap items-center justify-center gap-3", className)}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {wordStages.map((word, index) => {
        // Apply gradient + shiny only to Intelligent + Products
        if (index === 2 || index === 3) {
          return (
            <motion.span
              key={word}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight inline-block bg-gradient-to-r from-[#606AF1] via-[#cd06ac] to-[#3C00FF] bg-clip-text text-transparent leading-[1.4] pb-1"
              variants={wordVariants}
              custom={index}
              initial="hidden"
              animate="visible"
            >
              <ShinyText
                text={word}
                speed={2}
                delay={0}
                color="transparent"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />
            </motion.span>
          )
        }

        // Other words remain normal
        return (
          <motion.span
            key={word}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight inline-block"
            variants={wordVariants}
            custom={index}
            initial="hidden"
            animate="visible"
          >
            {word}
          </motion.span>
        )
      })}
    </motion.div>
  )
}
