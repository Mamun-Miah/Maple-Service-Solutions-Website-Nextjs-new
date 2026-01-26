"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ---------------- COMPONENTS ---------------- */

// Timeline Component
const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(timelineRef, { once: true, amount: 0.2 });

  const milestones = [
    {
      year: "2016",
      title: "Founded",
      description:
        "Maple Service Solution began with a vision to build world-class technology products from Bangladesh.",
    },
    {
      year: "2018",
      title: "First Major Product",
      description:
        "Launched our flagship product, establishing our presence in the local market.",
    },
    {
      year: "2020",
      title: "Global Expansion",
      description:
        "Started serving international clients, expanding our reach beyond borders.",
    },
    {
      year: "2022",
      title: "Team Growth",
      description:
        "Grew our team to 50+ talented professionals across engineering, design, and strategy.",
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description:
        "Established ourselves as a recognized leader in intelligent product development.",
    },
  ];

  return (
    <div ref={timelineRef} className="relative py-12">
      {/* Timeline Line */}
      <motion.div
        initial={{ height: 0 }}
        animate={isVisible ? { height: "100%" } : { height: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[var(--abt-border)]"
        style={{ transform: "translateX(-50%)" }}
      />

      {/* Timeline Items */}
      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            className="relative pl-12 md:pl-0"
          >
            {/* Dot */}
            <div
              className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[var(--abt-primary)] border-2 border-[var(--abt-card)]"
              style={{ transform: "translateX(-50%)" }}
            />

            {/* Content */}
            <div
              className={`md:w-5/12 ${index % 2 === 0 ? "md:ml-0 md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}
            >
              <span className="text-sm font-semibold text-[var(--abt-primary)]">
                {milestone.year}
              </span>
              <h3 className="text-xl font-semibold text-[var(--abt-text)] mt-1 mb-2">
                {milestone.title}
              </h3>
              <p className="text-base text-[var(--abt-muted)] leading-relaxed">
                {milestone.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ValueCard Component
const ValueCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="p-6 rounded-2xl border border-[var(--abt-border)] bg-[var(--abt-card)] hover:bg-[var(--abt-bg-alt)] transition-colors duration-300"
    >
      <h3 className="text-xl font-semibold text-[var(--abt-text)] mb-3">
        {title}
      </h3>
      <p className="text-base text-[var(--abt-muted)] leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

// StatsCounter Component
const StatsCounter = ({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div className="text-center p-6">
      <span
        ref={ref}
        className="text-5xl md:text-6xl font-bold text-[var(--abt-text)] tabular-nums"
      >
        {count}
        {suffix}
      </span>
      <p className="text-base text-[var(--abt-muted)] mt-3">{label}</p>
    </div>
  );
};

/* ---------------- MAIN PAGE ---------------- */
export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <main data-page="about" className="min-h-screen">
      <style jsx global>{`
        [data-page="about"] {
          --abt-bg: #f7f9fc;
          --abt-bg-alt: #eef2f7;
          --abt-card: #ffffff;
          --abt-border: #d6dee9;
          --abt-text: #131c29;
          --abt-muted: #4b5a73;
          --abt-primary: #131c29;
          --abt-secondary: #1f2d44;
          --abt-accent: #2f4466;
          --abt-highlight: #6c87b5;
        }

        .dark [data-page="about"] {
          --abt-bg: #0a0f17;
          --abt-bg-alt: #0e1622;
          --abt-card: rgba(255, 255, 255, 0.06);
          --abt-border: rgba(255, 255, 255, 0.12);
          --abt-text: #e8ecf2;
          --abt-muted: #a8b3c7;
          --abt-primary: #6c87b5;
          --abt-secondary: #2f4466;
          --abt-accent: #1f2d44;
          --abt-highlight: rgba(108, 135, 181, 0.15);
        }

        [data-page="about"] {
          background: var(--abt-bg);
          position: relative;
        }

        [data-page="about"]::before {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 0;
          background: radial-gradient(
            900px 600px at 20% 10%,
            rgba(19, 28, 41, 0.06),
            transparent 60%
          );
        }

        .dark [data-page="about"]::before {
          background: radial-gradient(
            900px 600px at 20% 10%,
            rgba(108, 135, 181, 0.14),
            transparent 60%
          );
        }

        [data-page="about"] > * {
          position: relative;
          z-index: 1;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="text-sm font-semibold text-[var(--abt-primary)] uppercase tracking-wider">
              About Maple
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--abt-text)] mt-6 mb-8 leading-tight">
              Building Intelligent Products With Purpose
            </h1>
            <p className="text-xl md:text-2xl text-[var(--abt-muted)] leading-relaxed max-w-3xl">
              From Bangladesh to the world — we believe great technology can
              come from anywhere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--abt-text)] mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-lg text-[var(--abt-muted)] leading-relaxed">
                <p>
                  Maple Service Solution is a product company that combines the
                  precision of engineering with the creativity of design. We
                  build intelligent products that solve real problems at scale.
                </p>
                <p>
                  Our story began in Bangladesh, where we set out to prove that
                  world-class products could be built anywhere by anyone with
                  the right vision, talent, and dedication.
                </p>
                <p>
                  Today, we work with businesses around the world, helping them
                  transform through innovative products and strategic thinking.
                  We're in it for the long haul — your success is our success.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="p-8 rounded-2xl border border-[var(--abt-border)] bg-[var(--abt-card)]"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-[var(--abt-border)]">
                  <span className="text-[var(--abt-muted)]">Founded</span>
                  <span className="text-2xl font-semibold text-[var(--abt-text)]">
                    2016
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-[var(--abt-border)]">
                  <span className="text-[var(--abt-muted)]">Team Size</span>
                  <span className="text-2xl font-semibold text-[var(--abt-text)]">
                    50+
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-[var(--abt-border)]">
                  <span className="text-[var(--abt-muted)]">
                    Countries Served
                  </span>
                  <span className="text-2xl font-semibold text-[var(--abt-text)]">
                    12+
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[var(--abt-muted)]">
                    Years of Experience
                  </span>
                  <span className="text-2xl font-semibold text-[var(--abt-text)]">
                    8+
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* JOURNEY / TIMELINE SECTION */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--abt-text)] mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-[var(--abt-muted)] max-w-2xl mx-auto">
              From a small team with big dreams to a global product company.
            </p>
          </motion.div>

          <Timeline />
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--abt-text)] mb-4">
              Our Values
            </h2>
            <p className="text-lg text-[var(--abt-muted)] max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <ValueCard
                title="Clarity"
                description="We communicate clearly, make decisions transparently, and always keep our promises."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <ValueCard
                title="Craft"
                description="We take pride in our work. Every detail matters, and good enough is never good enough."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <ValueCard
                title="Scale"
                description="We build products that grow with our clients. Scalability is not an afterthought."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <ValueCard
                title="Trust"
                description="We earn trust through consistent delivery, honest communication, and long-term partnerships."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-12 md:p-16 rounded-3xl bg-[var(--abt-card)] border border-[var(--abt-border)] text-center"
          >
            <span className="text-sm font-semibold text-[var(--abt-primary)] uppercase tracking-wider mb-6 block">
              Our Vision
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[var(--abt-text)] leading-relaxed max-w-4xl mx-auto">
              "Our mission is to build technology that empowers people,
              businesses, and nations."
            </h2>
          </motion.div>
        </div>
      </section>

      {/* GLOBAL FOOTPRINT / STATS SECTION */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--abt-text)] mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-[var(--abt-muted)] max-w-2xl mx-auto">
              Numbers that reflect our journey and commitment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <StatsCounter value={150} suffix="+" label="Projects Delivered" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <StatsCounter value={12} suffix="+" label="Countries Served" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <StatsCounter value={50} suffix="+" label="Team Members" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <StatsCounter value={8} suffix="+" label="Years of Experience" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--abt-text)] mb-6">
              Let's Build the Future Together
            </h2>
            <p className="text-lg text-[var(--abt-muted)] max-w-2xl mx-auto mb-10">
              Whether you have a project in mind or just want to explore
              possibilities, we'd love to hear from you.
            </p>
            <Link href="/contact">
              <Button size="lg" className="px-8">
                Start a Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
