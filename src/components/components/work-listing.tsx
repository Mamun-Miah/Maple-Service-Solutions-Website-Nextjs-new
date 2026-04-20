"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import { caseStudies, categories, type CaseStudy, type Category } from "@/content/work"
import { CaseStudyCard } from "@/components/cards/case-study-card"
import { SectionHeader } from "@/components/components/section-header"
import { Button } from "@/components/ui/button"

interface WorkListingProps {
  activeCategory: Category
  onCategoryChange: (category: Category) => void
  onSelectCaseStudy: (caseStudy: CaseStudy) => void
}

export function WorkListing({
  activeCategory,
  onCategoryChange,
  onSelectCaseStudy,
}: WorkListingProps) {
  const filteredStudies = useMemo(() => {
    if (activeCategory === "All") return caseStudies
    return caseStudies.filter((cs) => cs.category === activeCategory)
  }, [activeCategory])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <SectionHeader
        badge="Our Work"
        title="Featured Case Studies"
        description="Real impact, real results. See how we've helped businesses transform."
      />

      {/* Category Filters */}
      <div className="mb-12 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            className="rounded-full cursor-pointer"
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Case Studies Grid */}
      {filteredStudies.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <CaseStudyCard
                id={caseStudy.id}
                title={caseStudy.title}
                category={caseStudy.category}
                description={caseStudy.summary}
                metrics={caseStudy.impact}
                coverImage={caseStudy.coverImage}
                onClick={() => onSelectCaseStudy(caseStudy)}
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 mb-16">
          <p className="text-xl text-muted-foreground">
            No projects in this category yet. Check back soon!
          </p>
        </div>
      )}

      {/* Impact Summary */}
      <div className="aurora-gradient-subtle rounded-3xl p-8 md:p-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Our Impact by the Numbers
        </h3>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { label: "Client Satisfaction", value: "98%" },
            { label: "On-Time Delivery", value: "95%" },
            { label: "Average ROI", value: "3.5x" },
            { label: "Long-term Partnerships", value: "85%" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Be Our Next Success Story?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Let&apos;s discuss how we can help transform your business.
        </p>
        <Button size="lg">
          Start a Project
        </Button>
      </div>
    </motion.div>
  )
}
