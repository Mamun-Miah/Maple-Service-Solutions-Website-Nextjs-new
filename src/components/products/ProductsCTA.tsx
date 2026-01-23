"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const EASE_CINEMATIC = [0.22, 1, 0.36, 1] as const;

export function ProductsCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.72, ease: EASE_CINEMATIC }}
    >
      <div className="prd-cta-gradient-border rounded-2xl p-8 md:p-12 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.72, ease: EASE_CINEMATIC, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-(--prd-text) tracking-tight mb-4"
        >
          Build Your Custom Product
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.72, ease: EASE_CINEMATIC, delay: 0.2 }}
          className="text-lg text-[var(--prd-muted)] max-w-2xl mx-auto mb-8"
        >
          Don't see what you need? Let's build something custom together.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.72, ease: EASE_CINEMATIC, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button
            asChild
            size="lg"
            className="text-base px-8"
            style={{
              backgroundColor: "var(--prd-primary)",
              color: "white",
            }}
          >
            <Link href="/contact">Start a Project</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-base px-8"
            style={{
              borderColor: "var(--prd-border)",
              color: "var(--prd-text)",
            }}
          >
            <Link href="/about">Download Company Profile</Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
