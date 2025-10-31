"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-primary-black/95 backdrop-blur-md border-b border-primary-yellow/20 shadow-lg shadow-primary-yellow/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group" aria-label="Home">
            <motion.div
              whileHover={{ scale: 1.06 }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary-yellow to-accent-gold p-1 flex items-center justify-center transition-all duration-300"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F37fe508629794307b44d873859aad7cf%2F17ff38e3ca444c7a966105fa5172e797?format=webp&width=800"
                alt="Quick Lift logo"
                className="w-full h-full object-contain rounded-full drop-shadow-[0_12px_32px_rgba(253,216,53,0.7)]"
              />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.3 }}
                className="nav-link text-foreground/70 hover:text-primary-yellow transition-colors relative group text-sm font-medium"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-yellow to-transparent group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="tel:(240)500-0946"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary-yellow to-accent-gold text-primary-black font-bold text-sm hover:shadow-lg hover:shadow-primary-yellow/50 transition-all duration-300"
          >
            Call Now
          </motion.a>

          {/* Mobile Menu Button */}
          <button className="md:hidden w-10 h-10 flex items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
            <div className="space-y-1.5">
              <motion.div
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-primary-yellow"
              />
              <motion.div animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-5 h-0.5 bg-primary-yellow" />
              <motion.div
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-primary-yellow"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden border-t border-primary-yellow/20 bg-primary-black/95 backdrop-blur-md"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link block px-4 py-2 text-foreground/70 hover:text-primary-yellow transition-colors text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:(240)500-0946"
                className="block px-4 py-2 mt-4 rounded-full bg-gradient-to-r from-primary-yellow to-accent-gold text-primary-black font-bold text-center text-sm"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
