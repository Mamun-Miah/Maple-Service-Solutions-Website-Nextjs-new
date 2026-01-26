"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Insight } from "@/content/insights";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FeaturedArticleProps {
  insight: Insight;
}

export function FeaturedArticle({ insight }: FeaturedArticleProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Link href={`/insights/${insight.id}`}>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={cn(
          "group relative overflow-hidden rounded-lg bg-[var(--ins-card)]",
          "border border-[var(--ins-border)]",
          "transition-all duration-300",
          "hover:shadow-lg hover:-translate-y-0.5",
        )}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Image placeholder */}
          <div className="lg:w-2/5 bg-[var(--ins-bg-alt)] min-h-[240px] lg:min-h-full relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[var(--ins-muted)] text-sm">
                Article Image
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--ins-primary)] text-white mb-4">
                {insight.category}
              </span>

              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--ins-text)] mb-4 leading-tight group-hover:text-[var(--ins-primary)] transition-colors">
                {insight.title}
              </h2>

              <p className="text-[var(--ins-muted)] text-lg mb-6 leading-relaxed">
                {insight.excerpt}
              </p>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2 text-sm text-[var(--ins-muted)]">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(insight.publishedAt)}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--ins-muted)]">
                  <Clock className="h-4 w-4" />
                  <span>{insight.readTime} min read</span>
                </div>
              </div>

              <div className="flex items-center text-[var(--ins-primary)] font-medium group">
                <span>Read more</span>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="ml-2"
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
