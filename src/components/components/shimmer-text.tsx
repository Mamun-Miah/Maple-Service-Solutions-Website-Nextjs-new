"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ShimmerTextProps {
  children: React.ReactNode
  className?: string
  duration?: number
  delay?: number
}

export function ShimmerText({
  children,
  className,
  duration = 2,
  delay = 0,
}: ShimmerTextProps) {
  return (
    <span
      className={cn(
        "relative inline-block",
        className
      )}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      <span className="relative">
        <span className="relative z-10">{children}</span>
        <span
          className="absolute inset-0 z-0 shimmer-effect"
          style={{
            animationDuration: `${duration}s`,
          }}
        />
      </span>
    </span>
  )
}
