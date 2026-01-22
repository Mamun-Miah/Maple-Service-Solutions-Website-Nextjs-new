'use client'

import { useState, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { FilterTab } from '@/components/products/FilterTab'
import { ProductCard } from '@/components/products/ProductCard'
import { Counter } from '@/components/products/Counter'
import { products } from '@/content/products'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

// Enterprise easing curves - "System Activation"
const EASE_CINEMATIC = [0.16, 1, 0.3, 1]
const EASE_LUXURY = [0.22, 1, 0.36, 1]

type FilterType = 'all' | 'live' | 'beta' | 'coming-soon'

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')
  const [filteredProducts, setFilteredProducts] = useState(products)
  const prefersReducedMotion = useReducedMotion()
  const heroRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 })

  // Filter products
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter(p => p.status === activeFilter))
    }
  }, [activeFilter])

  // Calculate counts
  const liveCount = products.filter(p => p.status === 'live').length
  const betaCount = products.filter(p => p.status === 'beta').length
  const comingSoonCount = products.filter(p => p.status === 'coming-soon').length

  return (
    <div data-page="products" className="min-h-screen" style={{ backgroundColor: 'var(--prod-bg)' }}>
      {/* ========================================
         HERO SECTION - SYSTEM ACTIVATION
         ======================================== */}
      <section
        ref={heroRef}
        className="relative min-h-[55vh] flex items-center overflow-hidden"
      >
        {/* Background Image with MANDATORY OVERLAY for text readability */}
        <div className="absolute inset-0 z-0">
          {/* MANDATORY OVERLAY - Light mode: rgba(246, 248, 252, 0.78) */}
          <div
            className="absolute inset-0 dark:hidden"
            style={{
              background: 'rgba(5, 8, 22, 0.82)'
            }}
          />
          <picture className="w-full h-full">
            <source
              srcSet="/backgrounds/products/products-hero-dark.png"
              media="(prefers-color-scheme: dark)"
            />
            <img
              src="/backgrounds/products/products-hero-light.png"
              alt=""
              className="w-full h-full object-cover"
              style={{ opacity: 0.5 }}
            />
          </picture>
        </div>

        {/* Hero Content - Structured Reveal (NOT letter-by-letter, calm) */}
        <div className="relative z-10 container mx-auto px-6 py-16">
          <div className="max-w-4xl">
            {/* Title - Fade + Y Reveal */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.56, ease: EASE_CINEMATIC }}
              className="mb-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--prod-text)] tracking-tight mb-3">
                Our Products
              </h2>
            </motion.div>

            {/* Subtitle - Line Sweep (Clean, Enterprise Style) */}
            <motion.p
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.48, ease: EASE_CINEMATIC, delay: 0.12 }}
              className="text-xl text-[var(--prod-muted)] max-w-2xl leading-relaxed"
            >
              Real products solving real problems, from MVP to enterprise scale.
            </motion.p>

            {/* Filter Tabs - Slide Horizontally (Enterprise Style, No Overkill Animation) */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, ease: EASE_CINEMATIC, delay: 0.20 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {[
                { id: 'all' as FilterType, label: 'All Products' },
                { id: 'live' as FilterType, label: 'Live' },
                { id: 'beta' as FilterType, label: 'Beta' },
                { id: 'coming-soon' as FilterType, label: 'Coming Soon' }
              ].map((tab, i) => (
                <FilterTab
                  key={tab.id}
                  filter={tab.label}
                  isActive={activeFilter === tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  delay={prefersReducedMotion ? 0 : 0.05 + (i * 0.06)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================
         PRODUCTS GRID - SYSTEMATIC CATALOG
         ======================================== */}
      <section className="relative py-16 px-6">
        {/* Background with MANDATORY OVERLAY */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${
              typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
                ? '/backgrounds/products/products-section-dark.png'
                : '/backgrounds/products/products-section-light.png'
            })`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* MANDATORY OVERLAY for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background: 'rgba(246, 248, 252, 0.78)'
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto">
          {/* Live Products */}
          {(activeFilter === 'all' || activeFilter === 'live') && liveCount > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-5 w-5 text-[var(--prod-primary)]" />
                <h2 className="text-2xl font-semibold text-[var(--prod-text)]">
                  Live Products
                </h2>
                <Counter
                  target={liveCount}
                  className="text-[var(--prod-primary)] ml-2"
                />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products
                  .filter(p => p.status === 'live')
                  .map((product, index) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.slug}`}
                      className="block"
                    >
                      <ProductCard
                        name={product.name}
                        description={product.tagline}
                        tags={product.tags}
                        status="live"
                        index={index}
                      />
                    </Link>
                  ))}
              </div>
            </div>
          )}

          {/* Beta Products */}
          {(activeFilter === 'all' || activeFilter === 'beta') && betaCount > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-5 w-5 text-[var(--prod-secondary)]" />
                <h2 className="text-2xl font-semibold text-[var(--prod-text)]">
                  Beta Products
                </h2>
                <Counter
                  target={betaCount}
                  className="text-[var(--prod-secondary)] ml-2"
                />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products
                  .filter(p => p.status === 'beta')
                  .map((product, index) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.slug}`}
                      className="block"
                    >
                      <ProductCard
                        name={product.name}
                        description={product.tagline}
                        tags={product.tags}
                        status="beta"
                        index={index}
                      />
                    </Link>
                  ))}
              </div>
            </div>
          )}

          {/* Coming Soon Products */}
          {(activeFilter === 'all' || activeFilter === 'coming-soon') && comingSoonCount > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-5 w-5 text-[var(--prod-muted)]" />
                <h2 className="text-2xl font-semibold text-[var(--prod-text)]">
                  Coming Soon
                </h2>
                <Counter
                  target={comingSoonCount}
                  className="text-[var(--prod-muted)] ml-2"
                />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products
                  .filter(p => p.status === 'coming-soon')
                  .map((product, index) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.slug}`}
                      className="block"
                    >
                      <ProductCard
                        name={product.name}
                        description={product.tagline}
                        tags={product.tags}
                        status="coming-soon"
                        index={index}
                      />
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================
         CTA SECTION - ENGINEERED CONFIDENCE
         ======================================== */}
      <section className="relative py-16 px-6">
        <div className="relative container mx-auto max-w-4xl">
          {/* Mask Reveal Heading */}
          <motion.div
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={isCtaInView ? { clipPath: 'inset(0 0 0 0)' } : {}}
            transition={{ duration: 0.68, ease: EASE_CINEMATIC }}
            className="mb-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--prod-text)] tracking-tight">
              Build Your Custom Product
            </h2>
          </motion.div>

          {/* Subtitle - Calm Description */}
          <motion.p
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.56, ease: EASE_CINEMATIC, delay: 0.16 }}
            className="text-lg text-[var(--prod-muted)] max-w-2xl mx-auto mb-8"
          >
            Ready to bring your vision to life? Let's build something custom together.
          </motion.p>

          {/* CTA Button - Enterprise Style (No Motion Overload, Clean) */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.56, ease: EASE_CINEMATIC, delay: 0.32 }}
          >
            <Link
              href="/contact"
              className={cn(
                'inline-flex items-center gap-2 px-8 py-4 rounded-lg',
                'bg-[var(--prod-primary)] text-white font-semibold text-lg',
                'hover:bg-[var(--prod-secondary)] transition-all duration-300',
                'hover:scale-105'
              )}
            >
              Start a Project
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ duration: 0.28, ease: EASE_LUXURY }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
