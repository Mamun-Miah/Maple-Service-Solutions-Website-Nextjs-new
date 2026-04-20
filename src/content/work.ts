export interface CaseStudy {
  id: string
  slug: string
  title: string
  client: string
  category: "Website" | "Web Apps" | "Mobile Apps" | "Others"
  year: number
  summary: string
  description: string
  problem: string
  solution: string
  impact: Array<{
    label: string
    value: string
  }>
  timeline: string
  techStack: string[]
  services: string[]
  coverImage: string
  gallery?: string[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  website?: string
}

export const caseStudies: CaseStudy[] = [
  // ===== WEBSITE CATEGORY =====
  {
    id: "unity-international-school",
    slug: "unity-international-school",
    title: "Unity International School",
    client: "Unity International School",
    category: "Website",
    year: 2025,
    summary: "A comprehensive school website featuring academic programs, admissions, faculty profiles, and student life for an international educational institution.",
    description:
      "We designed and developed a professional school website for Unity International School, a leading international educational institution. The website serves as the primary digital hub for prospective students, parents, and the school community, featuring detailed academic program information, an online admissions portal, faculty and staff directories, event calendars, and a gallery showcasing student life and campus facilities.",
    problem:
      "Unity International School relied on a basic WordPress site that lacked modern design, mobile responsiveness, and clear information architecture. Parents struggled to find key information about admissions, academic programs, and school events. The outdated site failed to reflect the school's reputation and educational standards, negatively impacting enrollment inquiries and parent engagement.",
    solution:
      "We built a completely new website with a clean, professional design that prioritizes accessibility and easy navigation. The site features a structured information hierarchy with dedicated sections for academics, admissions, student life, and school news. We implemented an intuitive admissions inquiry form, an events calendar with registration, a photo and video gallery, and a responsive layout that works flawlessly across all devices. The design reflects the school's commitment to excellence while maintaining warmth and approachability.",
    impact: [
      { label: "Admission Inquiries", value: "+120%" },
      { label: "Page Load Speed", value: "1.5s" },
      { label: "Mobile Traffic", value: "+65%" },
      { label: "Parent Engagement", value: "+80%" }
    ],
    timeline: "2 months",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "WordPress CMS",
      "Vercel"
    ],
    services: [
      "Web Design",
      "Web Development",
      "CMS Integration"
    ],
    coverImage: "/work/unity.png",
    testimonial: {
      quote: "The new website has completely transformed how we connect with prospective families. Parents consistently tell us the site is informative and easy to navigate, and our admission inquiries have more than doubled.",
      author: "Mrs. Fatima Rahman",
      role: "Principal"
    },
    website: "https://unityinternationalschool.com/"
  },
  {
    id: "luxura-boudoir",
    slug: "luxura-boudoir",
    title: "Luxura Boudoir — Online Store",
    client: "Luxura",
    category: "Website",
    year: 2025,
    summary: "An elegant e-commerce website for a premium fashion and lifestyle brand with product catalog, shopping cart, and seamless checkout experience.",
    description:
      "We created a sophisticated online store for Luxura, a premium fashion brand specializing in boudoir and lifestyle products. The website features a visually stunning product catalog with high-resolution imagery, an intuitive shopping experience with filtering and search, a fully functional shopping cart and checkout system, and customer account management with order tracking.",
    problem:
      "Luxura needed a digital storefront that matched the premium quality and aesthetic of their products. They were relying solely on social media for sales, which limited their growth potential. Without a proper e-commerce platform, they struggled with inventory management, order processing, and providing customers with a professional shopping experience.",
    solution:
      "We designed and built a complete e-commerce website with a focus on visual storytelling and user experience. The site features elegant product pages with multiple images, size guides, and customer reviews. We implemented advanced product filtering, a streamlined multi-step checkout, integration with popular payment gateways, and an admin dashboard for order and inventory management. The design emphasizes the brand's luxurious aesthetic with clean layouts and subtle animations.",
    impact: [
      { label: "Online Revenue", value: "+180%" },
      { label: "Average Order Value", value: "+35%" },
      { label: "Conversion Rate", value: "3.2%" },
      { label: "Customer Returns", value: "-25%" }
    ],
    timeline: "3 months",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Stripe"
    ],
    services: [
      "Web Design",
      "Web Development",
      "E-Commerce Setup"
    ],
    coverImage: "/work/lux.png",
    testimonial: {
      quote: "Moving from Instagram-only sales to our own website was a game changer. The online store Maple built for us is beautiful and our customers love the shopping experience. Revenue has nearly tripled.",
      author: "Sarah Mitchell",
      role: "Founder"
    },
    website: "https://luxuraboudoir.com/"
  },
  {
    id: "vestara-global",
    slug: "vestara-global",
    title: "VESTARA — Global Sourcing Platform",
    client: "VESTARA",
    category: "Website",
    year: 2025,
    summary: "A professional corporate website for a Bangladesh-based apparel sourcing company showcasing capabilities, product categories, and factory partnerships to international buyers.",
    description:
      "We built a professional corporate website for VESTARA, a premium apparel sourcing and private label manufacturing company based in Bangladesh. The site positions VESTARA as a trusted global sourcing partner, featuring detailed product category showcases, company capabilities, quality assurance processes, a streamlined quote request system, and comprehensive information about their factory network and global shipping capabilities.",
    problem:
      "VESTARA had no dedicated website to present their sourcing capabilities to international buyers. They relied on trade shows and direct outreach, which limited their reach. Potential buyers from the USA, UK, EU, and Australia had no way to explore VESTARA's product range, quality standards, or request quotes online. This put them at a significant disadvantage against competitors with strong digital presence.",
    solution:
      "We designed a corporate website that communicates trust, scale, and professionalism. Key features include a product catalog organized by category (baby clothing, women's basics, streetwear, denim, polo, and uniforms), a detailed 'How We Work' section explaining the sourcing process, quality assurance documentation, a quote request form with product specification fields, and a factory partner showcase. The site is optimized for international SEO to attract buyers from target markets.",
    impact: [
      { label: "Quote Requests", value: "+200%" },
      { label: "International Traffic", value: "+300%" },
      { label: "Lead Response Time", value: "-60%" },
      { label: "Buyer Retention", value: "+45%" }
    ],
    timeline: "2 months",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel"
    ],
    services: [
      "Web Design",
      "Web Development",
      "SEO Optimization"
    ],
    coverImage: "/work/vestara.png",
    testimonial: {
      quote: "The website Maple built has become our most powerful sales tool. International buyers now find us online, explore our capabilities, and submit quote requests directly. Our B2B lead generation has been completely transformed.",
      author: "Tanvir Ahmed",
      role: "Managing Director"
    },
    website: "https://vestara.mapleitfirm.com/"
  },
  {
    id: "nvaiin-brand",
    slug: "nvaiin-brand",
    title: "N'VAIIN — Purpose-Driven Fashion Brand",
    client: "N'VAIIN",
    category: "Website",
    year: 2025,
    summary: "A brand storytelling website for a purpose-driven clothing line that merges fashion with values, featuring collections, brand philosophy, and e-commerce.",
    description:
      "We designed and developed a brand-focused website for N'VAIIN (Not Made In Vain), a revolutionary clothing line built on the belief that style should reflect values. The website goes beyond typical e-commerce — it tells a compelling brand story, showcases curated collections, and provides an immersive shopping experience that connects customers with the brand's mission and purpose.",
    problem:
      "N'VAIIN had a powerful brand concept but no digital platform that could effectively communicate their philosophy and showcase their collections. They needed a website that could serve as both a brand storytelling platform and a commercial storefront, creating an emotional connection with visitors while driving sales. The challenge was balancing brand narrative with conversion-focused e-commerce functionality.",
    solution:
      "We created a website that seamlessly blends brand storytelling with e-commerce. The design features immersive collection pages with editorial-quality imagery, a brand philosophy section that communicates N'VAIIN's mission, a curated product catalog with detailed descriptions, and a smooth checkout experience. We implemented subtle animations and scroll-based interactions to create an engaging, narrative-driven browsing experience. The site also includes a newsletter signup, social proof elements, and integration with inventory management.",
    impact: [
      { label: "Brand Awareness", value: "+250%" },
      { label: "Time on Site", value: "+4.2 min" },
      { label: "Conversion Rate", value: "2.8%" },
      { label: "Email Subscribers", value: "+180%" }
    ],
    timeline: "3 months",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel"
    ],
    services: [
      "Brand & Identity Systems",
      "Web Design",
      "Web Development"
    ],
    coverImage: "/work/nvain.png",
    testimonial: {
      quote: "Maple understood our vision from the very first conversation. They built a website that truly represents what N'VAIIN stands for — our customers don't just shop, they connect with our story. The results have been incredible.",
      author: "David Chen",
      role: "Founder & Creative Director"
    },
    website: "https://nvaiin.mapleitfirm.com/"
  },
  {
    id: "laventerprise-store",
    slug: "laventerprise-store",
    title: "LaventerPrise — Online Store",
    client: "LaventerPrise",
    category: "Website",
    year: 2025,
    summary: "A modern, feature-rich online store for a multi-category retail business with premium kitchen tools, cookware, gadgets, and accessories.",
    description:
      "We built a complete online store for LaventerPrise, a growing retail business specializing in premium kitchen tools, cookware, gadgets, and accessories. The e-commerce platform features an organized product hierarchy with advanced search and filtering, a streamlined checkout process with multiple payment options, customer accounts with order tracking, and a responsive design that provides a seamless shopping experience across all devices.",
    problem:
      "LaventerPrise was running their retail business through social media and manual order processing, which was unsustainable as they grew. They lacked a proper product catalog, had no inventory tracking, and were losing potential customers who wanted a professional shopping experience with secure online payments and order tracking.",
    solution:
      "We developed a full-featured e-commerce website with a clean, modern design that scales with their product range. The platform includes product categorization with advanced filters, a robust search system, customer accounts with order tracking, integration with popular payment gateways, and an admin dashboard for inventory and order management. We optimized the site for speed and SEO to attract organic traffic.",
    impact: [
      { label: "Monthly Revenue", value: "+300%" },
      { label: "Product Catalog", value: "500+ Items" },
      { label: "Customer Retention", value: "+65%" },
      { label: "Order Processing", value: "70% Faster" }
    ],
    timeline: "3 months",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL"
    ],
    services: [
      "Web Design",
      "Web Development",
      "E-Commerce Setup"
    ],
    coverImage: "/work/laventerprise.png",
    testimonial: {
      quote: "Moving from social media to a proper online store was the best decision we made. Maple delivered a platform that handles our entire operation — from product display to payment processing. Our revenue has tripled in just a few months.",
      author: "Lavender Thompson",
      role: "CEO"
    },
    website: "https://laventerprise.shop/"
  },
  {
    id: "aurum-luxury",
    slug: "aurum-luxury",
    title: "AURUM — Ultra-Luxury Fashion House",
    client: "AURUM",
    category: "Website",
    year: 2025,
    summary: "An exclusive, editorial-style website for an ultra-luxury fashion brand featuring limited-edition collections, craftsmanship storytelling, and a premium shopping experience.",
    description:
      "We crafted a bespoke digital experience for AURUM, an ultra-luxury fashion and lifestyle house whose tagline is 'Crafted for the Exceptional.' The website is designed as a digital atelier — an immersive, gallery-like experience that showcases limited-edition collections spanning watches, clothing, lifestyle objects, and rare archive pieces. Every interaction is intentional, every transition refined, creating a sense of exclusivity and craftsmanship that mirrors the brand itself.",
    problem:
      "AURUM needed a digital presence that matched the exclusivity and craftsmanship of their physical products. As an ultra-luxury brand with limited-edition drops and a global clientele, they required a website that could convey rarity, quality, and artistry — something far beyond a standard e-commerce template. The site needed to feel like walking into a private boutique, not browsing a store.",
    solution:
      "We designed a bespoke website with an editorial, gallery-like aesthetic that prioritizes visual storytelling and brand immersion. Features include a lookbook-style collection showcase, scroll-driven animations that reveal product details, a capsule collection countdown for limited drops, an artisan craftsmanship section with behind-the-scenes content, and a discreet e-commerce flow. The typography, spacing, and interactions are all carefully considered to create a sense of luxury and intentionality throughout the browsing experience.",
    impact: [
      { label: "Collection Sell-Through", value: "92%" },
      { label: "Average Order Value", value: "$1,200+" },
      { label: "Global Reach", value: "30+ Countries" },
      { label: "Brand Perception", value: "+90%" }
    ],
    timeline: "4 months",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel"
    ],
    services: [
      "Brand & Identity Systems",
      "Web Design",
      "Web Development"
    ],
    coverImage: "/work/aurum.png",
    testimonial: {
      quote: "Maple didn't just build us a website — they created a digital extension of our atelier. Every pixel, every animation, every interaction reflects the same level of craftsmanship we put into our products. It's exactly what AURUM needed.",
      author: "Alexander Rees",
      role: "Founder & Creative Director"
    },
    website: "https://aurum.mapleitfirm.com/"
  },
  // ===== WEB APPS CATEGORY =====
  {
    id: "skillspark-academy",
    slug: "skillspark-academy",
    title: "SkillSpark Academy — Learning Management Platform",
    client: "SkillSpark Academy",
    category: "Web Apps",
    year: 2025,
    summary: "A comprehensive learning management system (LMS) with course management, student enrollment, progress tracking, and interactive learning features.",
    description:
      "We built SkillSpark Academy, a full-featured learning management platform that empowers educational institutions and trainers to create, manage, and deliver courses online. The web application includes a course builder with multimedia content support, student enrollment and authentication, progress tracking with analytics dashboards, quiz and assignment management, certificate generation, and a responsive learning interface that works across all devices.",
    problem:
      "SkillSpark Academy was managing their educational programs through fragmented tools — spreadsheets for enrollment, email for communication, and third-party video platforms for content delivery. This created a disjointed experience for both instructors and students. They needed a unified platform that could handle the entire learning lifecycle from course creation to student certification, while providing actionable analytics to improve educational outcomes.",
    solution:
      "We developed a comprehensive LMS web application with a clean, intuitive interface. The platform features a drag-and-drop course builder supporting video, documents, and interactive content, a robust student management system with role-based access, real-time progress tracking and analytics for instructors, an integrated quiz and assignment engine with automated grading, a certificate generation system, and a student-facing learning portal with bookmarking and note-taking capabilities. The application is built with scalability in mind to support growing course catalogs and student numbers.",
    impact: [
      { label: "Student Enrollment", value: "+250%" },
      { label: "Course Completion", value: "78%" },
      { label: "Instructor Efficiency", value: "+60%" },
      { label: "Platform Uptime", value: "99.95%" }
    ],
    timeline: "5 months",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS S3",
      "Tailwind CSS"
    ],
    services: [
      "Product Design",
      "Engineering & Development",
      "Growth & Optimization"
    ],
    coverImage: "/work/skillpark.png",
    testimonial: {
      quote: "SkillSpark Academy has completely transformed how we deliver education. The platform is intuitive for both our instructors and students, and the analytics have helped us improve course quality significantly. Maple delivered a world-class LMS.",
      author: "Dr. Patricia Owens",
      role: "Director of Education"
    },
    website: "https://skillspark.mapleitfirm.com/"
  },
  {
    id: "doctor-platform",
    slug: "doctor-platform",
    title: "Doctor Platform — Healthcare Management System",
    client: "Healthcare Startup",
    category: "Web Apps",
    year: 2025,
    summary: "A comprehensive healthcare management web application with appointment scheduling, patient records, telemedicine, and practice management tools.",
    description:
      "We built a comprehensive healthcare management platform designed to modernize how medical practices operate. The web application provides doctors and healthcare providers with tools for appointment scheduling and calendar management, electronic patient records and medical history tracking, telemedicine integration for virtual consultations, prescription management, billing and insurance claim processing, and a patient-facing portal for self-service tasks like appointment booking and accessing medical records.",
    problem:
      "Healthcare providers were struggling with outdated systems that fragmented patient data across multiple platforms. Appointment scheduling was manual and error-prone, patient records were stored in paper files or legacy software, and there was no way to offer telemedicine consultations. This resulted in administrative inefficiencies, longer wait times, and a suboptimal patient experience. The practice needed a modern, HIPAA-compliant platform to streamline operations.",
    solution:
      "We designed and developed a HIPAA-compliant web application that centralizes all practice management functions into a single, intuitive platform. Key features include a smart scheduling system with automated reminders, a comprehensive EHR system with secure patient records, integrated video calling for telemedicine consultations, digital prescription management, automated billing with insurance integration, and a patient portal with self-service capabilities. The application is built with security and compliance as foundational principles, with encrypted data storage and role-based access controls.",
    impact: [
      { label: "Appointment No-Shows", value: "-45%" },
      { label: "Patient Satisfaction", value: "4.7/5" },
      { label: "Admin Time Saved", value: "12 hrs/week" },
      { label: "Telemedicine Sessions", value: "500+/month" }
    ],
    timeline: "6 months",
    techStack: [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "WebRTC",
      "AWS",
      "Docker"
    ],
    services: [
      "Product Design",
      "Engineering & Development",
      "AI & Automation Integration"
    ],
    coverImage: "/work/doctor.png",
    testimonial: {
      quote: "This platform has revolutionized our practice. Everything from scheduling to patient records to telemedicine is now in one place. Our staff saves hours every week, and our patients love the convenience of the patient portal.",
      author: "Dr. Michael Torres",
      role: "Chief Medical Officer"
    }
    // Note: website currently offline — https://doctor.mapleit.online/
  },
  // {
  //   id: "fintech-redesign",
  //   slug: "fintech-redesign",
  //   title: "FinTech Platform Redesign + Scale",
  //   client: "Leading FinTech Company",
  //   category: "Web Apps",
  //   year: 2024,
  //   summary: "Complete platform redesign and architecture overhaul to support 10x growth",
  //   description:
  //     "We partnered with a leading FinTech company to completely redesign their platform and re-engineer their architecture. The goal was to improve user experience while scaling to handle a tenfold increase in users and transactions.",
  //   problem:
  //     "The existing platform had accumulated significant technical debt and UX issues. User engagement was declining, the system struggled with load during peak hours, and the codebase was difficult to maintain. The company needed to scale rapidly to meet growing demand.",
  //   solution:
  //     "We conducted extensive user research to understand pain points and opportunities. Based on insights, we redesigned the entire user experience with a focus on simplicity and trust. Simultaneously, we re-architected the backend using modern patterns, implemented caching strategies, and set up auto-scaling infrastructure.",
  //   impact: [
  //     { label: "User Engagement", value: "+180%" },
  //     { label: "Transaction Speed", value: "3x Faster" },
  //     { label: "System Uptime", value: "99.99%" },
  //     { label: "Load Capacity", value: "10x Scale" }
  //   ],
  //   timeline: "6 months",
  //   techStack: [
  //     "React",
  //     "TypeScript",
  //     "Node.js",
  //     "PostgreSQL",
  //     "Redis",
  //     "AWS",
  //     "Docker",
  //     "Kubernetes"
  //   ],
  //   services: [
  //     "Product Design",
  //     "Engineering & Development",
  //     "Growth & Optimization"
  //   ],
  //   coverImage: "/fintech-platform.png",
  //   testimonial: {
  //     quote: "Maple transformed our platform completely. The new design is beautiful, and the system has never been more stable. They delivered ahead of schedule and exceeded our expectations.",
  //     author: "Ahmed Rahman",
  //     role: "CTO"
  //   }
  // },
  // {
  //   id: "ai-startup-launch",
  //   slug: "ai-startup-launch",
  //   title: "AI Startup Brand + Product Launch",
  //   client: "AI Healthcare Startup",
  //   category: "Web Apps",
  //   year: 2024,
  //   summary: "Complete brand creation and product launch for an AI-powered healthcare platform",
  //   description:
  //     "We helped a healthcare AI startup build their brand from scratch and launch their first product. The challenge was to create trust in a new AI-driven healthcare solution while explaining complex technology in accessible terms.",
  //   problem:
  //     "The startup had innovative AI technology but no brand, no product, and no clear go-to-market strategy. They needed to build credibility in the highly regulated healthcare space while differentiating themselves from competitors.",
  //   solution:
  //     "We began with brand strategy workshops to define their positioning and personality. We created a visual identity that conveyed trust, innovation, and accessibility. For the product, we designed an intuitive interface that made AI insights actionable for healthcare providers. We also developed marketing materials and a launch strategy.",
  //   impact: [
  //     { label: "Launch Success", value: "500+ Sign-ups" },
  //     { label: "Media Coverage", value: "15+ Features" },
  //     { label: "User Satisfaction", value: "4.8/5" },
  //     { label: "Funding Raised", value: "$2M Seed" }
  //   ],
  //   timeline: "4 months",
  //   techStack: [
  //     "Next.js",
  //     "Python",
  //     "TensorFlow",
  //     "FastAPI",
  //     "React",
  //     "PostgreSQL"
  //   ],
  //   services: [
  //     "Brand & Identity Systems",
  //     "Product Design",
  //     "Engineering & Development"
  //   ],
  //   coverImage: "/ai-healthcare-platform.png",
  //   testimonial: {
  //     quote: "Maple understood our vision from day one. They built a brand that perfectly captures who we are, and the product they designed has received incredible feedback from our users.",
  //     author: "Dr. Sarah Khan",
  //     role: "CEO & Founder"
  //   }
  // },
  // {
  //   id: "retail-distribution",
  //   slug: "retail-distribution",
  //   title: "Retail Distribution System Build",
  //   client: "FMCG Distribution Company",
  //   category: "Web Apps",
  //   year: 2023,
  //   summary: "End-to-end distribution management system connecting suppliers, distributors, and retailers",
  //   description:
  //     "We built a comprehensive distribution management system for a major FMCG company. The system manages the entire supply chain from supplier to retailer, providing real-time visibility and intelligent routing.",
  //   problem:
  //     "The company was managing distribution operations using spreadsheets and legacy systems. This resulted in inefficient routes, poor inventory visibility, delayed deliveries, and lost sales. They needed a modern, integrated solution.",
  //   solution:
  //     "We designed and built a web-based platform that connects all stakeholders in the distribution chain. Features include real-time inventory tracking, route optimization algorithms, automated ordering, and comprehensive analytics dashboards. The system works offline for field sales staff.",
  //   impact: [
  //     { label: "Delivery Efficiency", value: "+45%" },
  //     { label: "Stock Accuracy", value: "99.5%" },
  //     { label: "Order Processing", value: "3x Faster" },
  //     { label: "Cost Reduction", value: "-30%" }
  //   ],
  //   timeline: "8 months",
  //   techStack: [
  //     "Next.js",
  //     "TypeScript",
  //     "Python",
  //     "PostgreSQL",
  //     "Google Maps API",
  //     "AWS",
  //     "Redis"
  //   ],
  //   services: [
  //     "Web Experiences & Platforms",
  //     "Engineering & Development",
  //     "AI & Automation Integration"
  //   ],
  //   coverImage: "/retail-distribution.png",
  //   testimonial: {
  //     quote: "This system has transformed our operations. We have complete visibility into our distribution network, and efficiency has improved dramatically. Maple's team delivered a solution that exceeded our expectations.",
  //     author: "Mohammad Hassan",
  //     role: "Operations Director"
  //   }
  // }
]

export const categories = ["All", "Website", "Web Apps", "Mobile Apps", "Others"] as const
export type Category = typeof categories[number]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug)
}

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.id === id)
}

export function getCaseStudiesByCategory(category: Category): CaseStudy[] {
  if (category === "All") return caseStudies
  return caseStudies.filter((cs) => cs.category === category)
}