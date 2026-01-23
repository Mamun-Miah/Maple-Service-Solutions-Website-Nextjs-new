"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export interface WorkHeroProps {
  className?: string;
}

export function WorkHero({ className }: WorkHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

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
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUpSoft}
      className={className}
    >
      <div className="inline-flex items-center px-3 py-1 rounded-full border border-[--wrk-border] bg-[--wrk-bg-alt] mb-6">
        <span className="text-xs font-medium text-[--wrk-muted]">Our Work</span>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[--wrk-text] mb-6 tracking-tight">
        Featured Case Studies
      </h1>

      <p className="text-lg md:text-xl text-[--wrk-muted] max-w-3xl leading-relaxed">
        Real impact, real results. See how we've helped businesses transform.
      </p>
    </motion.div>
  );
}
