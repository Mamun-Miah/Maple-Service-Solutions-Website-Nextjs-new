"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  insights,
  getFeaturedInsights,
  getRecentInsights,
  getAllCategories,
  type Insight,
} from "@/content/insights";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FilterTabs } from "@/components/insights/FilterTabs";
import { FeaturedArticle } from "@/components/insights/FeaturedArticle";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { TopicTag } from "@/components/insights/TopicTag";
import { ArrowRight, Mail } from "lucide-react";

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");

  const featuredInsights = getFeaturedInsights();
  const recentInsights = getRecentInsights();
  const categories = getAllCategories();

  // Get unique tags from all insights
  const allTags = Array.from(new Set(insights.flatMap((i) => i.tags)));

  // Filter insights based on active category
  const filteredInsights =
    activeCategory === "All"
      ? recentInsights
      : recentInsights.filter((insight) => insight.category === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <>
      {/* Page-scoped CSS variables */}
      <style jsx global>{`
        [data-page="insights"] {
          /* Light Mode Colors */
          --ins-bg: #fbf8fa;
          --ins-bg-alt: #f3ecef;
          --ins-card: #ffffff;
          --ins-border: #e6d4db;
          --ins-text: #2a0f1e;
          --ins-muted: #6d3e58;
          --ins-primary: #663051;
          --ins-secondary: #8c3f6e;
          --ins-accent: #b65a8e;
          --ins-highlight: #e6b3cd;
        }

        [data-theme="dark"] [data-page="insights"] {
          /* Dark Mode Colors */
          --ins-bg: #120a10;
          --ins-bg-alt: #1b1018;
          --ins-card: rgba(255, 255, 255, 0.06);
          --ins-border: rgba(255, 255, 255, 0.12);
          --ins-text: #f6edf2;
          --ins-muted: #c9a6b8;
          --ins-primary: #b65a8e;
          --ins-secondary: #8c3f6e;
          --ins-accent: #663051;
          --ins-highlight: rgba(182, 90, 142, 0.14);
        }

        [data-page="insights"] {
          background: var(--ins-bg);
          min-height: 100vh;
        }

        [data-page="insights"]::before {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 0;
        }

        [data-theme="light"] [data-page="insights"]::before {
          background: radial-gradient(
            900px 600px at 15% 10%,
            rgba(102, 48, 81, 0.08),
            transparent 60%
          );
        }

        [data-theme="dark"] [data-page="insights"]::before {
          background: radial-gradient(
            900px 600px at 15% 10%,
            rgba(182, 90, 142, 0.14),
            transparent 60%
          );
        }

        [data-page="insights"] > * {
          position: relative;
          z-index: 1;
        }

        /* Custom scrollbar for better aesthetics */
        [data-page="insights"] ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        [data-page="insights"] ::-webkit-scrollbar-track {
          background: transparent;
        }

        [data-page="insights"] ::-webkit-scrollbar-thumb {
          background: var(--ins-border);
          border-radius: 4px;
        }

        [data-page="insights"] ::-webkit-scrollbar-thumb:hover {
          background: var(--ins-muted);
        }

        /* Focus-visible rings for accessibility */
        [data-page="insights"] *:focus-visible {
          outline: 2px solid var(--ins-primary);
          outline-offset: 2px;
        }
      `}</style>

      <main data-page="insights">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium text-[var(--ins-primary)] uppercase tracking-wider mb-4"
            >
              Insights
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--ins-text)] mb-6 leading-tight"
            >
              Thoughts & Insights
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-[var(--ins-muted)] leading-relaxed"
            >
              Thought leadership, industry insights, and technical expertise
              from the Maple team.
            </motion.p>
          </motion.div>
        </section>

        {/* Filter Tabs */}
        <section className="mx-auto max-w-7xl px-6 md:px-8 mb-16">
          <FilterTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </section>

        {/* Featured Article */}
        {featuredInsights.length > 0 && (
          <section className="mx-auto max-w-7xl px-6 md:px-8 mb-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-[var(--ins-text)]">
                Featured
              </h2>
            </motion.div>
            <div className="grid gap-8">
              {featuredInsights.slice(0, 2).map((insight) => (
                <FeaturedArticle key={insight.id} insight={insight} />
              ))}
            </div>
          </section>
        )}

        {/* Recent Articles Grid */}
        <section className="mx-auto max-w-7xl px-6 md:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-[var(--ins-text)]">
              Recent
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInsights.map((insight, index) => (
              <ArticleCard key={insight.id} insight={insight} index={index} />
            ))}
          </div>
          {filteredInsights.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-[var(--ins-muted)] py-12"
            >
              No articles found in this category.
            </motion.p>
          )}
        </section>

        {/* Topic Cloud */}
        <section className="mx-auto max-w-7xl px-6 md:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-[var(--ins-card)] border border-[var(--ins-border)] rounded-lg p-8"
          >
            <h2 className="text-xl font-bold text-[var(--ins-text)] mb-6">
              Explore by Topic
            </h2>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag, index) => (
                <TopicTag key={tag} tag={tag} index={index} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Newsletter CTA */}
        <section className="mx-auto max-w-7xl px-6 md:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--ins-bg-alt)] border border-[var(--ins-border)] rounded-lg p-8 md:p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--ins-text)] mb-4">
              Subscribe to Insights
            </h2>
            <p className="text-[var(--ins-muted)] text-lg mb-8 leading-relaxed">
              Get thought leadership and industry insights delivered to your
              inbox.
            </p>
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-[var(--ins-card)] border-[var(--ins-border)] text-[var(--ins-text)] placeholder:text-[var(--ins-muted)] focus:border-[var(--ins-primary)] focus:ring-[var(--ins-primary)]"
                />
                <Button
                  type="submit"
                  className="bg-[var(--ins-primary)] text-white hover:bg-[var(--ins-secondary)] transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </div>
            </form>
          </motion.div>
        </section>
      </main>
    </>
  );
}
