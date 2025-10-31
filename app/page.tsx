"use client"

import { Preloader } from "@/components/preloader"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ServicesSection } from "@/components/sections/services"
import { GallerySection } from "@/components/sections/gallery"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"
import { useEffect, useState } from "react"

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowPreloader(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (showPreloader) {
    return <Preloader />
  }

  return (
    <main className="bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
