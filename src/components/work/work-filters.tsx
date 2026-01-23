"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface WorkFiltersProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
}

export function WorkFilters({
  categories,
  activeCategory,
  onCategoryChange,
  className,
}: WorkFiltersProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="inline-flex rounded-full border border-[--wrk-border] p-1 bg-[--wrk-card]">
        <div className="relative flex gap-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              aria-pressed={activeCategory === category}
              className={cn(
                "relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--wrk-primary]/50",
                "focus-visible:ring-offset-2 focus-visible:ring-offset-[--wrk-bg]",
                activeCategory === category
                  ? "text-[--wrk-text]"
                  : "text-[--wrk-muted] hover:text-[--wrk-text]",
              )}
            >
              {category}

              {activeCategory === category && (
                <AnimatePresence mode="wait">
                  <motion.div
                    layoutId="workFilterPill"
                    className={cn(
                      "absolute inset-0 rounded-full z-[-1]",
                      "bg-[rgba(68,25,106,0.10)]",
                      "border border-[--wrk-border]",
                    )}
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                    initial={false}
                  />
                </AnimatePresence>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
