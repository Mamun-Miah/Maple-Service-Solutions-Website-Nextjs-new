"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { type CaseStudy, type Category } from "@/content/work"
import { CaseStudyDetail } from "@/components/components/case-study-details"
import { WorkListing } from "@/components/components/work-listing"

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All")
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null)

  return (
    <div className="section-container" id="work-top">
      <div className="content-max">
        <AnimatePresence mode="wait">
          {selectedCaseStudy ? (
            <CaseStudyDetail
              key={selectedCaseStudy.id}
              caseStudy={selectedCaseStudy}
              onBack={() => setSelectedCaseStudy(null)}
            />
          ) : (
            <WorkListing
              key="listing"
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              onSelectCaseStudy={setSelectedCaseStudy}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
