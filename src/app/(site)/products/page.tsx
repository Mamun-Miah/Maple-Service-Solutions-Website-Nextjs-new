"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ProductsHero } from "@/components/products/ProductsHero";
import { ProductsFilters } from "@/components/products/ProductsFilters";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductsCTA } from "@/components/products/ProductsCTA";
import { products } from "@/content/products";
import type { FilterType } from "@/components/products/ProductsFilters";
import "./products.css";

const EASE_CINEMATIC = [0.22, 1, 0.36, 1] as const;

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  // Derive filtered products from active filter
  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.status === activeFilter);

  // Calculate counts
  const liveCount = products.filter((p) => p.status === "live").length;
  const betaCount = products.filter((p) => p.status === "beta").length;
  const comingSoonCount = products.filter(
    (p) => p.status === "coming-soon"
  ).length;

  const ecosystemRef = useRef<HTMLDivElement>(null);
  const isEcosystemInView = useInView(ecosystemRef, {
    once: true,
    amount: 0.5,
  });

  return (
    <main
      data-page="products"
      className="relative overflow-hidden min-h-screen"
    >
      {/* HERO SECTION */}
      <ProductsHero />

      {/* ECOSYSTEM STRIP */}
      <section className="mx-auto max-w-7xl px-6 md:px-8 py-10">
        <motion.div
          ref={ecosystemRef}
          initial={{ opacity: 0, y: 12 }}
          animate={isEcosystemInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE_CINEMATIC }}
          className="prd-ecosystem-strip flex items-center justify-center gap-3 md:gap-4 text-[var(--prd-muted)] text-sm md:text-base"
        >
          <span>AI</span>
          <span className="prd-ecosystem-separator">·</span>
          <span>Platforms</span>
          <span className="prd-ecosystem-separator">·</span>
          <span>Infrastructure</span>
          <span className="prd-ecosystem-separator">·</span>
          <span>Automation</span>
          <span className="prd-ecosystem-separator">·</span>
          <span>Data</span>
        </motion.div>
      </section>

      {/* FILTERS SECTION */}
      <section className="mx-auto max-w-7xl px-6 md:px-8 py-10">
        <ProductsFilters
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      </section>

      {/* PRODUCT GRID SECTION */}
      <section
        id="products-grid"
        className="mx-auto max-w-7xl px-6 md:px-8 pb-16"
      >
        {/* Live Products */}
        {(activeFilter === "all" || activeFilter === "live") &&
          liveCount > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: "var(--prd-primary)" }}
                />
                <h2 className="text-xl md:text-2xl font-semibold text-[var(--prd-text)]">
                  Live Products
                  <span className="ml-2 text-[var(--prd-primary)] tabular-nums">
                    {liveCount}
                  </span>
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products
                  .filter((p) => p.status === "live")
                  .map((product, index) => (
                    <ProductCard
                      key={product.id}
                      name={product.name}
                      description={product.tagline}
                      tags={product.tags}
                      status={product.status}
                      slug={product.slug}
                      index={index}
                      image={product.image}
                      website={product.website}
                    />
                  ))}
              </div>
            </div>
          )}

        {/* Beta Products */}
        {(activeFilter === "all" || activeFilter === "beta") &&
          betaCount > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: "var(--prd-accent)" }}
                />
                <h2 className="text-xl md:text-2xl font-semibold text-[var(--prd-text)]">
                  Beta Products
                  <span className="ml-2 text-[var(--prd-primary)] tabular-nums">
                    {betaCount}
                  </span>
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products
                  .filter((p) => p.status === "beta")
                  .map((product, index) => (
                    <ProductCard
                      key={product.id}
                      name={product.name}
                      description={product.tagline}
                      tags={product.tags}
                      status={product.status}
                      slug={product.slug}
                      index={index}
                      image={product.image}
                      website={product.website}
                    />
                  ))}
              </div>
            </div>
          )}

        {/* Coming Soon Products */}
        {(activeFilter === "all" || activeFilter === "coming-soon") &&
          comingSoonCount > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: "var(--prd-muted)" }}
                />
                <h2 className="text-xl md:text-2xl font-semibold text-[var(--prd-text)]">
                  Coming Soon
                  <span className="ml-2 text-[var(--prd-muted)] tabular-nums">
                    {comingSoonCount}
                  </span>
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products
                  .filter((p) => p.status === "coming-soon")
                  .map((product, index) => (
                    <ProductCard
                      key={product.id}
                      name={product.name}
                      description={product.tagline}
                      tags={product.tags}
                      status={product.status}
                      slug={product.slug}
                      index={index}
                      image={product.image}
                      website={product.website}
                    />
                  ))}
              </div>
            </div>
          )}

        {/* No products message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[var(--prd-muted)] text-lg">
              No products found in this category.
            </p>
          </div>
        )}
      </section>

      {/* BUILD CUSTOM CTA SECTION */}
      <section className="mx-auto max-w-7xl px-6 md:px-8 pb-20">
        <ProductsCTA />
      </section>
    </main>
  );
}
