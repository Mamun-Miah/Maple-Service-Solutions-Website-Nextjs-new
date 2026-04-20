"use client"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"
import Image from "next/image"

interface CaseStudyCardProps {
  id: string
  title: string
  category: string
  description: string
  metrics: Array<{ label: string; value: string }>
  coverImage: string
  onClick?: () => void
  className?: string
}

export function CaseStudyCard({
  title,
  category,
  description,
  metrics,
  coverImage,
  onClick,
  className,
}: CaseStudyCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "card-hover group relative bg-card border rounded-2xl overflow-hidden cursor-pointer",
        className
      )}
    >
      {/* Cover Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-4">
          <Badge className="bg-white/90 text-foreground hover:bg-white/90 backdrop-blur-sm text-xs">
            {category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Impact Metrics */}
        <div className="flex gap-3">
          {metrics.slice(0, 2).map((metric, index) => (
            <div key={index} className="flex items-center gap-1.5 text-xs">
              <TrendingUp className="h-3.5 w-3.5 text-primary" />
              <div>
                <span className="font-semibold">{metric.value}</span>
                <span className="text-muted-foreground ml-1 hidden sm:inline">{metric.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
