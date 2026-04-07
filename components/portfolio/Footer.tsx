import { portfolioData } from "@/lib/portfolio-data"

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-primary">{portfolioData.personal.name}</span> — Built with
          Next.js & Tailwind CSS
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          {portfolioData.personal.location}
        </p>
      </div>
    </footer>
  )
}
