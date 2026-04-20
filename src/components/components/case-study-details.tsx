"use client"

import { motion } from "framer-motion"
import { caseStudies, type CaseStudy } from "@/content/work"
import { CaseStudyCard } from "@/components/cards/case-study-card"
import { TestimonialCard } from "@/components/cards/testimonial-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  ArrowLeft,
  Clock,
  Users,
  ExternalLink,
  Globe,
} from "lucide-react"
import Image from "next/image"

interface CaseStudyDetailProps {
  caseStudy: CaseStudy
  onBack: () => void
}

export function CaseStudyDetail({
  caseStudy,
  onBack,
}: CaseStudyDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Breadcrumb */}
      <button
        onClick={onBack}
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 group transition-colors cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Work
      </button>

      {/* Case Study Header */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Badge variant="secondary">{caseStudy.category}</Badge>
          <Badge variant="outline">{caseStudy.year}</Badge>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {caseStudy.title}
        </h1>

        <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
          {caseStudy.description}
        </p>

        <div className="flex flex-wrap gap-6 mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            {caseStudy.client}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            {caseStudy.timeline}
          </div>
          {caseStudy.website && (
            <a
              href={caseStudy.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <Globe className="h-4 w-4" />
              Visit Website
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      </div>

      {/* Cover Image */}
      <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden mb-12">
        <Image
          src={caseStudy.coverImage}
          alt={caseStudy.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Impact Stats */}
      <div className="aurora-gradient-subtle rounded-3xl p-8 md:p-12 mb-12">
        <h3 className="text-xl font-semibold mb-6 text-center">Impact</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudy.impact.map((impact, index) => (
            <div key={index} className="text-center">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">{impact.value}</div>
              <div className="text-sm text-muted-foreground">{impact.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Problem & Solution */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="glass p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">The Problem</h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            {caseStudy.problem}
          </p>
        </div>
        <div className="glass p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">The Solution</h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            {caseStudy.solution}
          </p>
        </div>
      </div>

      {/* Services Used */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Services</h3>
        <div className="flex flex-wrap gap-2">
          {caseStudy.services.map((service) => (
            <Badge key={service} variant="outline" className="text-base px-4 py-2">
              {service}
            </Badge>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Technology Stack</h3>
        <div className="glass p-6 rounded-2xl">
          <div className="flex flex-wrap gap-2">
            {caseStudy.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-base px-4 py-2">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">What They Say</h3>
          <TestimonialCard
            quote={caseStudy.testimonial.quote}
            author={caseStudy.testimonial.author}
            role={caseStudy.testimonial.role}
            company={caseStudy.client}
          />
        </div>
      )}

      {/* CTA */}
      <div className="aurora-gradient rounded-3xl p-8 md:p-12 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Want Results Like This?
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Let&apos;s discuss how we can help achieve similar results for your business.
        </p>
        <Button size="lg">
          Start a Project
        </Button>
      </div>

      {/* Related Work */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-6">More Case Studies</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies
            .filter((cs) => cs.id !== caseStudy.id)
            .slice(0, 3)
            .map((relatedCase) => (
              <div
                key={relatedCase.id}
                className="glass card-hover p-6 rounded-2xl h-full cursor-pointer"
                onClick={() => {
                  const element = document.getElementById("work-top")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <Badge variant="secondary" className="mb-3">
                  {relatedCase.category}
                </Badge>
                <h4 className="font-semibold mb-2">{relatedCase.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {relatedCase.summary}
                </p>
                <div className="flex items-center text-sm font-medium text-primary">
                  View Case Study
                  <ExternalLink className="ml-2 h-4 w-4" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </motion.div>
  )
}
