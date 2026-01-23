"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface WorkCTAProps {
  className?: string;
}

export function WorkCTA({ className }: WorkCTAProps) {
  const fadeUpSoft = {
    hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px" }}
      variants={fadeUpSoft}
      className={cn("mx-auto max-w-3xl px-6 md:px-8 text-center", className)}
    >
      <div
        className={cn(
          "rounded-2xl",
          "border border-[--wrk-border]",
          "bg-[--wrk-bg-alt]",
          "relative overflow-hidden",
        )}
      >
        {/* Accent Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-[--wrk-primary]" />

        <div className="p-10 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[--wrk-text] mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-lg text-[--wrk-muted] mb-10 leading-relaxed">
            Let's discuss how we can help transform your business.
          </p>
          <Button
            size="lg"
            className="bg-[--wrk-primary] hover:bg-[--wrk-primary]/90 text-white px-8"
          >
            Start a Project
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
