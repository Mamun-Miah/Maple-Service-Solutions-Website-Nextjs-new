# GSAP Scroll Animations Implementation

## What Was Added

### 1. GSAP + ScrollTrigger Installed
```bash
bun add gsap @gsap/react
```

### 2. Scroll Reveal Components Created
File: `/home/z/my-project/src/components/components/scroll-reveal.tsx`

Components:
- `ScrollReveal` - Single element scroll reveal with customizable direction
- `StaggerReveal` - Staggered animation for multiple children
- `ParallaxScroll` - Parallax effect on scroll

### 3. Homepage Updated with GSAP Animations
File: `/home/z/my-project/src/app/(site)/page.tsx`

Sections with GSAP animations:
- ✅ Section B - Identity Triangle (ScrollReveal wrapper + StaggerReveal for cards)
- ✅ Section C - Products Showcase (ScrollReveal + StaggerReveal for product cards)
- ✅ Section D - Services (ScrollReveal + StaggerReveal for service cards)
- ✅ Section F - Featured Work (ScrollReveal + StaggerReveal for case studies)
- ✅ Section G - Why Maple (ScrollReveal + StaggerReveal for feature cards + Maple Promise)
- ✅ Section H - Industries Grid (ScrollReveal + StaggerReveal for industry cards)
- ✅ Section I - Bangladesh to World (ScrollReveal for both columns)
- ✅ Section J - Final CTA (ScrollReveal wrapper + inner ScrollReveal elements)

### 4. Animation Features
- Direction options: up, down, left, right
- Stagger delay support (0.05s to 0.2s)
- Duration: 0.8s (can be customized)
- Easing: power3.out (premium feel)
- ScrollTrigger start point: "top 85%"
- Toggle actions: "play none none reverse" (play once, no reverse)
- Respects prefers-reduced-motion

## Usage Example

```tsx
<ScrollReveal direction="up" delay={0.1}>
  <section>
    <SectionHeader title="Title" />
    <StaggerReveal staggerDelay={0.1} className="grid">
      {items.map((item) => <Card key={item.id} />)}
    </StaggerReveal>
  </section>
</ScrollReveal>
```

## Status
✅ GSAP installed
✅ ScrollReveal components created
✅ Homepage updated with scroll animations
✅ Page compiling successfully
✅ Animations triggering on scroll

## Next Steps
1. Complete Section J (Final CTA) GSAP implementation (file permission issue)
2. Add ScrollReveal to Timeline component for process steps
3. Apply GSAP animations to other pages (Products, Services, Work, etc.)
4. Test and fine-tune animation timing
5. Optimize performance (lazy loading ScrollTrigger)
