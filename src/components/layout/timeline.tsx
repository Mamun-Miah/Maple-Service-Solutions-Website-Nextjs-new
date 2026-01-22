"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { CheckCircle2, Sparkles, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

export interface TimelineItem {
  title: string
  description: string
  icon?: React.ReactNode
}

export interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  const { scrollYProgress } = useScroll()

  return (
    <div className={cn("relative", className)}>
      {/* Animated Progress Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border overflow-hidden">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="w-full h-full bg-gradient-to-b from-transparent via-accent-secondary/50 to-transparent origin-top"
        />
      </div>

      {/* Timeline Items */}
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex gap-6"
          >
            {/* Animated Icon/Circle */}
            <div className="relative z-10 flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 rounded-full glass border-2 border-accent-secondary/50 shadow-lg premium-glow flex items-center justify-center relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    rotate: 360,
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
                  style={{
                    background: "conic-gradient(from-transparent, via-accent-secondary/20, to-transparent)",
                  }}
                />
                <div className="relative z-10">
                  {item.icon || (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-primary/60 flex items-center justify-center shadow-md">
                      <motion.span
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          transition: {
                            duration: 1.5,
                            repeat: Infinity,
                          },
                        }}
                        className="text-lg font-bold text-primary-foreground relative"
                      >
                        0{index + 1}
                      </motion.span>
                    </div>
                  )}
                </div>
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    rotate: -360,
                    scale: [1.2, 1, 1.2],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                    },
                  }}
                  style={{
                    background: "conic-gradient(from-transparent 10deg, via-accent-secondary/30 30deg, transparent 50%, transparent 80deg, via-accent-secondary/30 130deg, transparent)",
                  }}
                />
              </motion.div>
            </div>

            {/* Content */}
            <div className="flex-1 pt-2">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                className="text-xl font-semibold mb-2 text-gradient-aurora"
              >
                {item.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.15 }}
                className="text-muted-foreground leading-relaxed"
              >
                {item.description}
              </motion.p>
            </div>

            {/* Number */}
            <div className="hidden md:block flex-shrink-0 pt-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.3, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="text-7xl font-bold text-muted-foreground/10"
              >
                0{index + 1}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
