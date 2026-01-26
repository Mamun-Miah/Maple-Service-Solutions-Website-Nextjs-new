"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Insight } from "@/content/insights";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  insight: Insight;
  index: number;
}

export function ArticleCard({ insight, index }: ArticleCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/insights/${insight.id}`}>
        <motion.article
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={cn(
            "group h-full flex flex-col p-6 rounded-lg",
            "bg-[var(--ins-card)] border border-[var(--ins-border)]",
            "transition-all duration-300",
            "hover:shadow-md",
          )}
        >
          <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-[var(--ins-bg-alt)] text-[var(--ins-primary)] mb-4 w-fit">
            {insight.category}
          </span>

          <h3 className="text-xl font-bold text-[var(--ins-text)] mb-3 leading-snug group-hover:text-[var(--ins-primary)] transition-colors">
            {insight.title}
          </h3>

          <p className="text-[var(--ins-muted)] text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
            {insight.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-[var(--ins-border)] mt-auto">
            <div className="flex items-center gap-2 text-sm text-[var(--ins-muted)]">
              <Clock className="h-3.5 w-3.5" />
              <span>{insight.readTime} min</span>
            </div>
            <span className="text-sm text-[var(--ins-muted)]">
              {formatDate(insight.publishedAt)}
            </span>
          </div>

          <div className="flex items-center text-[var(--ins-primary)] font-medium text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Read article</span>
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="ml-2"
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}
