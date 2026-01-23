"use client";

import { useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ProcessStep } from "@/components/services/ProcessStep";
import { ExpertiseColumn } from "@/components/services/ExpertiseColumn";
import {
  Palette,
  Code2,
  Database,
  Cpu,
  TrendingUp,
  Bot,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

// Premium easing curves
const EASE_CINEMATIC = [0.16, 1, 0.3, 1];

// Services data
const services = [
  {
    id: "brand-identity",
    name: "Brand & Identity Systems",
    tagline: "Strategic brand positioning and visual identity systems.",
    icon: <Palette className="h-6 w-6" />,
    features: [
      "Brand Strategy",
      "Visual Identity",
      "Brand Guidelines",
      "Design Systems",
    ],
  },
  {
    id: "product-design",
    name: "Product Design (UX/UI)",
    tagline: "User-centered design that drives engagement and growth.",
    icon: <Bot className="h-6 w-6" />,
    features: ["User Research", "UX Design", "UI Design", "Prototyping"],
  },
  {
    id: "web-experiences",
    name: "Web Experiences & Platforms",
    tagline: "High-performance web experiences that scale.",
    icon: <Code2 className="h-6 w-6" />,
    features: [
      "Web Applications",
      "Platforms",
      "API Development",
      "Performance",
    ],
  },
  {
    id: "engineering",
    name: "Engineering & Development",
    tagline: "Robust, scalable engineering solutions.",
    icon: <Database className="h-6 w-6" />,
    features: ["Frontend", "Backend", "Infrastructure", "DevOps"],
  },
  {
    id: "ai-automation",
    name: "AI & Automation Integration",
    tagline: "Intelligent automation that transforms operations.",
    icon: <Cpu className="h-6 w-6" />,
    features: ["AI Integration", "Automation", "ML Models", "Data Processing"],
  },
  {
    id: "growth",
    name: "Growth & Optimization",
    tagline: "Data-driven strategies for sustainable growth.",
    icon: <TrendingUp className="h-6 w-6" />,
    features: ["Analytics", "Optimization", "A/B Testing", "Growth Strategy"],
  },
];

// Process steps
const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn your business, goals, and audience deeply to establish shared understanding.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We craft a clear roadmap and strategy aligned with your business objectives.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "We build with precision, quality, and speed, keeping you informed at every step.",
  },
  {
    number: "04",
    title: "Growth",
    description:
      "We optimize and scale your solution for long-term impact and success.",
  },
];

// Expertise data
const designExpertise = [
  {
    title: "Brand Strategy",
    items: [
      "Brand positioning",
      "Brand architecture",
      "Brand guidelines",
      "Visual identity systems",
    ],
  },
  {
    title: "Product Design",
    items: [
      "User research",
      "UX design",
      "UI design",
      "Interaction design",
      "Prototyping",
    ],
  },
  {
    title: "Design Systems",
    items: [
      "Component libraries",
      "Design tokens",
      "Documentation",
      "Pattern libraries",
    ],
  },
];

const engineeringExpertise = [
  {
    title: "Web Development",
    items: [
      "React/Next.js",
      "Vue.js",
      "TypeScript",
      "Performance optimization",
    ],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "Python", "GraphQL", "REST APIs", "Authentication"],
  },
  {
    title: "Infrastructure",
    items: ["AWS", "Vercel", "Docker", "CI/CD", "Monitoring"],
  },
];

