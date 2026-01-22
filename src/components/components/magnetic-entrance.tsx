"use client"

import * as React from "react"
import { motion, Variants, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

export interface MagneticEntranceProps {
  children: React.ReactNode
  className?: string
  delay?: number
  strength?: number
}

export function MagneticEntrance({
  children,
  className,
  delay = 0,
  strength = 0.3,
}: MagneticEntranceProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = {
    damping: 25,
    stiffness: 400,
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    x.set(mouseX * strength)
    y.set(mouseY * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={cn("inline-block", className)}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: useSpring(x, springConfig),
        y: useSpring(y, springConfig),
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </motion.div>
  )
}
