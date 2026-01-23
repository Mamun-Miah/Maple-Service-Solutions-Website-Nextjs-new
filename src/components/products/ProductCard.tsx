"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const EASE_CINEMATIC = [0.22, 1, 0.36, 1] as const;

interface ProductCardProps {
  name: string;
  description: string;
  tags: string[];
  status: "live" | "beta" | "coming-soon";
  slug: string;
  index: number;
}

export function ProductCard({
  name,
  description,
  tags,
  status,
  slug,
  index,
}: ProductCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "live":
        return "Live";
      case "beta":
        return "Beta";
      case "coming-soon":
        return "Coming Soon";
      default:
        return status;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "live":
        return "prd-status-live";
      case "beta":
        return "prd-status-beta";
      case "coming-soon":
        return "prd-status-coming-soon";
      default:
        return "";
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 22,
      scale: 0.98,
      filter: "blur(12px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: 0.72,
        ease: EASE_CINEMATIC,
        delay: index * 0.08,
      }}
      whileHover={{ y: -6 }}
    >
      <Link href={`/products/${slug}`} className="block">
        <div
          className="prd-card rounded-2xl p-6 h-full flex flex-col cursor-pointer focus:outline-none"
          tabIndex={0}
        >
          <div className="prd-card-content flex flex-col h-full space-y-4">
            {/* Header with status badge */}
            <div className="flex justify-between items-start gap-3">
              <h3 className="text-xl font-semibold text-[var(--prd-text)] leading-tight flex-1">
                {name}
              </h3>
              <span
                className={cn(
                  "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap",
                  getStatusClass(status),
                )}
              >
                {getStatusLabel(status)}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-[var(--prd-muted)] leading-relaxed flex-1">
              {description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="prd-tag-pill inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2 text-[var(--prd-primary)] text-sm font-medium pt-2">
              <span>View Product</span>
              <ArrowRight className="prd-card-cta-arrow h-4 w-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
