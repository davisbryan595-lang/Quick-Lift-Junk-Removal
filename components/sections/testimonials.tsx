"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials = [
    {
      name: "John Smith",
      role: "Homeowner",
      content: "Quick Lift made our basement cleanup so easy. Professional, fast, and affordable!",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      content: "Exceptional service for our office cleanout. They handled everything with care.",
      rating: 5,
    },
    {
      name: "Mike Davis",
      role: "Property Manager",
      content: "Best junk removal service in the area. Always on time and thorough.",
      rating: 5,
    },
    {
      name: "Emily Wilson",
      role: "Homeowner",
      content: "Fast, friendly, and fair pricing. Will definitely use them again!",
      rating: 5,
    },
  ]

  useEffect(() => {
    if (!autoplay) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  return (
    <section id="testimonials" className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-5xl font-black mb-4 text-foreground">What Our Clients Say</h2>
          <p className="text-xl text-foreground/70">Thousands of satisfied customers across our service areas</p>
        </motion.div>

        {/* Carousel */}
        <div className="relative" onMouseEnter={() => setAutoplay(false)} onMouseLeave={() => setAutoplay(true)}>
          <motion.div
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-2 border-primary/30 min-h-80 flex flex-col justify-between"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            key={currentIndex}
            transition={{ duration: 0.5 }}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <motion.svg
                  key={i}
                  className="w-6 h-6 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </div>

            <p className="text-xl text-foreground mb-8 leading-relaxed italic">
              "{testimonials[currentIndex].content}"
            </p>

            <div>
              <p className="text-lg font-bold text-foreground">{testimonials[currentIndex].name}</p>
              <p className="text-foreground/70">{testimonials[currentIndex].role}</p>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentIndex ? "bg-primary w-8" : "bg-primary/30 hover:bg-primary/60"
                }`}
                onClick={() => {
                  setCurrentIndex(i)
                  setAutoplay(false)
                }}
                whileHover={{ scale: 1.3 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
