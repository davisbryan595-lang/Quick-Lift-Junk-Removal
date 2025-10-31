"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background video/gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      </div>

      {/* Animated mesh background */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 600">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary)" />
            <stop offset="100%" stopColor="var(--color-accent)" />
          </linearGradient>
        </defs>
        <motion.circle
          cx="200"
          cy="150"
          r="100"
          fill="url(#grad1)"
          opacity="0.1"
          animate={{
            cx: [200, 250, 200],
            cy: [150, 200, 150],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
        <motion.circle
          cx="1000"
          cy="450"
          r="150"
          fill="url(#grad1)"
          opacity="0.1"
          animate={{
            cx: [1000, 950, 1000],
            cy: [450, 400, 450],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-6xl md:text-7xl font-black mb-6 text-foreground leading-tight">
            Fast & Affordable{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
              Junk Removal
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Get Your Space Back in Western Maryland, WV & PA
        </motion.p>

        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {["Licensed & Insured", "98% Same-Day Service", "Eco-Friendly"].map((badge, i) => (
            <motion.div
              key={badge}
              className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-foreground text-sm font-semibold"
              whileHover={{ scale: 1.05, backgroundColor: "var(--color-primary)", color: "var(--color-background)" }}
              animate={{ y: [0, -5, 0] }}
              transition={{ delay: i * 0.2, duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              {badge}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="tel:(240)500-0946"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-background font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all"
          >
            Call Now: (240) 500-0946
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg border-2 border-primary bg-transparent text-primary font-bold text-lg hover:bg-primary/10 transition-all"
          >
            Get Free Quote
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
