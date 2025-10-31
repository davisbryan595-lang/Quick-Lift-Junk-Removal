"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Hagerstown, MD",
    rating: 5,
    text: "Quick Lift was incredibly professional and efficient. They removed all my basement junk in less than 2 hours. Highly recommend!",
    initials: "SJ",
  },
  {
    name: "Mike Chen",
    location: "Frederick, MD",
    rating: 5,
    text: "Best junk removal service I've used. The team was courteous, quick, and the pricing was transparent. No hidden fees!",
    initials: "MC",
  },
  {
    name: "Jennifer Davis",
    location: "Martinsburg, WV",
    rating: 5,
    text: "They handled our renovation cleanup perfectly. Great communication and fair pricing. Will definitely use them again.",
    initials: "JD",
  },
  {
    name: "Robert Martinez",
    location: "Chambersburg, PA",
    rating: 5,
    text: "Efficient, professional, and eco-conscious. They even recycled items we thought would go to the landfill. Exceptional service!",
    initials: "RM",
  },
]

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoPlay])

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-white/40">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(253, 216, 53, 0.05) 50px, rgba(253, 216, 53, 0.05) 100px)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-foreground">What Our Clients</span>{" "}
            <span className="bg-gradient-to-r from-primary-yellow to-accent-gold bg-clip-text text-transparent">
              Say
            </span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary-yellow/10 to-accent-blue/10 border border-primary-yellow/30 hover:border-primary-yellow/50 transition-colors duration-300"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                <span key={i} className="text-primary-yellow text-xl">
                  ★
                </span>
              ))}
            </div>

            {/* Quote */}
            <p className="text-2xl text-foreground/85 mb-8 italic leading-relaxed font-medium">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-yellow to-accent-gold flex items-center justify-center">
                <span className="text-primary-black font-bold">{testimonials[currentIndex].initials}</span>
              </div>
              <div>
                <p className="font-bold text-white">{testimonials[currentIndex].name}</p>
                <p className="text-foreground/60 text-sm">{testimonials[currentIndex].location}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full border border-primary-yellow/30 hover:border-primary-yellow/80 hover:bg-primary-yellow/10 transition-all duration-300 text-primary-yellow"
            >
              ←
            </motion.button>

            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    setCurrentIndex(i)
                    setAutoPlay(false)
                  }}
                  animate={i === currentIndex ? { scale: 1.2, backgroundColor: "#FDD835" } : { scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    i === currentIndex ? "bg-primary-yellow" : "bg-primary-yellow/30 hover:bg-primary-yellow/50"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full border border-primary-yellow/30 hover:border-primary-yellow/80 hover:bg-primary-yellow/10 transition-all duration-300 text-primary-yellow"
            >
              →
            </motion.button>
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-3 gap-6 text-center"
        >
          {[
            { label: "98% Satisfaction", value: "Rating" },
            { label: "500+ Reviews", value: "Verified" },
            { label: "24/7 Support", value: "Available" },
          ].map((badge, i) => (
            <div key={i} className="p-4 rounded-lg bg-primary-yellow/5 border border-primary-yellow/20">
              <p className="text-primary-yellow font-bold">{badge.label}</p>
              <p className="text-foreground/60 text-sm">{badge.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
