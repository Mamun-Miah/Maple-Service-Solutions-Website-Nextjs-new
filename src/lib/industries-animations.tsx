import type { Variants } from "framer-motion";

// Section reveal animations
export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Staggered card reveal
export const cardStagger: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Accent bar grow animation
export const accentBarGrow: Variants = {
  hidden: {
    scaleY: 0,
    transformOrigin: "top",
  },
  visible: {
    scaleY: 1,
    transformOrigin: "top",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Bullet list item animation
export const bulletItem: Variants = {
  hidden: {
    opacity: 0,
    x: -8,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Hero content stagger
export const heroStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Hero text reveal
export const heroText: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Container for staggered children
export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

// Ambient background animation (for keyframes)
export const ambientPulse = {
  scale: [1, 1.05, 1],
  opacity: [0.5, 0.7, 0.5],
};

// Card hover effect variants
export const cardHover: Variants = {
  rest: {
    y: 0,
  },
  hover: {
    y: -4,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Reduced motion variants
export const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
