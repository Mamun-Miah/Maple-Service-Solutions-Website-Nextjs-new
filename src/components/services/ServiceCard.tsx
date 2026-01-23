"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const EASE_OUT = [0.22, 1, 0.36, 1];

export function ServiceCard({
  title,
  description,
  icon,
  features,
  index = 0,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  index?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 40,
        filter: reduced ? "none" : "blur(6px)",
      }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: EASE_OUT,
      }}
      whileHover={{
        y: -6,
        rotateX: 4,
        rotateY: -4,
        scale: 1.03,
      }}
      style={{ perspective: 1200 }}
      className={cn(
        "relative h-full rounded-2xl p-6",
        "bg-white/80 dark:bg-neutral-900/70 backdrop-blur-xl",
        "border border-black/5 dark:border-white/10",
        "shadow-lg shadow-black/5 dark:shadow-black/30",
        "transition-all duration-300",
      )}
    >
      {/* Glow (dark mode magic) */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition">
        <div
          className="absolute inset-0 rounded-2xl 
          bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-cyan-500/20
          blur-xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-5">
        {/* Icon */}
        <div className="inline-flex rounded-xl bg-indigo-500/10 p-3 text-indigo-600 dark:text-indigo-400">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {features.map((f, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-2 pt-4 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
}
