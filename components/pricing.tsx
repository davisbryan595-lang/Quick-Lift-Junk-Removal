"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Check } from "lucide-react"

const pricingTiers = [
  {
    name: "Standard Removal",
    description: "Perfect for small to medium cleanouts",
    icon: "Truck",
    features: [
      "Up to 1/2 truck load",
      "Same-day service available",
      "Professional team",
      "Eco-friendly disposal",
      "Free estimate",
    ],
    cta: "Get Quote",
  },
  {
    name: "Premium Service",
    description: "Ideal for larger projects",
    icon: "Star",
    features: [
      "Up to full truck load",
      "Priority scheduling",
      "Dedicated team",
      "Recycling coordination",
      "Photo documentation",
      "Flexible timing",
    ],
    cta: "Get Quote",
    featured: true,
  },
  {
    name: "Commercial/Estate",
    description: "Large-scale removals",
    icon: "Building",
    features: [
      "Multiple truck loads",
      "Multi-day projects",
      "Custom solutions",
      "Bulk disposal handling",
      "Project management",
      "Insurance coordination",
    ],
    cta: "Contact Us",
  },
]

export default function Pricing() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section ref={ref} id="pricing" className="relative py-20 md:py-32 bg-primary-black">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="w-96 h-96 mx-auto bg-gradient-to-br from-primary-yellow via-accent-blue to-primary-yellow rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Transparent{" "}
            <span className="bg-gradient-to-r from-primary-yellow via-accent-gold to-primary-yellow bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            No hidden fees. No surprises. Just honest, competitive pricing for your junk removal needs.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5, ease: "easeOut" }}
              whileHover={
                tier.featured ? { y: -20, transition: { duration: 0.2 } } : { y: -10, transition: { duration: 0.2 } }
              }
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                tier.featured ? "md:scale-105 ring-2 ring-primary-yellow" : ""
              }`}
            >
              {/* Card background */}
              <div
                className={`p-8 h-full ${
                  tier.featured
                    ? "bg-gradient-to-br from-primary-yellow/20 to-accent-blue/10 border-2 border-primary-yellow/50"
                    : "bg-gradient-to-br from-primary-black to-[#1a1a1a] border border-primary-yellow/20"
                }`}
              >
                {/* Featured badge */}
                {tier.featured && (
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.3 }}
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-yellow to-accent-gold text-primary-black text-xs font-bold rounded-full"
                  >
                    Most Popular
                  </motion.div>
                )}

                {/* Icon & Title */}
                <div className="mb-6">
                  <div className="text-4xl mb-3">{tier.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-foreground/60 text-sm">{tier.description}</p>
                </div>

                {/* Price note */}
                <div className="mb-6 p-4 rounded-lg bg-primary-yellow/10 border border-primary-yellow/20">
                  <p className="text-primary-yellow font-bold">Custom Pricing</p>
                  <p className="text-foreground/70 text-sm">Call for free estimate</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.1 * i + 0.03 * j, duration: 0.3 }}
                      className="flex items-start gap-3 text-sm"
                    >
                      <span className="w-5 h-5 rounded-full bg-gradient-to-br from-primary-yellow to-accent-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-black font-bold text-xs">Checkmark</span>
                      </span>
                      <span className="text-foreground/80">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-full font-bold text-center transition-all duration-300 block ${
                    tier.featured
                      ? "bg-gradient-to-r from-primary-yellow to-accent-gold text-primary-black hover:shadow-2xl hover:shadow-primary-yellow/50"
                      : "border-2 border-primary-yellow text-primary-yellow hover:bg-primary-yellow/10"
                  }`}
                >
                  {tier.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 rounded-2xl bg-primary-yellow/5 border border-primary-yellow/20 text-center"
        >
          <p className="text-foreground/70 mb-4">
            Our pricing depends on the volume and type of items being removed. We provide free estimates to ensure you
            get the best rate.
          </p>
          <motion.a
            href="tel:(240)500-0946"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 text-primary-yellow font-bold hover:text-accent-gold transition-colors"
          >
            Call (240) 500-0946 for a free estimate
            <span>Right Arrow</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
