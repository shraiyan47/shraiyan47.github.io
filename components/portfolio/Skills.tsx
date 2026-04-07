"use client"

import { useEffect, useRef } from "react"
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

const skillCategories = [
  { label: "Frontend", items: portfolioData.skills.frontend },
  { label: "Backend", items: portfolioData.skills.backend },
  { label: "Databases", items: portfolioData.skills.databases },
  { label: "State Management", items: portfolioData.skills.state_management },
  { label: "Architecture & Tools", items: portfolioData.skills.architecture_and_tools },
  { label: "Other", items: portfolioData.skills.other },
]

function SkillTag({ label }: { label: string }) {
  return (
    <span className="font-mono text-xs px-3 py-1.5 rounded border border-border bg-secondary/50 text-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-200 cursor-default">
      {label}
    </span>
  )
}

function SkillCard({ category, delay }: { category: (typeof skillCategories)[0]; delay: number }) {
  const ref = useScrollFade(delay)
  return (
    <div
      ref={ref}
      className="border border-border rounded-xl p-6 bg-card card-glow opacity-0"
    >
      <p className="font-mono text-xs tracking-widest uppercase mb-4 text-primary">
        {category.label}
      </p>
      <div className="flex flex-wrap gap-2">
        {category.items.map((item) => (
          <SkillTag key={item} label={item} />
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  const titleRef = useScrollFade(0)

  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6">
      <div ref={titleRef} className="mb-16 opacity-0">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-2">
          // 04. skills
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
          Tech Stack
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <SkillCard key={cat.label} category={cat} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}
