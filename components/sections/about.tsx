"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import CountUp from "react-countup"

export function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const stats = [
    { number: 500, label: "Happy Clients", suffix: "+" },
    { number: 98, label: "Same-Day Service", suffix: "%" },
    { number: 10, label: "Years Experience", suffix: "+" },
    { number: 100, label: "Eco-Friendly Rate", suffix: "%" },
  ]

  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-black mb-6 text-foreground">Who We Are</h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              Quick Lift Junk Removal is your trusted partner for professional, reliable junk removal services across
              Western Maryland, West Virginia, and Pennsylvania. With over 10 years of experience, we've helped
              thousands of satisfied customers reclaim their spaces.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Licensed and fully insured for your protection",
                "98% same-day or next-day service available",
                "Eco-friendly disposal practices",
                "Transparent, upfront pricing",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <motion.div
                    className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg className="w-4 h-4 text-background" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                  <span className="text-foreground/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border border-primary/20 hover:border-primary/50 transition-all group"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 205, 0, 0.2)" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: i * 0.15 }}
              >
                <motion.div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
                  {inView && <CountUp end={stat.number} duration={2} suffix={stat.suffix} />}
                </motion.div>
                <p className="text-foreground/70 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
