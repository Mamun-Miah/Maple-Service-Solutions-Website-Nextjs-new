"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export interface CaseStudyCardProps {
  title: string;
  category: string;
  description: string;
  metrics?: Array<{
    label: string;
    value: string;
  }>;
  className?: string;
}

export function CaseStudyCard({
  title,
  category,
  description,
  metrics,
  className,
}: CaseStudyCardProps) {
  return (
    <motion.div
      whileHover={{ translateY: -4 }}
      transition={{ duration: 0.28 }}
      className="h-full"
    >
      <Card
        className={cn(
          "h-full overflow-hidden transition-all duration-300",
          "rounded-2xl",
          "border border-[--wrk-border]",
          "bg-[--wrk-card]",
          "hover:border-[--wrk-primary]/50",
          className,
        )}
      >
        <CardContent className="p-6 space-y-5">
          {/* Category Tag */}
          <div>
            <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-[--wrk-bg-alt] text-[--wrk-muted]">
              {category}
            </span>
          </div>

          {/* Title and Description */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-[--wrk-text] leading-tight">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-[--wrk-muted]">
              {description}
            </p>
          </div>

          {/* Metrics Grid - Report Style */}
          {metrics && metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[--wrk-border]">
              {metrics.slice(0, 4).map((metric, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-lg font-semibold tabular-nums text-[--wrk-text]">
                    {metric.value}
                  </div>
                  <div className="text-xs text-[--wrk-muted] leading-tight">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>

        {/* CTA Button */}
        <div className="px-6 pb-6">
          <Button
            variant="ghost"
            className="group w-full justify-between text-[--wrk-text] hover:text-[--wrk-primary] hover:bg-[--wrk-bg-alt]"
          >
            View Case Study
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-6" />
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