export default function ServicesPage() {
  const [activeStep, setActiveStep] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  // Hero animations
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });

  // Process section animations
  const processInView = useInView(processRef, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll();

  // Progress beam movement
  const beamY = useTransform(scrollYProgress, [0.25, 0.7], ["0%", "100%"]);

  // Update active step based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const stepHeight = 300;
      const scrollPos = window.scrollY;
      const processSectionTop = processRef.current?.offsetTop || 0;
      const relativeScroll = scrollPos - processSectionTop;

      const newStep = Math.max(
        0,
        Math.min(3, Math.floor(relativeScroll / stepHeight)),
      );
      setActiveStep(newStep);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen" data-page="services">
      {/* Studio Light Choreography V2 with Blueprint Whisper Layer */}
      {/* <ServicesChoreographyV2 /> */}

      {/* Hero Section with Background Image */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center overflow-hidden z-10"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* Light overlay gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--svc-overlay-light)]/50 via-[var(--svc-overlay-light)]/40 to-[var(--svc-overlay-light)]/30 dark:bg-gradient-to-b dark:from-[var(--svc-overlay-dark)]/60 dark:via-[var(--svc-overlay-dark)]/50 dark:to-[var(--svc-overlay-dark)]/40" />
          <picture className="w-full h-full">
            <source
              srcSet="/backgrounds/services/services-hero-dark.png"
              media="(prefers-color-scheme: dark)"
            />
            <img
              src="/backgrounds/services/services-hero-light.png"
              alt=""
              className="w-full h-full object-cover"
              style={{ opacity: 0.4 }}
            />
          </picture>
        </div>

        {/* Hero Content - Studio Reveal */}
        <div className="relative z-20 container mx-auto px-6 py-20">
          <div className="max-w-4xl">
            {/* "Our Services" (eyebrow): tight fade + tracking settle */}
            <motion.div
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={heroInView ? { opacity: 1, letterSpacing: "0em" } : {}}
              transition={{ duration: 0.56, ease: EASE_CINEMATIC }}
              className="text-sm font-medium text-[var(--svc-primary)] tracking-wider uppercase mb-4"
            >
              Our Services
            </motion.div>

            {/* "What We Do" (H1): word-by-word mask reveal */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.56, ease: EASE_CINEMATIC, delay: 0.12 }}
              className="text-5xl md:text-7xl font-bold text-[var(--svc-text)] mb-6 tracking-tight"
            >
              <motion.span
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={heroInView ? { clipPath: "inset(0 0 0 0)" } : {}}
                transition={{
                  duration: 0.64,
                  ease: EASE_CINEMATIC,
                  delay: 0.2,
                }}
                className="inline-block text-slate-200"
              >
                What We Do
              </motion.span>
            </motion.h1>

            {/* Subtitle: line sweep reveal (like a soft light scanning across line) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.56, ease: EASE_CINEMATIC, delay: 0.32 }}
              className="relative"
            >
              <span className="text-xl text-slate-100 max-w-2xl block">
                End-to-end capabilities from strategy to execution, all under
                one roof.
              </span>
              <motion.div
                initial={{ width: "0%" }}
                animate={heroInView ? { width: "100%" } : {}}
                transition={{ duration: 0.8, ease: EASE_CINEMATIC, delay: 0.4 }}
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[var(--svc-primary)]/0 via-[var(--svc-secondary)] to-[var(--svc-primary)]/0"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}

      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <picture className="absolute inset-0 h-full w-full">
            <source
              srcSet="/backgrounds/services/services-flow-dark.png"
              media="(prefers-color-scheme: dark)"
            />
            <img
              src="/backgrounds/services/services-flow-light.png"
              alt=""
              className="h-full w-full object-cover opacity-60 dark:opacity-20"
            />
          </picture>

          {/* Soft overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-b 
      from-white/70 via-white/60 to-white/40
      dark:from-black/60 dark:via-black/50 dark:to-black/40"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group"
              >
                <ServiceCard
                  title={service.name}
                  description={service.tagline}
                  icon={service.icon}
                  features={service.features}
                  index={index}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="relative py-20 px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl relative">
          {/* Vertical Progress Beam */}
          <motion.div
            style={{ y: beamY }}
            className="absolute left-12 top-0 w-1 h-full bg-gradient-to-b from-[var(--svc-primary)]/0 via-[var(--svc-primary)]/50 to-[var(--svc-primary)]/0 -z-10"
          />

          {/* Section Header */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={processInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.48, ease: EASE_CINEMATIC }}
              className="text-sm font-medium text-[var(--svc-primary)] tracking-wider uppercase mb-4"
            >
              Our Process
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.56, ease: EASE_CINEMATIC, delay: 0.1 }}
              className="text-4xl font-bold text-gray-400"
            >
              How We Work With You
            </motion.h2>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 gap-6">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.number}
                step={step.number}
                title={step.title}
                description={step.description}
                isActive={activeStep === index}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section - Editorial Split */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.48, ease: EASE_CINEMATIC }}
              className="text-sm font-medium text-[var(--svc-primary)] tracking-wider uppercase mb-4"
            >
              Our Expertise
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.56, ease: EASE_CINEMATIC, delay: 0.1 }}
              className="text-4xl font-bold text-gray-400"
            >
              Design & Engineering Excellence
            </motion.h2>
          </div>

          {/* Expertise Columns - Left then Right */}
          <div className="grid lg:grid-cols-2 gap-12">
            <ExpertiseColumn
              title="Design Expertise"
              expertiseItems={designExpertise}
              delay={0.3}
            />
            <ExpertiseColumn
              title="Engineering Expertise"
              expertiseItems={engineeringExpertise}
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section - Arrival + Breath */}
      <section className="relative py-20 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.68, ease: EASE_CINEMATIC }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative container mx-auto max-w-4xl"
        >
          {/* Breathing Glow */}
          <motion.div
            animate={{
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[var(--svc-primary)]/10 via-[var(--svc-secondary)]/15 to-[var(--svc-primary)]/10 blur-3xl -z-10"
          />

          <div className="relative bg-gradient-to-r from-indigo-500/10 via-purple-500/15 to-pink-600/10 rounded-3xl p-10 md:p-16 text-center border border-gray-500">
            {/* Mask reveal heading */}
            <motion.h2
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              transition={{ duration: 0.72, ease: EASE_CINEMATIC }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-300 mb-6 tracking-tight"
            >
              Let's Build Something Great Together
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.56, ease: EASE_CINEMATIC, delay: 0.15 }}
              viewport={{ once: true }}
              className="text-lg text-gray-400 max-w-2xl mx-auto mb-10"
            >
              Ready to start your project? Get in touch and let's discuss how we
              can help bring your vision to life.
            </motion.p>

            {/* Magnetic hover button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{
                duration: 0.28,
                ease: EASE_CINEMATIC,
                delay: 0.25,
              }}
            >
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center gap-2 px-8 py-4 rounded-full",
                  "bg-[var(--svc-primary)] text-white font-semibold text-lg",
                  "transition-all duration-300",
                )}
              >
                Start a Project
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
