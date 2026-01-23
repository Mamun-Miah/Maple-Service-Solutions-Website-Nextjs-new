"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  cardStagger,
  accentBarGrow,
  bulletItem,
  cardHover,
} from "@/lib/industries-animations";

interface IndustryCardProps {
  title: string;
  description: string;
  outcomes: string[];
  index: number;
}

export function IndustryCard({
  title,
  description,
  outcomes,
  index,
}: IndustryCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardStagger}
      custom={index}
      className="group relative"
    >
      <motion.div
        variants={cardHover}
        initial="rest"
        whileHover="hover"
        className="relative h-full"
      >
        {/* Accent bar */}
        <motion.div
          variants={accentBarGrow}
          className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
          style={{
            background: "var(--ind-primary)",
          }}
        />

        {/* Card content */}
        <div
          className="relative h-full p-6 md:p-8 rounded-2xl transition-all duration-500"
          style={{
            background: "var(--ind-card)",
            borderLeftWidth: "1px",
            borderColor: "var(--ind-border)",
          }}
        >
          {/* Title */}
          <h3
            className="text-xl md:text-2xl font-bold mb-4 transition-colors duration-300"
            style={{ color: "var(--ind-text)" }}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className="text-base mb-6 leading-relaxed"
            style={{ color: "var(--ind-muted)" }}
          >
            {description}
          </p>

          {/* Key Outcomes Section */}
          <div className="space-y-3">
            <h4
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: "var(--ind-text)" }}
            >
              Key Outcomes
            </h4>
            <ul className="space-y-3">
              {outcomes.slice(0, 3).map((outcome, idx) => (
                <motion.li
                  key={idx}
                  variants={bulletItem}
                  custom={idx}
                  className="flex items-start gap-3"
                  style={{ color: "var(--ind-muted)" }}
                >
                  <span className="mt-0.5 flex-shrink-0">
                    <CheckCircle2
                      className="h-4 w-4 transition-all duration-300 group-hover:scale-110"
                      style={{ color: "var(--ind-primary)" }}
                    />
                  </span>
                  <span className="text-sm leading-relaxed">{outcome}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Subtle hover glow effect */}
        <div
          className={cn(
            "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500",
            "pointer-events-none",
            "group-hover:opacity-100",
          )}
          style={{
            background:
              "radial-gradient(600px 600px at center, var(--ind-primary) 0%, transparent 100%)",
            opacity: 0,
          }}
          aria-hidden="true"
        />
      </motion.div>
    </motion.div>
  );
}
