export interface Insight {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
  featured?: boolean;
  image?: string;
}

export const insights: Insight[] = [
  {
    id: "1",
    title: "The Future of Human-AI Collaboration",
    excerpt:
      "Exploring how artificial intelligence is reshaping the way we work, think, and create. From augmented decision-making to creative partnerships, the boundaries between human and machine intelligence continue to blur.",
    category: "AI & Technology",
    tags: ["AI", "Innovation", "Future", "Technology"],
    publishedAt: "2024-01-15",
    readTime: 8,
    featured: true,
  },
  {
    id: "2",
    title: "Designing for Trust in Digital Products",
    excerpt:
      "Trust is the foundation of digital relationships. Learn how thoughtful design choices can build credibility and foster lasting connections with your users.",
    category: "Design & UX",
    tags: ["UX Design", "Trust", "Product Design"],
    publishedAt: "2024-01-12",
    readTime: 6,
    featured: true,
  },
  {
    id: "3",
    title: "Building Resilient Engineering Teams",
    excerpt:
      "How to cultivate engineering teams that adapt, learn, and thrive in the face of technical challenges and changing market conditions.",
    category: "Engineering",
    tags: ["Engineering", "Team", "Culture"],
    publishedAt: "2024-01-10",
    readTime: 7,
  },
  {
    id: "4",
    title: "Strategic Thinking in Product Development",
    excerpt:
      "The art of balancing vision with execution. How strategic frameworks can guide product decisions without stifling innovation.",
    category: "Strategy",
    tags: ["Strategy", "Product", "Innovation"],
    publishedAt: "2024-01-08",
    readTime: 9,
  },
  {
    id: "5",
    title: "Scaling UX Design Systems",
    excerpt:
      "Lessons from building design systems that grow with your organization while maintaining consistency and enabling creativity.",
    category: "Design & UX",
    tags: ["UX Design", "Architecture", "Scaling"],
    publishedAt: "2024-01-05",
    readTime: 5,
  },
  {
    id: "6",
    title: "Performance Engineering at Scale",
    excerpt:
      "Technical strategies for maintaining performance as your application grows. From code optimization to infrastructure decisions.",
    category: "Engineering",
    tags: ["Engineering", "Performance", "Architecture"],
    publishedAt: "2024-01-03",
    readTime: 8,
  },
  {
    id: "7",
    title: "AI Ethics in Practice",
    excerpt:
      "Moving beyond theory to implement ethical AI practices in real-world applications. A framework for responsible development.",
    category: "AI & Technology",
    tags: ["AI", "Ethics", "Technology"],
    publishedAt: "2024-01-01",
    readTime: 10,
  },
  {
    id: "8",
    title: "The Evolution of Digital Bangladesh",
    excerpt:
      "How Bangladesh's digital transformation journey offers insights for emerging markets and technology-driven development.",
    category: "Strategy",
    tags: ["Bangladesh", "Strategy", "Innovation"],
    publishedAt: "2023-12-28",
    readTime: 7,
  },
  {
    id: "9",
    title: "Micro-frontend Architecture",
    excerpt:
      "Understanding the benefits and challenges of micro-frontend architecture for large-scale web applications.",
    category: "Engineering",
    tags: ["Engineering", "Architecture", "Scaling"],
    publishedAt: "2023-12-25",
    readTime: 6,
  },
];

export function getFeaturedInsights(): Insight[] {
  return insights.filter((insight) => insight.featured);
}

export function getRecentInsights(): Insight[] {
  return insights
    .filter((insight) => !insight.featured)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export function getInsightsByCategory(category: string): Insight[] {
  if (category === "All") return insights;
  return insights.filter((insight) => insight.category === category);
}

export function getAllCategories(): string[] {
  return ["All", "AI & Technology", "Design & UX", "Engineering", "Strategy"];
}
