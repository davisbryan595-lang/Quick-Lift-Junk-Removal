"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { Check } from "lucide-react"

const servicesData = [
  {
    id: "residential",
    title: "Residential Junk Removal",
    icon: "Home",
    description: "Clear out your home of unwanted items quickly and affordably",
    features: [
      "Basement & attic cleanouts",
      "Furniture removal",
      "Renovation debris",
      "Appliance removal",
      "Yard waste & landscaping debris",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Hauling",
    icon: "Building",
    description: "Professional junk removal for businesses and properties",
    features: [
      "Office furniture removal",
      "Construction debris",
      "Store fixtures",
      "Warehouse cleanouts",
      "Estate liquidation",
    ],
  },
  {
    id: "hauling",
    title: "Premium Hauling",
    icon: "Truck",
    description: "Heavy-duty hauling for any project, large or small",
    features: [
      "Bulk item removal",
      "Demolition cleanup",
      "Metal & scrap removal",
      "White goods disposal",
      "Same-day availability",
    ],
  },
]

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const [expandedService, setExpandedService] = useState("residential")

  return (
    <section ref={ref} id="services" className="relative py-20 md:py-32 bg-primary-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-primary-yellow via-accent-gold to-primary-yellow bg-clip-text text-transparent">
                Services
              </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive junk removal and hauling solutions for residential, commercial, and specialty projects
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              onHoverStart={() => setExpandedService(service.id)}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group cursor-pointer"
            >
              <div className="relative h-full rounded-2xl p-8 bg-gradient-to-r from-primary-yellow/5 to-accent-gold/5 border border-primary-yellow/20 hover:border-primary-yellow/50 transition-all duration-300 overflow-hidden">
                {/* Animated background glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-primary-yellow/20 to-accent-blue/20 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-foreground/70 text-sm mb-6">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={expandedService === service.id ? { opacity: 1, x: 0 } : { opacity: 0.5, x: -10 }}
                        transition={{ delay: 0.03 * j, duration: 0.2 }}
                        className="text-sm text-primary-yellow flex items-center gap-2"
                      >
                        <Check className="w-4 h-4 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-yellow to-accent-gold text-primary-black font-bold text-sm hover:shadow-lg hover:shadow-primary-yellow/50 transition-all duration-300 group-hover:scale-105"
                  >
                    Get Quote
                    <span>Right Arrow</span>
                  </motion.a>
                </div>

                {/* Hover border glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border border-primary-yellow/0 group-hover:border-primary-yellow/50"
                  animate={{
                    boxShadow: [
                      "inset 0 0 0px rgba(253, 216, 53, 0)",
                      "inset 0 0 20px rgba(253, 216, 53, 0.2)",
                      "inset 0 0 0px rgba(253, 216, 53, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary-yellow/10 to-accent-blue/10 border border-primary-yellow/20"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Service Areas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {[
              "Hagerstown",
              "Frederick",
              "Martinsburg",
              "Chambersburg",
              "Waynesboro",
              "Greencastle",
              "Boonsboro",
              "Shepherdstown",
              "Thurmont",
              "Williamsport",
              "Clear Spring",
              "Smithsburg",
              "Halfway",
              "Maugansville",
              "Middletown",
              "Falling Waters",
            ].map((city, i) => (
              <motion.div
                key={i}
                className="text-foreground/70 hover:text-primary-yellow transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary-yellow" />
                {city}
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-foreground/50 mt-6">And surrounding areas in MD, WV, and PA</p>
        </motion.div>
      </div>
    </section>
  )
}
