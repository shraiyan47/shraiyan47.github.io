"use client"

import { useEffect, useRef, type RefObject } from "react"
import { Github, Linkedin, Mail, Phone, type LucideIcon } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

function useScrollFade(delay = 0): RefObject<HTMLElement | null> {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ;(el as HTMLElement).style.animationDelay = `${delay}ms`
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

const contactLinks: {
  label: string
  value: string
  href: string
  icon: LucideIcon
  external?: boolean
}[] = [
  {
    label: "Email",
    value: portfolioData.personal.email,
    href: `mailto:${portfolioData.personal.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: portfolioData.personal.phone,
    href: `tel:${portfolioData.personal.phone}`,
    icon: Phone,
  },
  {
    label: "GitHub",
    value: "github.com/shraiyan47",
    href: portfolioData.personal.github,
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shahadat-hossain47",
    href: portfolioData.personal.linkedin,
    icon: Linkedin,
    external: true,
  },
]

function ContactCard({
  link,
  delay,
}: {
  link: (typeof contactLinks)[0]
  delay: number
}) {
  const ref = useScrollFade(delay)
  const IconComponent = link.icon
  return (
    <a
      ref={ref as RefObject<HTMLAnchorElement>}
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      className="group border border-border rounded-xl p-5 bg-card card-glow opacity-90 flex flex-col gap-3 hover:border-primary/40 transition-all duration-200"
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
        <IconComponent className="w-5 h-5 text-primary" />
      </div>
      <div>
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
          {link.label}
        </p>
        <p className="text-sm text-foreground font-medium break-all">{link.value}</p>
      </div>
    </a>
  )
}

export function Contact() {
  const ref = useScrollFade(0)

  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref as RefObject<HTMLDivElement>} className="opacity-90 text-center mb-16">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-2">
            // 05. contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed text-pretty">
            I&apos;m currently open to new opportunities. Whether you have a project in mind or
            just want to say hi — my inbox is always open.
          </p>
        </div>

        {/* Contact grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactLinks.map((link, i) => (
            <ContactCard key={link.label} link={link} delay={i * 80} />
          ))}
        </div>

        {/* Big CTA */}
        <div className="text-center">
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="inline-flex items-center gap-3 font-mono text-sm text-primary-foreground bg-primary hover:bg-primary/80 px-8 py-4 rounded-lg transition-all duration-200 font-semibold"
            style={{ boxShadow: "0 0 32px color-mix(in oklch, var(--glow) 30%, transparent)" }}
          >
            <Mail className="w-4 h-4" />
            Say Hello
          </a>
        </div>
      </div>
    </section>
  )
}
