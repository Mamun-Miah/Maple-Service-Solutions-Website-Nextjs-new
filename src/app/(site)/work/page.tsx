"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { caseStudies, categories, impactMetrics } from "@/content/work";
import { CaseStudyCard } from "@/components/work/case-study-card";
import { WorkFilters } from "@/components/work/work-filters";
import { ImpactKPIGrid } from "@/components/work/impact-kpi-grid";
import { WorkHero } from "@/components/work/work-hero";
import { WorkCTA } from "@/components/work/work-cta";
import "./work.css";

// Motion variants
const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardIn = {
  hidden: { opacity: 0, y: 18, scale: 0.98, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredCaseStudies = React.useMemo(() => {
    if (activeCategory === "All") return caseStudies;
    return caseStudies.filter((study) => study.category === activeCategory);
  }, [activeCategory]);

  return (
    <main data-page="work" className="relative overflow-hidden min-h-screen">
      {/* Hero Section */}
      <section className="bg-[url('/work/work.jpg') bg-center">
        <div className="mx-auto max-w-7xl px-6 md:px-8 py-16 relative z-10">
          <WorkHero />
        </div>
      </section>

      {/* Filters Section */}
      <section className="mx-auto max-w-7xl px-6 md:px-8 pb-8 relative z-10">
        <WorkFilters
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </section>

      {/* Case Study Grid Section */}
      <section className="mx-auto max-w-7xl px-6 md:px-8 pb-16 relative z-10">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate="visible"
          key={activeCategory}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCaseStudies.map((caseStudy) => (
            <motion.div key={caseStudy.id} variants={cardIn}>
              <CaseStudyCard
                title={caseStudy.title}
                category={caseStudy.category}
                description={caseStudy.summary}
                metrics={caseStudy.impact}
              />
            </motion.div>
          ))}
        </motion.div>

        {filteredCaseStudies.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[--wrk-muted] text-lg">
              No case studies found for this category.
            </p>
          </div>
        )}
      </section>

      {/* Impact By The Numbers Section */}
      <section className="mx-auto max-w-7xl px-6 md:px-8 pb-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[--wrk-text] mb-4">
            Our Impact by the Numbers
          </h2>
          <p className="text-[--wrk-muted] text-lg max-w-2xl mx-auto">
            Measurable results that demonstrate our commitment to excellence
          </p>
        </div>

        <ImpactKPIGrid metrics={impactMetrics} />
      </section>

      {/* Final CTA Section */}
      <section className="mx-auto max-w-7xl px-6 md:px-8 pb-20 relative z-10">
        <WorkCTA />
      </section>
    </main>
  );
}
