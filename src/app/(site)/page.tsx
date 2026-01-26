"use client";

import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Zap,
  Award,
  Target,
  Lightbulb,
  Rocket,
  TrendingUp,
  CheckCircle2,
  ArrowUpRight,
  MessageCircle,
  Calendar,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/components/section-header";
import { ProductCard } from "@/components/cards/product-card";
import { ServiceCard } from "@/components/cards/service-card";
import { CaseStudyCard } from "@/components/cards/case-study-card";
import { StatsRow } from "@/components/layout/stats-row";
import { Timeline } from "@/components/layout/timeline";
import { ShimmerText } from "@/components/components/shimmer-text";
import {
  ScrollReveal,
  StaggerReveal,
} from "@/components/components/scroll-reveal";
import { initGlowingText } from "@/jsanimation/glow-text";
import { ReactNode } from "react";
interface PulseRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  wordDelay?: number;
}
import {
  // PulseReveal,
  ConstructiveIntelligence,
  FlowLineReveal,
  MagneticEntrance,
  PrideReveal,
  SplitWordReveal,
  LiftOnAwareness,
  SlideFromDepth,
  LightDraw,
  SequentialIntelligence,
  ConfidenceReveal,
  Expansion,
  Arrival,
  CinematicLift,
} from "@/components/components/advanced-animations";
import { products } from "@/content/products";
import { services } from "@/content/services";
import { caseStudies } from "@/content/work";
import { industries } from "@/content/industries";
import {
  Database,
  Server,
  Layout,
  Bot,
  BarChart3,
  Code,
  Palette,
  Cpu,
  ShoppingBag,
  Truck,
  Building,
  GraduationCap,
  HeartPulse,
  Wallet,
} from "lucide-react";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    initGlowingText();
  }, []);
  const industryIcons: Record<string, any> = {
    fintech: Wallet,
    healthtech: HeartPulse,
    edtech: GraduationCap,
    retail: ShoppingBag,
    logistics: Truck,
    gov: Building,
    saas: Rocket,
    enterprise: Server,
  };

  return (
    <>
      {/* ========================================
          SECTION A - Hero (Cinematic)
          ======================================== */}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-premium bg-indigo-hero overlay-indigo section-vignette">
        <video
          className="
      absolute inset-0
      h-full w-full
      object-cover
    "
          autoPlay
          loop
          muted
          playsInline
          poster="/videos/hero-poster.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 content-max w-full section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <PulseReveal delay={0.2} wordDelay={0.12}> */}
            <div className="hero-section-head">
              <p id="glowing_text">AI · Platforms · Design · Engineering</p>
            </div>
            {/* </PulseReveal> */}

            <h1 className="text-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <ConstructiveIntelligence />
            </h1>

            <FlowLineReveal
              delay={0.8}
              className="text-xl md:text-2xl text-body max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              AI. Platforms. Design. Engineering. Growth — under one system.
            </FlowLineReveal>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <MagneticEntrance delay={1} strength={0.3}>
                <Button size="lg" className="group">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </MagneticEntrance>
              <MagneticEntrance delay={1.15} strength={0.3}>
                <Button size="lg" variant="outline" className="group">
                  Explore Products
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                </Button>
              </MagneticEntrance>
            </div>

            <PrideReveal delay={1.4} className="text-sm text-muted">
              Built in Bangladesh. Designed for world.
            </PrideReveal>
          </motion.div>

          {/* Logo Cloud Placeholder */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20"
          >
            <p className="text-xs text-muted-foreground mb-6 uppercase tracking-wider">
              Trusted by innovative companies
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-50">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-24 h-12 bg-alt rounded-lg flex items-center justify-center text-muted font-medium"
                >
                  Logo {i}
                </div>
              ))}
            </div>
          </motion.div> */}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-border rounded-full flex items-start justify-center p-2">
            <ChevronDown className="h-3 w-3 text-muted-foreground" />
          </div>
        </motion.div>
      </section>

      {/* ========================================
          SECTION B - Identity Triangle
          ======================================== */}
      <ScrollReveal direction="up" delay={0.1}>
        <section className="section-container   bg-indigo-hero overlay-indigo section-vignette">
          <div className="content-max">
            <SectionHeader
              align="center"
              title="Who We Are"
              description="A product company with the soul of a design studio and the precision of an engineering powerhouse."
            />

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Bot className="h-6 w-6" />,
                  title: "Product Company",
                  description:
                    "We build our own products, solving real problems at scale.",
                  link: "/products",
                },
                {
                  icon: <Cpu className="h-6 w-6" />,
                  title: "AI & Systems Builder",
                  description:
                    "We harness AI to create intelligent, automated systems.",
                  link: "/services",
                },
                {
                  icon: <Globe className="h-6 w-6" />,
                  title: "Premium Global Studio",
                  description:
                    "Bangladesh-born, world-class design and engineering.",
                  link: "/about",
                },
              ].map((card, index) => (
                <LiftOnAwareness key={index} delay={index * 0.15}>
                  <Link href={card.link} className="block h-full">
                    <div className="glass card-hover p-6 rounded-2xl h-full group">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary mb-4">
                        {card.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {card.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {card.description}
                      </p>
                      <div className="flex items-center text-sm font-medium text-primary">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </LiftOnAwareness>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ========================================
          SECTION C - Products Showcase
          ======================================== */}
      <ScrollReveal direction="up">
        <section className="section-container bg-premium bg-indigo-section overlay-indigo content-above-overlay">
          <div className="content-max">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
              <SectionHeader
                align="left"
                badge="Our Products"
                title="Products We've Built"
                description="Real products solving real problems, from MVP to enterprise scale."
              />
              <Link href="/products">
                <Button variant="outline" className="group mt-4 md:mt-0">
                  View all products
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.slice(0, 3).map((product, index) => (
                <SlideFromDepth key={product.id} delay={index * 0.12}>
                  <ProductCard
                    name={product.name}
                    description={product.tagline}
                    tags={product.tags.slice(0, 3)}
                  />
                </SlideFromDepth>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <div className="mt-8 p-4 rounded-xl bg-accent/30 border border-accent/50 text-center">
                <LightDraw delay={0}>
                  <p className="text-sm text-muted-foreground">
                    <Zap className="inline h-4 w-4 mr-2 text-primary" />
                    We ship MVPs fast, scale reliably.
                  </p>
                </LightDraw>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* ========================================
          SECTION D - What We Build (Services)
          ======================================== */}
      <ScrollReveal direction="up">
        <section className="section-container bg-premium bg-indigo-section overlay-indigo content-above-overlay">
          <div className="content-max">
            <div className="grid lg:grid-cols-[400px_1fr] gap-12">
              <div className="lg:sticky lg:top-32 h-fit">
                <SectionHeader
                  badge="Our Services"
                  title="What We Build for Clients"
                  description="End-to-end capabilities from strategy to execution."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <SequentialIntelligence
                    key={service.id}
                    index={index}
                    staggerDelay={0.08}
                  >
                    <ServiceCard
                      title={service.name}
                      description={service.tagline}
                      icon={<CheckCircle2 className="h-6 w-6" />}
                    />
                  </SequentialIntelligence>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ========================================
          SECTION E - How We Work (Timeline)
          ======================================== */}
      <section className="section-container">
        <div className="content-max">
          <SectionHeader
            align="center"
            badge="Our Process"
            title="How We Work"
            description="A proven process that turns ideas into market-ready products."
          />

          <Timeline
            items={[
              {
                title: "Think",
                description:
                  "We start with deep understanding. Research, strategy, and clear objectives lay the foundation for success.",
              },
              {
                title: "Design",
                description:
                  "Great design solves problems. We create intuitive, beautiful experiences that users love.",
              },
              {
                title: "Build",
                description:
                  "Clean code, modern architecture. We engineer for scale, security, and maintainability.",
              },
              {
                title: "Scale",
                description:
                  "Launch is just the beginning. We optimize, iterate, and help you grow sustainably.",
              },
            ]}
            className="max-w-4xl mx-auto"
          />
        </div>
      </section>

      {/* ========================================
          SECTION F - Featured Work
          ======================================== */}
      <ScrollReveal direction="up">
        <section className="section-container bg-premium bg-indigo-section overlay-indigo content-above-overlay">
          <div className="content-max">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
              <SectionHeader
                // align="center"
                badge="Selected Work"
                title="Featured Case Studies"
                description="Real impact, real results. See how we've helped businesses transform."
              />
              <Link href="/work">
                <Button variant="outline" className="group mt-4 md:mt-0">
                  View all work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {caseStudies.map((caseStudy, index) => (
                <CinematicLift key={caseStudy.id} delay={index * 0.15}>
                  <CaseStudyCard
                    title={caseStudy.title}
                    category={caseStudy.category}
                    description={caseStudy.summary}
                    metrics={caseStudy.impact.slice(0, 2)}
                  />
                </CinematicLift>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ========================================
          SECTION G - Why Maple
          ======================================== */}
      <ScrollReveal direction="up">
        <section className="section-container">
          <div className="content-max">
            <SectionHeader
              align="center"
              badge="Our Promise"
              title="Why Maple"
              description="We're not just another agency. We're your partner in building exceptional products."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  icon: <Target className="h-6 w-6" />,
                  title: "Results-Driven",
                  description:
                    "We focus on outcomes, not output. Every decision tied to your goals.",
                },
                {
                  icon: <Lightbulb className="h-6 w-6" />,
                  title: "Innovation First",
                  description:
                    "We stay ahead of trends, bringing cutting-edge solutions to every project.",
                },
                {
                  icon: <Award className="h-6 w-6" />,
                  title: "Quality Obsessed",
                  description:
                    "Premium quality in everything we do. Good enough is never good enough.",
                },
                {
                  icon: <TrendingUp className="h-6 w-6" />,
                  title: "Growth Partner",
                  description:
                    "We're in it for the long haul. Your success is our success.",
                },
              ].map((item, index) => (
                <LiftOnAwareness key={index} delay={index * 0.12}>
                  <div className="h-full p-6 rounded-2x glass">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </LiftOnAwareness>
              ))}
            </div>

            {/* Maple Promise Callout */}
            <ScrollReveal delay={0.4}>
              <ConfidenceReveal slow={true}>
                <div className="aurora-gradient-subtle glass-strong rounded-3xl p-8 md:p-12 text-center">
                  <h3 className="text-heading text-3xl md:text-4xl font-bold mb-4">
                    The Maple Promise
                  </h3>
                  <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                    {["Clarity", "Craft", "Scale"].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-gray-300 mb-2">
                          0{index + 1}
                        </div>
                        <div className="text-lg font-semibold text-gray-500">
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ConfidenceReveal>
            </ScrollReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* ========================================
          SECTION H - Industries Grid
          ======================================== */}
      <ScrollReveal direction="up">
        <section className="section-container bg-background/50">
          <div className="content-max">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
              <SectionHeader
                badge="Industries"
                title="Industries We Serve"
                description="Deep expertise across sectors, with specialized solutions for each."
              />
              <Link href="/industries">
                <Button variant="outline" className="group mt-4 md:mt-0">
                  Explore industries
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {industries.map((industry, index) => {
                const Icon = industryIcons[industry.id] || Globe;
                return (
                  <LiftOnAwareness key={industry.id} delay={index * 0.08}>
                    <Link href={`/industries/${industry.slug}`}>
                      <div className="glass card-hover p-6 rounded-2xl h-full group">
                        <Icon className="h-8 w-8 text-primary mb-4" />
                        <h3 className="font-semibold mb-2">{industry.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {industry.outcomes[0]}
                        </p>
                      </div>
                    </Link>
                  </LiftOnAwareness>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ========================================
          SECTION I - From Bangladesh to World
          ======================================== */}
      <ScrollReveal direction="left">
        <section className="section-container">
          <div className="content-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="up">
                <div>
                  <SectionHeader
                    badge="Our Story"
                    title="From Bangladesh to World"
                    description="We're building world-class products from Bangladesh, proving that great technology can come from anywhere."
                  />

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Founded with a vision to transform how products are built in
                    Bangladesh, Maple has grown into a global technology
                    company. We combine local talent with global standards,
                    delivering products that compete on the world stage.
                  </p>

                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Our journey is just beginning. We're committed to putting
                    Bangladesh on the map as a hub for innovation, one
                    exceptional product at a time.
                  </p>

                  <Link href="/about">
                    <Button size="lg" variant="outline" className="group">
                      Learn our story
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} direction="up">
                <div>
                  <div className="glass rounded-3xl p-8 aurora-gradient-subtle">
                    <StatsRow
                      stats={[
                        { label: "Projects Delivered", value: "150+" },
                        { label: "Countries Served", value: "12+" },
                        { label: "Years of Experience", value: "8+" },
                        { label: "Team Members", value: "50+" },
                      ]}
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ========================================
          SECTION J - Final CTA (Aurora Block)
          ======================================== */}
      <section className="section-container bg-premium bg-indigo-section overlay-indigo content-above-overlay">
        <div className="content-max">
          <Arrival delay={0.2}>
            <div className="aurora-gradient rounded-3xl p-8 md:p-16 text-center relative overflow-hidden glass">
              <div className="absolute inset-0 grid-pattern opacity-10" />

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Let's Build Something That Changes the Game.
                </h2>

                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                  Ready to turn your vision into reality? Let's talk about your
                  next project.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <MagneticEntrance delay={0} strength={0.25}>
                    <Link href="/contact">
                      <Button size="lg" className="group">
                        Start Your Project
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </MagneticEntrance>
                  <MagneticEntrance delay={0.15} strength={0.25}>
                    <Button size="lg" variant="secondary" className="group">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Strategy Call
                    </Button>
                  </MagneticEntrance>
                  <MagneticEntrance delay={0.3} strength={0.25}>
                    <Button size="lg" variant="outline" className="group">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp Chat
                    </Button>
                  </MagneticEntrance>
                </div>

                {/* Mini Contact Form */}
                <div className="glass-strong rounded-2xl p-6 max-w-md mx-auto">
                  <form
                    className="space-y-4 text-left"
                    onSubmit={(e) => {
                      e.preventDefault();
                      // TODO: Implement form submission
                    }}
                  >
                    <div>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Get in Touch
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </Arrival>
        </div>
      </section>
    </>
  );
}
