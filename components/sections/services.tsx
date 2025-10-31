"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useInView } from "react-intersection-observer"

export function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const services = [
    {
      title: "Residential Junk Removal",
      description: "Remove unwanted items from your home",
      features: ["Full home cleanouts", "Basement & attic clearing", "Furniture removal", "E-waste disposal"],
      icon: "🏠",
    },
    {
      title: "Commercial Junk Removal",
      description: "Professional removal for businesses",
      features: ["Office cleanouts", "Debris removal", "Equipment hauling", "Construction waste"],
      icon: "🏢",
    },
    {
      title: "Construction Hauling",
      description: "Specialized construction waste removal",
      features: ["Drywall removal", "Metal & scrap hauling", "Demolition debris", "Site cleanup"],
      icon: "🔨",
    },
  ]

  return (
    <section id="services" className="relative py-20 px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        >
          <h2 className="text-5xl font-black mb-4 text-foreground">Our Services</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Comprehensive junk removal solutions for every need
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: i * 0.2 }}
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
            >
              <motion.div
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  expandedIndex === i
                    ? "border-primary bg-gradient-to-br from-primary/20 via-accent/10 to-primary/10"
                    : "border-primary/30 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 hover:border-primary/50"
                }`}
                whileHover={{ scale: 1.02 }}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r from-primary to-accent -z-10"
                  animate={{
                    opacity: expandedIndex === i ? 0.3 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                <div className="text-5xl mb-4">{service.icon}</div>

                <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-foreground/70 mb-6">{service.description}</p>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={expandedIndex === i ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                  <motion.button
                    className="mt-6 w-full py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-background font-bold hover:shadow-lg hover:shadow-primary/50 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Quote
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
