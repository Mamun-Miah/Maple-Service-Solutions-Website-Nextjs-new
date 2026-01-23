"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

// Premium easing curves
const EASE_CINEMATIC = [0.16, 1, 0.3, 1];

interface FilterTabProps {
  filter: string;
  isActive: boolean;
  onClick: () => void;
  delay?: number;
}

export function FilterTab({
  filter,
  isActive,
  onClick,
  delay = 0,
}: FilterTabProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.button
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.42,
        ease: EASE_CINEMATIC,
        delay: prefersReducedMotion ? 0 : delay,
      }}
      onClick={onClick}
      className={cn(
        "relative px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300",
        "hover:scale-[1.02]",
        isActive
          ? "bg-[var(--prod-tint)] text-[var(--prod-primary)]"
          : "text-[var(--prod-muted)] hover:text-[var(--prod-text)]",
      )}
    >
      <span className="relative z-10">{filter}</span>

      {/* Active indicator - gradient border + glow */}
      {isActive && (
        <>
          <motion.div
            layoutId="filter-indicator"
            className="absolute inset-0 rounded-full border-2 border-[var(--prod-primary)]/30"
            initial={false}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          <motion.div
            layoutId="filter-glow"
            className="absolute inset-0 rounded-full bg-[var(--prod-primary)]/10 blur-sm"
            initial={false}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </>
      )}

      {/* Hover underline - grows from center */}
      {!isActive && (
        <motion.span
          className="absolute bottom-0 left-1/2 h-0.5 bg-[var(--prod-primary)]/50"
          initial={{ width: 0, x: "-50%" }}
          whileHover={{ width: "60%" }}
          transition={{ duration: 0.28, ease: EASE_CINEMATIC }}
        />
      )}
    </motion.button>
  );
}
