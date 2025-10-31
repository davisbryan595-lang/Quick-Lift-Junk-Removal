"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
  ]

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-primary/20" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FullLogo%2B%285%29.png-1Hk6AD4hfFIQSSljhIL8uvTgfXljPy.webp"
              alt="Quick Lift"
              width={120}
              height={40}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="tel:(240)500-0946"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-background font-bold hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            Call Now
          </motion.a>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 z-30 bg-background/95 backdrop-blur-md md:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ marginTop: "64px" }}
      >
        <div className="flex flex-col gap-4 p-6">
          {navItems.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-xl font-semibold text-foreground"
              initial={{ x: -20, opacity: 0 }}
              animate={menuOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="tel:(240)500-0946"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-background font-bold text-center"
            initial={{ x: -20, opacity: 0 }}
            animate={menuOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            Call Now
          </motion.a>
        </div>
      </motion.div>
    </>
  )
}
