import type { Variants } from "framer-motion";

/**
 * Premium easing curves for cinematic feel
 */
export const EASE_CINEMATIC: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const EASE_LUXURY: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * SECTION REVEAL - Cinematic mask reveal (high-end "uncover" look)
 * Uses clipPath + blur for premium editorial feel
 */
export const sectionMaskReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(14px)",
    clipPath: "inset(0 0 100% 0 round 24px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    clipPath: "inset(0 0 0% 0 round 24px)",
    transition: {
      duration: 0.75,
      ease: EASE_CINEMATIC,
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

/**
 * ITEM SOFT UP - Luxury floating card entrance
 * Subtle scale + depth
 */
export const itemLuxuryIn: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.985,
    filter: "blur(14px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.78,
      ease: EASE_LUXURY,
    },
  },
};

/**
 * HOVER LUXURY - Expensive micro-interaction
 * Subtle lift + scale + premium easing
 */
export const hoverLuxury = {
  whileHover: {
    y: -7,
    scale: 1.012,
    transition: {
      duration: 0.28,
      ease: EASE_LUXURY,
    },
  },
  whileTap: {
    scale: 0.992,
    transition: {
      duration: 0.14,
      ease: EASE_LUXURY,
    },
  },
};

/**
 * EYEBROW REVEAL - Crisp, minimal badge text
 */
export const eyebrowReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 6,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.35,
      ease: EASE_CINEMATIC,
    },
  },
};

/**
 * LETTER REVEAL - Premium cinematic letter animation
 * ClipPath + blur for editorial feel
 */
export const letterCinematic: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
    filter: "blur(12px)",
    clipPath: "inset(0 0 100% 0)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 0.42,
      ease: EASE_CINEMATIC,
    },
  },
};

/**
 * WORD CINEMATIC - Word-level premium animation
 */
export const wordCinematic: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.48,
      ease: EASE_LUXURY,
    },
  },
};
