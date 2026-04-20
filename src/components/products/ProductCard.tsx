"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const EASE_CINEMATIC = [0.22, 1, 0.36, 1] as const;

interface ProductCardProps {
  name: string;
  description: string;
  tags: string[];
  status: "live" | "beta" | "coming-soon";
  slug: string;
  index: number;
  image?: string;
  website?: string;
}

export function ProductCard({
  name,
  description,
  tags,
  status,
  slug,
  index,
  image,
  website,
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
          className={cn(
            "prd-card rounded-2xl h-full flex flex-col cursor-pointer focus:outline-none overflow-hidden",
            image ? "" : "p-6"
          )}
          tabIndex={0}
        >
          {/* Product Image - Only for live products */}
          {image && (
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-2xl bg-[var(--prd-card-hover)]">
              <Image
                src={image}
                alt={`${name} preview`}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Status badge overlay on image */}
              <div className="absolute top-3 right-3 z-10">
                <span
                  className={cn(
                    "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap backdrop-blur-md",
                    getStatusClass(status)
                  )}
                >
                  {getStatusLabel(status)}
                </span>
              </div>
              {/* Website link overlay */}
              {website && (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-black/50 text-white backdrop-blur-md hover:bg-black/70 transition-colors"
                >
                  <ExternalLink className="h-3 w-3" />
                  Visit
                </a>
              )}
            </div>
          )}

          <div className={cn("prd-card-content flex flex-col h-full space-y-4", image ? "p-6" : "")}>
            {/* Header with status badge - only shown when no image */}
            {!image && (
              <div className="flex justify-between items-start gap-3">
                <h3 className="text-xl font-semibold text-[var(--prd-text)] leading-tight flex-1">
                  {name}
                </h3>
                <span
                  className={cn(
                    "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap",
                    getStatusClass(status)
                  )}
                >
                  {getStatusLabel(status)}
                </span>
              </div>
            )}

            {/* Name - shown when image is present (status badge is in the image overlay) */}
            {image && (
              <h3 className="text-xl font-semibold text-[var(--prd-text)] leading-tight">
                {name}
              </h3>
            )}

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
