"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const stats = [
    { number: 500, label: "Happy Clients", suffix: "+" },
    { number: 98, label: "Same-Day Service", suffix: "%" },
    { number: 10, label: "Years Experience", suffix: "+" },
    { number: 100, label: "% Eco-Friendly", suffix: "" },
  ]

  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-primary-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
          className="w-full h-full opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(253, 216, 53, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            backgroundPosition: "0% 0%",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Why{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-yellow to-accent-gold">
                Choose Us
              </span>
            </h2>

            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              With over a decade of experience, Quick Lift has become the trusted name in junk removal across Maryland,
              West Virginia, and Pennsylvania. We pride ourselves on fast service, transparent pricing, and
              environmentally responsible disposal.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Licensed & fully insured for your peace of mind",
                "Same-day service available in most areas",
                "Transparent pricing with no hidden fees",
                "Eco-friendly disposal and recycling practices",
                "Professional, courteous team members",
                "Free quotes and estimates",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-yellow to-accent-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-black font-bold text-sm">✓</span>
                  </div>
                  <p className="text-foreground/80">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-6 rounded-xl bg-gradient-to-br from-primary-yellow/10 to-accent-blue/10 border border-primary-yellow/20 hover:border-primary-yellow/50 transition-colors duration-300 group cursor-pointer"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="mb-3"
                >
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-yellow to-accent-gold">
                    {stat.number}
                    {stat.suffix}
                  </div>
                </motion.div>
                <p className="text-foreground/70 text-sm font-medium group-hover:text-primary-yellow transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
