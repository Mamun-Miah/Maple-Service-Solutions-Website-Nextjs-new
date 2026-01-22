"use client"

import * as React from "react"
import { motion, useReducedMotion, useSpring, useScroll, useTransform } from "framer-motion"
import { EASE_CINEMATIC, EASE_LUXURY } from "../motion/variants"

type PremiumHeadlineProps = {
  className?: string;
  words?: Array<string | { intelligent: true; text: string }>;
};

/**
 * Ultra-premium headline with:
 * - Cinematic letter "uncover" animation (mask reveal)
 * - "Intelligent" forged from "Build" with premium glow
 * - Specular shine pass that sweeps across "Intelligent" once
 * - Scroll-linked micro parallax + contrast lift
 */
export function PremiumHeadline({
  className,
  words = ["We", "Build", { intelligent: true, text: "Intelligent" }, "Products", "That", "Define", "Markets."],
}: PremiumHeadlineProps) {
  const reduce = useReducedMotion()
  const heroRef = React.useRef<HTMLDivElement>(null)

  // Scroll-linked nuance (only within hero area)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const drift = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "10%"]), {
    stiffness: 120,
    damping: 22,
  })

  const contrast = useTransform(scrollYProgress, [0, 1], [1, 1.06])

  // Cinematic cadence timing
  const wDelay = 0.12
  const buildDelay = wDelay * 1
  const intelligentStart = buildDelay + 0.36
  const intelligentDur = 0.68
  const productsDelay = intelligentStart + 0.42
  const thatDelay = productsDelay + 0.42
  const defineDelay = thatDelay + 0.42
  const marketsDelay = defineDelay + 0.42

  if (reduce) {
    return (
      <h1 className={className}>
        We Build{" "}
        <span className="premium-intelligent">Intelligent</span>{" "}
        Products That Define Markets.
      </h1>
    )
  }

  return (
    <motion.div ref={heroRef} style={{ y: drift, filter: `contrast(${contrast})` }}>
      <h1 className={className} aria-label="We Build Intelligent Products That Define Markets.">
        <span className="inline-flex flex-wrap items-baseline justify-center gap-x-3 gap-y-2">
          {words.map((token, i) => {
            // Special intelligent word injection
            if (typeof token !== "string" && token.intelligent) {
              return (
                <IntelligentForgedWord
                  key={`intelligent-${i}`}
                  text={token.text}
                  buildDelay={buildDelay}
                  intelligentStart={intelligentStart}
                  intelligentDur={intelligentDur}
                />
              )
            }

            const text = token as string
            let delay = 0

            // Word timing
            if (text === "We") delay = 0
            else if (text === "Build") delay = buildDelay
            else if (text === "Intelligent") delay = intelligentStart
            else if (text === "Products") delay = productsDelay
            else if (text === "That") delay = thatDelay
            else if (text === "Define") delay = defineDelay
            else delay = marketsDelay

            return (
              <span key={`word-${i}`} className="relative inline-flex items-baseline">
                <WordCinematic text={text} delay={delay} />
              </span>
            )
          })}
        </span>
      </h1>
    </motion.div>
  )
}

/**
 * Cinematic letter animation with mask reveal
 */
function WordCinematic({ text, delay }: { text: string; delay: number }) {
  const letters = React.useMemo(() => Array.from(text), [text]);

  // Letter cinematic variants
  const letterCinematic = {
    hidden: {
      opacity: 0,
      clipPath: "inset(0 0 100% 0)",
      filter: "blur(6px)"
    },
    show: {
      opacity: 1,
      clipPath: "inset(0 0 0% 0)",
      filter: "blur(0px)"
    }
  }

  return (
    <motion.span
      className="inline-flex"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            delay,
            staggerChildren: 0.018, // Crisp premium cadence
          },
        },
      }}
    >
      {letters.map((ch, idx) => (
        <motion.span
          key={`${text}-${idx}-${ch}`}
          className="inline-block"
          variants={{
            hidden: letterCinematic.hidden,
            show: letterCinematic.show,
          }}
        >
          {/* Preserve spaces */}
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </motion.span>
  )
}

/**
 * Renders Intelligent word with premium glow effects
 */
function IntelligentForgedWord({
  text,
  buildDelay,
  intelligentStart,
  intelligentDur,
}: {
  text: string
  buildDelay: number
  intelligentStart: number
  intelligentDur: number
}) {
  return (
    <span className="relative inline-flex items-baseline">
      {/* BUILD - solid anchor word */}
      <WordCinematic text={text} delay={buildDelay} />

      {/* Reserved blank slot for layout stability */}
      <span
        className="inline-block align-baseline"
        style={{ width: `${Math.max(text.length, 10)}ch` }}
        aria-hidden="true"
      />

      {/* INTELLIGENT - forged from behind with premium glow */}
      <motion.span
        className="premium-intelligent absolute left-0 top-0 inline-block"
        initial={{
          opacity: 0,
          x: "-60%",
          y: 2,
          filter: "blur(12px)",
          clipPath: "inset(0 0 0%)",
        }}
        animate={{
          opacity: 1,
          x: "0%",
          y: 0,
          filter: "blur(0px)",
          clipPath: "inset(0 0 0% 0)",
        }}
        transition={{
          delay: intelligentStart,
          duration: intelligentDur,
          ease: EASE_LUXURY,
        }}
      >
        {text}

        {/* Build glow pulse - one-time */}
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-6 -inset-y-4 -z-10 rounded-full bg-gradient-to-r from-indigo-500/0 via-indigo-500/18 to-cyan-300/0 blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            delay: buildDelay + 0.18,
            duration: 0.9,
            ease: EASE_CINEMATIC,
          }}
        />
      </motion.span>
    </span>
  )
}
