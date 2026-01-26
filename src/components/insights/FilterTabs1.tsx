"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FilterTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function FilterTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: FilterTabsProps) {
  return (
    <div className="relative mb-12">
      <div className="flex flex-wrap gap-2 border-b border-[var(--ins-border)]">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={cn(
              "relative px-4 py-3 text-sm font-medium transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ins-primary)] focus-visible:ring-offset-2",
              activeCategory === category
                ? "text-[var(--ins-primary)]"
                : "text-[var(--ins-muted)] hover:text-[var(--ins-text)]",
            )}
          >
            {category}
            {activeCategory === category && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--ins-primary)]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
