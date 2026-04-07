import { Header } from "@/components/portfolio/Header"
import { Hero } from "@/components/portfolio/Hero"
import { Experience } from "@/components/portfolio/Experience"
import { Projects } from "@/components/portfolio/Projects"
import { Skills } from "@/components/portfolio/Skills"
import { Contact } from "@/components/portfolio/Contact"
import { Footer } from "@/components/portfolio/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
