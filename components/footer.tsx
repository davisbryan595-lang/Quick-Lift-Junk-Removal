"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-foreground text-background overflow-hidden pt-20 pb-8">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: "linear-gradient(45deg, var(--color-primary), var(--color-accent), var(--color-primary))",
          backgroundSize: "200% 200%",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FullLogo%2B%285%29.png-1Hk6AD4hfFIQSSljhIL8uvTgfXljPy.webp"
              alt="Quick Lift"
              width={100}
              height={40}
              className="mb-4"
            />
            <p className="text-background/80 text-sm">
              Professional junk removal and hauling services across Western Maryland, WV, and PA.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["About", "Services", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {["Residential", "Commercial", "Construction"].map((service) => (
                <li key={service}>
                  <a href="#services" className="hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold mb-4">Contact</h4>
            <a href="tel:(240)500-0946" className="block text-sm mb-2 hover:text-primary transition-colors">
              (240) 500-0946
            </a>
            <a
              href="mailto:Quickliftjunkremoval@gmail.com"
              className="block text-sm hover:text-primary transition-colors"
            >
              Quickliftjunkremoval@gmail.com
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-background/70 mb-4 sm:mb-0">
            © 2025 Quick Lift Junk Removal. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-gradient-to-r from-primary to-accent text-background hover:shadow-lg hover:shadow-primary/50 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7-7m0 0l-7 7m7-7v12" />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
