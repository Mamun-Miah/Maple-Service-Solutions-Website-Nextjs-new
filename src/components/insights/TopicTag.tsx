"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TopicTagProps {
  tag: string;
  index: number;
  onClick?: (tag: string) => void;
}

export function TopicTag({ tag, index, onClick }: TopicTagProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick?.(tag)}
      className={cn(
        "px-4 py-2 text-sm font-medium rounded-full",
        "bg-[var(--ins-bg-alt)] text-[var(--ins-muted)]",
        "border border-transparent",
        "transition-all duration-200",
        "hover:bg-[var(--ins-highlight)] hover:text-[var(--ins-primary)] hover:border-[var(--ins-border)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ins-primary)] focus-visible:ring-offset-2",
        "cursor-pointer",
      )}
    >
      {tag}
    </motion.button>
  );
}
