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

export interface KPICounterProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}

export function KPICounter({
  value,
  suffix = "",
  label,
  className,
}: KPICounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 50,
    damping: 30,
  });

  const displayValue = useTransform(springValue, (latest) => {
    return suffix === "x"
      ? latest.toFixed(1) + suffix
      : Math.floor(latest) + suffix;
  });

  React.useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return (
    <div ref={ref} className={cn("text-center space-y-2", className)}>
      <div className="text-5xl md:text-6xl font-bold tabular-nums text-[--wrk-text]">
        <motion.span>{displayValue}</motion.span>
      </div>
      <div className="text-sm text-[--wrk-muted] font-medium">{label}</div>
    </div>
  );
}
