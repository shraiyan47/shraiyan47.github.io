"use client"

import { useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

function useScrollFade(delay = 0) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationDelay = `${delay}ms`
          el.classList.add("fade-in")
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])
  return ref
}

const sizeMap: Record<string, string> = {
  large: "md:col-span-2 md:row-span-2",
  medium: "md:col-span-1 md:row-span-2",
  small: "md:col-span-1 md:row-span-1",
}

type Project = (typeof portfolioData.projects)[0]

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const ref = useScrollFade(delay)
  const sizeClass = sizeMap[project.size] ?? ""

  return (
    <div
      ref={ref}
      className={`group relative border border-border rounded-xl bg-card p-6 flex flex-col justify-between overflow-hidden opacity-90 card-glow cursor-pointer transition-all duration-300 ${sizeClass}`}
    >
      {/* Corner glow on hover */}
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-10 group-hover:opacity-22 transition-opacity duration-500 pointer-events-none"
        aria-hidden="true"
        style={{ background: "var(--glow)" }}
      />

      <div>
        {/* Project name */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3
            className={`font-bold text-foreground group-hover:text-primary transition-colors duration-200 text-balance ${
              project.size === "large" ? "text-xl md:text-2xl" : "text-base"
            }`}
          >
            {project.name}
          </h3>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-200 flex-shrink-0 mt-0.5" />
        </div>

        {/* Description */}
        <p
          className={`text-muted-foreground group-hover:font-bold leading-relaxed ${
            project.size === "large" ? "text-sm md:text-base" : "text-sm"
          }`}
        >
          {project.description}
        </p>
      </div>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2 mt-6">
        {project.tech.map((t) => (
          <Badge
            key={t}
            variant="secondary"
            className="font-mono text-xs bg-secondary/80 text-primary border border-primary/20 hover:bg-primary/10 transition-colors"
          >
            {t}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export function Projects() {
  const titleRef = useScrollFade(0)

  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div ref={titleRef} className="mb-16 opacity-100">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-2">
            // 03. projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Things I&apos;ve Built
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {portfolioData.projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  )
}
