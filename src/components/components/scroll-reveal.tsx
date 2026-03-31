"use client"

import * as React from "react"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  duration?: number
  className?: string
  once?: boolean
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.8,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const content = contentRef.current

    if (!container || !content) return

    // Set initial state based on direction
    const initialProps = {
      opacity: 0,
      y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
      x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
    }

    gsap.set(content, initialProps)

    // Create scroll-triggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: once ? "play none none reverse" : "play none none reverse",
      },
    })

    tl.to(content, {
      opacity: 1,
      y: 0,
      x: 0,
      duration,
      delay,
      ease: "power3.out",
    })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [delay, direction, duration, once])

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div ref={contentRef}>{children}</div>
    </div>
  )
}

export interface StaggerRevealProps {
  children: React.ReactNode[]
  delay?: number
  staggerDelay?: number
  direction?: "up" | "down" | "left" | "right"
  duration?: number
  className?: string
}

export function StaggerReveal({
  children,
  delay = 0,
  staggerDelay = 0.1,
  direction = "up",
  duration = 0.8,
  className = "",
}: StaggerRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const items = Array.from(container.children)

    // Set initial state
    const initialProps = {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    }

    gsap.set(items, initialProps)

    // Create staggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })

    tl.to(items, {
      opacity: 1,
      y: 0,
      x: 0,
      duration,
      delay,
      stagger: staggerDelay,
      ease: "power3.out",
    })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [delay, staggerDelay, direction, duration])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

export interface ParallaxScrollProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function ParallaxScroll({
  children,
  speed = 0.5,
  className = "",
}: ParallaxScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const content = contentRef.current

    if (!container || !content) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    })

    tl.to(content, {
      y: () => container.offsetHeight * speed,
      ease: "none",
    })

    return () => {
      tl.kill()
      // ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [speed])

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div ref={contentRef}>{children}</div>
    </div>
  )
}
