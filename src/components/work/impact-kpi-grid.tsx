"use client";

import * as React from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export interface KPITileProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}

export function KPITile({
  value,
  suffix = "",
  label,
  className,
}: KPITileProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 50,
    damping: 30,
  });

  const displayValue = useTransform(springValue, (latest) => {
    if (suffix === "x") {
      return latest.toFixed(1) + suffix;
    }
    return Math.floor(latest) + suffix;
  });

  React.useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

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
      className={cn("text-center space-y-2", className)}
    >
      <div className="text-5xl md:text-6xl font-bold tabular-nums text-[--wrk-text]">
        <motion.span>{displayValue}</motion.span>
      </div>
      <div className="text-sm text-[--wrk-muted] font-medium">{label}</div>
    </motion.div>
  );
}

export interface ImpactKPIGridProps {
  metrics: Array<{
    value: number;
    suffix?: string;
    label: string;
  }>;
  className?: string;
}

export function ImpactKPIGrid({ metrics, className }: ImpactKPIGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12",
        className,
      )}
    >
      {metrics.map((metric, index) => (
        <KPITile
          key={index}
          value={metric.value}
          suffix={metric.suffix || "%"}
          label={metric.label}
        />
      ))}
    </div>
  );
}
