"use client";

import * as React from "react";
import { motion, Variants, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CinematicLiftProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function CinematicLift({
  children,
  className,
  delay = 0,
}: CinematicLiftProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.6,
    margin: "-50px",
  });

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const overlayVariants: Variants = {
    hidden: {
      y: "100%",
    },
    visible: {
      y: "0%",
      transition: {
        duration: 0.7,
        delay: delay + 0.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const arrowVariants: Variants = {
    hidden: {
      x: 0,
    },
    hover: {
      x: 6,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={cn("relative group", className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
    >
      {children}

      <motion.div
        className="rounded-2xl absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={overlayVariants}
      />
    </motion.div>
  );
}

export function CinematicLiftWithArrow({
  children,
  className,
  delay = 0,
}: CinematicLiftProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.6,
    margin: "-50px",
  });

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const overlayVariants: Variants = {
    hidden: {
      y: "100%",
    },
    visible: {
      y: "0%",
      transition: {
        duration: 0.7,
        delay: delay + 0.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={cn("relative overflow-hidden group", className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
    >
      {children}

      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={overlayVariants}
      />
    </motion.div>
  );
}
