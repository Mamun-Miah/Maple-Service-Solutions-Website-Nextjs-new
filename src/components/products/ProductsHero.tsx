"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

const EASE_CINEMATIC = [0.22, 1, 0.36, 1] as const;

export function ProductsHero() {
  return (
    <section className="relative">
      {/* Hero content */}
      <div className="bg-black/70 relative z-10">
        {/* Eyebrow */}
        <div className="max-w-7xl px-6 md:px-8 py-10">
          <motion.p
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.72, ease: EASE_CINEMATIC }}
            className="text-sm md:text-base font-medium text-gray-300 mb-4 tracking-wide uppercase"
          >
            Our Products
          </motion.p>

          {/* H1 with gradient emphasis */}
          <motion.h1
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.72, ease: EASE_CINEMATIC, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-[var(--prd-text)] mb-6"
          >
            <span className="text-pink-200">Products</span> We've Built
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.72, ease: EASE_CINEMATIC, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed mb-10"
          >
            Real systems solving real problems — from MVP to enterprise scale.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.72, ease: EASE_CINEMATIC, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="bg-gray-500 text-white px-8">
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
              <Link href="#products-grid">Explore Products</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
