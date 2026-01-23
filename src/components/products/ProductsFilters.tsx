"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE_CINEMATIC = [0.22, 1, 0.36, 1] as const;

type FilterType = "all" | "live" | "beta" | "coming-soon";

interface ProductsFiltersProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const FILTERS: Array<{ id: FilterType; label: string }> = [
  { id: "all", label: "All" },
  { id: "live", label: "Live" },
  { id: "beta", label: "Beta" },
  { id: "coming-soon", label: "Coming Soon" },
];

export function ProductsFilters({
  activeFilter,
  onFilterChange,
}: ProductsFiltersProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="flex justify-center">
      <div className="prd-filter-container inline-flex items-center p-1 rounded-full">
        {FILTERS.map((filter) => (
          <motion.button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={cn(
              "prd-filter-btn relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors",
              activeFilter === filter.id && "active",
            )}
          >
            {activeFilter === filter.id && (
              <motion.div
                layoutId="productsFilterPill"
                className="prd-filter-indicator absolute inset-0 rounded-full"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-10">{filter.label}</span>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
