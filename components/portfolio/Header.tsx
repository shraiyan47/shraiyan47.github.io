"use client"

import { useState, useEffect } from "react"
import { portfolioData } from "@/lib/portfolio-data"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ["about", "experience", "projects", "skills", "contact"]
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#about"
          className="font-mono text-sm font-semibold tracking-widest text-primary hover:opacity-80 transition-opacity"
        >
          <span className="text-muted-foreground">~/</span>shahadat
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "")
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-mono text-xs tracking-widest uppercase transition-colors duration-200 ${
                  active === id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* CTA */}
        <a
          href={`mailto:${portfolioData.personal.email}`}
          className="hidden md:inline-flex items-center gap-2 font-mono text-xs text-primary border border-primary/40 px-4 py-2 rounded hover:bg-primary/10 transition-colors duration-200"
        >
          Hire me
        </a>
      </div>
    </header>
  )
}
