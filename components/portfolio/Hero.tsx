"use client"

import { useEffect, useRef } from "react"
import { Github, Linkedin, Mail, Phone, MapPin, ArrowDown } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

export function Hero() {
  const { personal } = portfolioData
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.add("fade-in")
    el.style.animationDelay = "0.1s"
  }, [])

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.22 0.01 240 / 0.3) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.22 0.01 240 / 0.3) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none blur-3xl opacity-10"
        aria-hidden="true"
        style={{ background: "var(--glow)" }}
      />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 font-mono text-xs text-primary border border-primary/30 px-3 py-1 rounded-full mb-8 bg-primary/5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4 text-balance">
          {personal.name}
        </h1>

        {/* Title */}
        <p className="font-mono text-primary text-lg md:text-xl mb-6 tracking-wide">
          {">"} {personal.title}
        </p>

        {/* Summary */}
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-2xl mx-auto mb-10 text-pretty">
          {personal.summary}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs text-muted-foreground mb-10">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            {personal.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-primary" />
            {personal.phone}
          </span>
          <span className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-primary" />
            {personal.email}
          </span>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary border border-border hover:border-primary/40 px-4 py-2 rounded transition-all duration-200 hover:bg-primary/5"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary border border-border hover:border-primary/40 px-4 py-2 rounded transition-all duration-200 hover:bg-primary/5"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="flex items-center gap-2 font-mono text-sm text-background bg-primary hover:bg-primary/80 px-4 py-2 rounded transition-all duration-200"
          >
            <Mail className="w-4 h-4" />
            Email me
          </a>
        </div>

        {/* Scroll hint */}
        <div className="flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  )
}
