"use client"

import { useEffect, useRef } from "react"
import { Briefcase } from "lucide-react"
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
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])
  return ref
}

export function Experience() {
  const titleRef = useScrollFade(0);
  const experienceData = portfolioData.experience;
  const educationData = portfolioData.education;
  const certificationsData = portfolioData.certifications;
  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
      {/* Section header */}
      <div ref={titleRef} className="mb-16 opacity-100">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-2">
          // 02. experience
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
          Where I&apos;ve Worked
        </h2>
      </div>

      {/* Timeline */}
      <div>
        {/* {JSON.stringify(experienceData)} */}
        
        {experienceData.map((item, i) => (
           
          <ExperienceItem
            key={i}
            item={item}
            index={i}
            isLast={i === experienceData.length - 1}
          />
        ))}
        
      </div>

      {/* Education + Certs row */}
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        {/* Education */}
        <div className="border border-border rounded-lg p-6 bg-card card-glow">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">Education</p>
          {educationData.map((edu, i) => (
            <div key={i}>
              <h4 className="font-semibold text-foreground">{edu.degree}</h4>
              <p className="font-mono text-xs text-muted-foreground mt-1">
                {edu.institution} · {edu.year}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="border border-border rounded-lg p-6 bg-card card-glow">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
            Certifications
          </p>
          <ul className="space-y-2">
            {certificationsData.map((cert, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-0.5 font-mono">→</span>
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div> 
    </section>
  )
}



function ExperienceItem({
  item,
  index,
  isLast,
}: {
  item: (typeof portfolioData.experience)[0]
  index: number
  isLast: boolean
}) {
  const ref = useScrollFade(index * 100)


  return (
    <div ref={ref} className="relative flex gap-6 opacity-100"> Edu
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 rounded-full border-2 border-primary/40 bg-card flex items-center justify-center flex-shrink-0 z-10">
          <Briefcase className="w-3.5 h-3.5 text-primary" />
        </div>
        {!isLast && (
          <div className="w-px flex-1 mt-2 bg-gradient-to-b from-primary/30 to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="pb-10">
        <div className="flex flex-wrap items-baseline gap-2 mb-1">
          <h3 className="font-semibold text-foreground text-base">{item.role}</h3>
        </div>
        <div className="flex flex-wrap gap-3 mb-3">
          <span className="font-mono text-xs text-primary">{item.company}</span>
          <span className="font-mono text-xs text-muted-foreground">{item.dates}</span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>
  )
}
