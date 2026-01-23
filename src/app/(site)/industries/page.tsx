"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { IndustryCard } from "@/components/industries-card";
import { industries } from "@/content/industries";
import {
  sectionReveal,
  heroStagger,
  heroText,
  containerVariants,
} from "@/lib/industries-animations";
import { IndustryCard } from "@/components/cards/industries-card";

// export const metadata = {
//   title: "Industries",
//   description:
//     "Deep expertise across multiple sectors, with specialized solutions for each industry.",
// };

export default function IndustriesPage() {
  return (
    <main
      data-page="industries"
      className="min-h-screen"
      style={{
        background: "var(--ind-bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient background gradients - Light mode */}
      <div
        className="absolute inset-0 pointer-events-none dark:hidden"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(900px 600px at 15% 20%, rgba(165,72,78,0.10), transparent 60%),
            radial-gradient(800px 500px at 85% 30%, rgba(230,184,180,0.12), transparent 55%)
          `,
        }}
      />

      {/* Ambient background gradients - Dark mode */}
      <div
        className="absolute inset-0 pointer-events-none hidden dark:block"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(900px 600px at 15% 20%, rgba(165,72,78,0.16), transparent 60%),
            radial-gradient(800px 500px at 85% 30%, rgba(230,184,180,0.10), transparent 55%)
          `,
        }}
      />

      {/* Ambient animation layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-24 lg:py-32">
        {/* HERO SECTION */}
        <section className="mb-20 md:mb-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroStagger}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Eyebrow */}
            <motion.div variants={heroText}>
              <span
                className="inline-block text-sm font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--ind-accent)" }}
              >
                Industries
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={heroText}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
              style={{ color: "var(--ind-text)" }}
            >
              Industries We Serve
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={heroText}
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: "var(--ind-muted)" }}
            >
              Deep expertise across multiple sectors, with specialized solutions
              for each industry.
            </motion.p>
          </motion.div>
        </section>

        {/* INDUSTRY GRID SECTION */}
        <section className="mb-20 md:mb-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {industries.map((industry, index) => (
              <IndustryCard
                key={industry.id}
                title={industry.name}
                description={industry.description}
                outcomes={industry.outcomes}
                index={index}
              />
            ))}
          </motion.div>
        </section>

        {/* DEEP CAPABILITIES PANEL */}
        <section className="mb-20 md:mb-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionReveal}
            className="relative rounded-3xl p-8 md:p-12 lg:p-16"
            style={{
              background: "var(--ind-bg-alt)",
            }}
          >
            {/* Warm gradient wash */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, var(--ind-primary) 0%, var(--ind-secondary) 100%)",
                opacity: 0.05,
              }}
              aria-hidden="true"
            />

            <div className="relative max-w-3xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
                style={{ color: "var(--ind-text)" }}
              >
                Built for Complexity. Designed for Scale.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: "var(--ind-muted)" }}
              >
                We adapt our expertise across industries with modular systems
                that scale with your growth. Our proven methodologies ensure
                seamless implementation and measurable results, regardless of
                your domain's unique challenges.
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* FINAL CTA SECTION */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionReveal}
            className="relative rounded-3xl p-8 md:p-12 lg:p-16 text-center"
            style={{
              border: "1px solid var(--ind-border)",
              background: "var(--ind-card)",
            }}
          >
            {/* Warm highlight glow */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(800px 600px at center, var(--ind-highlight) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            <div className="relative max-w-2xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
                style={{ color: "var(--ind-text)" }}
              >
                Don't See Your Industry?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-lg md:text-xl mb-8 leading-relaxed"
                style={{ color: "var(--ind-muted)" }}
              >
                We adapt our expertise to your unique domain.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="group gap-2"
                    style={{
                      background: "var(--ind-primary)",
                      color: "var(--ind-bg)",
                    }}
                  >
                    Get in Touch
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Page-scoped CSS variables */}
      <style jsx global>{`
        /* Light mode variables */
        main[data-page="industries"] {
          --ind-bg: #fbf7f6;
          --ind-bg-alt: #f4ecea;
          --ind-card: #ffffff;
          --ind-border: #e6d6d1;
          --ind-text: #2a1618;
          --ind-muted: #6b4a4e;
          --ind-primary: #371e22;
          --ind-secondary: #6b2c2f;
          --ind-accent: #a5484e;
          --ind-highlight: rgba(229, 184, 180, 0.12);
        }

        /* Dark mode variables */
        .dark main[data-page="industries"] {
          --ind-bg: #120708;
          --ind-bg-alt: #1b0d0f;
          --ind-card: rgba(255, 255, 255, 0.06);
          --ind-border: rgba(255, 255, 255, 0.12);
          --ind-text: #f5eceb;
          --ind-muted: #c6a9a6;
          --ind-primary: #a5484e;
          --ind-secondary: #e6b8b4;
          --ind-accent: #6b2c2f;
          --ind-highlight: rgba(229, 184, 180, 0.12);
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          main[data-page="industries"] * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Focus visible for accessibility */
        main[data-page="industries"] a:focus-visible,
        main[data-page="industries"] button:focus-visible {
          outline: 2px solid var(--ind-primary);
          outline-offset: 2px;
        }
      `}</style>
    </main>
  );
}
