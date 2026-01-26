"use client";

import { StatsRow } from "@/components/layout/stats-row";
import { SectionHeader } from "@/components/components/section-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Lightbulb,
  Award,
  Globe,
  Zap,
  Code2,
  Palette,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

/* ---------------- DATA ---------------- */
const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We focus on outcomes, not output. Every decision tied to your goals.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We stay ahead of trends, bringing cutting-edge solutions to every project.",
  },
  {
    icon: Award,
    title: "Quality Obsessed",
    description:
      "Premium quality in everything we do. Good enough is never good enough.",
  },
  {
    icon: Zap,
    title: "Growth Partner",
    description: "We're in it for the long haul. Your success is our success.",
  },
];

const team = [
  {
    name: "Mamun Miah",
    role: "Senior Full-Stack Developer",
    description:
      "An experienced engineer with a strong command of modern frontend and backend technologies. Leads complex projects, designs scalable architectures, and ensures high-quality, maintainable code while mentoring team members and driving technical excellence.",
  },
  {
    name: "Akash Mehmud",
    role: "Digital Marketer",
    description:
      "A data-driven strategist focused on growing brand visibility and customer engagement. Manages digital campaigns, SEO, content strategy, and analytics to drive measurable results and support business growth through effective online marketing.",
  },
  {
    name: "Dev Sweet",
    role: "Full Stack Engineer",
    description:
      "Engineering expert with deep experience in designing and developing scalable, secure, and maintainable full-stack systems.",
  },
];

/* ---------------- ANIMATION VARIANTS ---------------- */
// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };
// const fadeIn = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.6 } },
// };
// const slideLeft = {
//   hidden: { opacity: 0, x: -50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
// };
// const slideRight = {
//   hidden: { opacity: 0, x: 50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
// };
// const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const fadeUp = {
  hidden: { opacity: 0, y: 40, rotate: -2, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60, rotate: -1, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.7, type: "spring", stiffness: 120, damping: 18 },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 60, rotate: 1, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.7, type: "spring", stiffness: 120, damping: 18 },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

// meta data
// export const metadata = {
//   title: "About Us",
//   description:
//     "Learn about Maple Service Solution - a product company with the soul of a design studio and the precision of an engineering powerhouse.",
// };

/* ---------------- COMPONENT ---------------- */
export default function AboutPage() {
  return (
    <div className="section-container">
      <div className="content-max">
        {/* HERO */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-20"
        >
          <Badge className="mb-4">Our Story</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Building the Future,{" "}
            <span className="text-gradient">From Bangladesh</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Maple Service Solution is a product company with the soul of a
            design studio and the precision of an engineering powerhouse. We
            build intelligent products that define markets, combining
            world-class design, cutting-edge technology, and a deep
            understanding of what makes businesses succeed.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          <motion.div variants={fadeUp} className="glass p-8 rounded-2xl">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary mb-6">
              <Target className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              To transform how businesses operate by building intelligent
              products that solve real problems at scale. We believe great
              technology should be accessible to everyone, everywhere.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="glass p-8 rounded-2xl">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary mb-6">
              <Globe className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              To put Bangladesh on the map as a global hub for innovation and
              product excellence. We're building products that compete on the
              world stage and creating opportunities for talent to thrive.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="glass aurora-gradient-subtle rounded-3xl p-8 md:p-12 mb-20"
        >
          <StatsRow
            stats={[
              { label: "Projects Delivered", value: "150+" },
              { label: "Countries Served", value: "12+" },
              { label: "Years of Experience", value: "8+" },
              { label: "Team Members", value: "50+" },
            ]}
          />
        </motion.div>

        {/* Our Values */}
        <div className="mb-20">
          <SectionHeader
            align="center"
            badge="Our Values"
            title="What We Believe In"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="glass p-6 rounded-2xl"
              >
                <value.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Our Story */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-20"
        >
          <SectionHeader
            align="center"
            badge="Our Journey"
            title="The Maple Story"
          />
          <div className="glass p-8 md:p-12 rounded-2xl max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Maple was founded with a simple but powerful idea: that
                world-class products can be built anywhere, by anyone with the
                right vision, talent, and dedication.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Starting in Bangladesh, we set out to prove that local teams
                could deliver products that compete globally. We built our own
                products, learned from failures, celebrated successes, and grew
                a team of passionate designers, engineers, and strategists.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we're proud to work with businesses around the world,
                helping them transform through innovative products and strategic
                thinking. Our journey is far from over—we're just getting
                started.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Leadership (CEO + Message) */}
        <div className="relative overflow-hidden py-20">
          <SectionHeader
            align="center"
            badge="Our Leadership"
            title="Vision Driven by Experience"
          />
          <div className="mx-auto max-w-6xl px-6 mt-20 flex flex-col md:flex-row items-center gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideLeft}
              className="w-full md:w-5/12 flex justify-center md:justify-start"
            >
              <div className="group relative w-full max-w-sm">
                <div className="absolute -inset-4 rounded-3xl group-hover:bg-indigo-950 group-hover:blur-2xl transition-all duration-300" />
                <div className="relative overflow-hidden rounded-3xl border border-slate-700 shadow-xl">
                  <Image
                    src="/about/ceo-fav.jpeg"
                    alt="CEO"
                    width={400}
                    height={480}
                    className="h-125 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideRight}
              className="w-full md:w-7/12 space-y-6 text-center md:text-left"
            >
              <h3 className="text-2xl font-semibold text-slate-200">
                Message from Our CEO
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-slate-300">
                At our core, we believe technology should empower people,
                simplify complexity, and create lasting impact. Our mission is
                to build products that are reliable, scalable, and designed with
                real human needs in mind.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-slate-300">
                We foster a culture of innovation, ownership, and continuous
                learning — because great software is built by teams who care
                deeply about quality and purpose.
              </p>
              <div className="pt-4">
                <p className="font-semibold text-slate-200">Anamul Hoque</p>
                <p className="text-sm text-slate-400">
                  Chief Executive Officer
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <SectionHeader align="center" badge="Leadership" title="Our Team" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="glass card-hover p-6 rounded-2xl text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-primary">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Capabilities */}
        <div className="mb-20">
          <SectionHeader
            align="center"
            badge="Our Expertise"
            title="What We Do Best"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Palette,
                title: "Design",
                items: [
                  "Brand Identity",
                  "UX/UI Design",
                  "Design Systems",
                  "User Research",
                ],
              },
              {
                icon: Code2,
                title: "Engineering",
                items: [
                  "Web Development",
                  "Mobile Apps",
                  "Cloud & DevOps",
                  "AI/ML",
                ],
              },
              {
                icon: Zap,
                title: "Growth",
                items: ["Strategy", "Analytics", "Optimization", "Automation"],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="glass p-6 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="aurora-gradient rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Whether you're a client, partner, or team member—we'd love to hear
            from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">Start a Project</Button>
            </Link>
            <Link href="/careers">
              <Button size="lg" variant="outline">
                View Careers
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
