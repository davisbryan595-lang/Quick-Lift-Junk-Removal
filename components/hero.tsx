"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Check } from "lucide-react"

/* ---- reusable gold text ---- */
const Gold = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`text-primary-yellow ${className}`}>{children}</span>
)

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden pt-20">
      {/* Background: Local hero.png */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Quick Lift Junk Removal – Fast, Clean, Professional"
          fill
          className="object-cover"
          priority
          quality={95}
          sizes="100vw"
        />
        {/* Light Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/50" />
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(135deg,
                rgba(253, 216, 53, 0.1) 0%,
                rgba(101, 143, 226, 0.1) 50%,
                rgba(253, 216, 53, 0.1) 100%)`,
              backgroundSize: "200% 200%",
            }}
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            {/* Badge */}
            <div className="inline-block mb-4">
              <span className="px-4 py-1.5 rounded-full bg-primary-yellow/10 border border-primary-yellow/30 text-primary-yellow text-xs font-semibold tracking-wider">
                FAST • AFFORDABLE • PROFESSIONAL
              </span>
            </div>

            {/* Headline – **gold text only** */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
              <span className="text-foreground">Fast & Affordable</span>
              <br />
              <Gold className="text-5xl md:text-7xl lg:text-8xl">Junk Removal</Gold>
            </h1>

            {/* Animated Underline */}
            <motion.div
              className="h-1 bg-gradient-to-r from-transparent via-primary-yellow to-transparent mx-auto mt-6"
              style={{ width: "200px" }}
              animate={{ width: ["100px", "250px", "100px"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-foreground mb-8 max-w-2xl mx-auto font-medium"
            >
              Serving Western Maryland, West Virginia & Pennsylvania with premium junk removal and hauling services
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10"
            >
              {[
                { label: "Licensed & Insured" },
                { label: "Eco-Friendly" },
                { label: "Same-Day Service" },
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="px-4 py-2 rounded-lg bg-primary-yellow/10 border border-primary-yellow/20 text-sm font-medium text-primary-yellow flex items-center gap-2 hover:bg-primary-yellow/20 transition-colors duration-300"
                >
                  {i === 0 && <Check className="w-4 h-4" />}
                  {i === 1 && <span className="text-lg">Leaf</span>}
                  {i === 2 && <span className="text-lg">Lightning</span>}
                  {badge.label}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <motion.a
                href="tel:(240)500-0946"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-yellow to-accent-gold text-primary-black font-bold text-lg hover:shadow-2xl hover:shadow-primary-yellow/50 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Call Now: (240) 500-0946
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 rounded-full border-2 border-primary-yellow text-primary-yellow font-bold text-lg hover:bg-primary-yellow/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Get Free Quote
              </motion.a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center mt-10"
            >
              <div className="w-6 h-10 border-2 border-primary-yellow/30 rounded-full flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-2 bg-primary-yellow rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
