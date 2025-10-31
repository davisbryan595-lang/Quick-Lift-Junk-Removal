"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import dynamic from "next/dynamic"

const BeforeAfterSlider = dynamic(() => import("./before-after-slider"), { ssr: false })

const galleryItems = [
  {
    id: 1,
    title: "Residential Cleanout",
    before: true,
    src: "/service3.jpg",
  },
  {
    id: 2,
    title: "Basement Removal",
    before: false,
    src: "/service1.jpg",
  },
  {
    id: 3,
    title: "Furniture Hauling",
    before: true,
    src: "/serr2.jpg",
  },
  {
    id: 4,
    title: "Construction Cleanup",
    before: false,
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 5,
    title: "Estate Liquidation",
    before: true,
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 6,
    title: "Commercial Space",
    before: false,
    src: "https://images.unsplash.com/photo-1547407219-79f8f6bca5b8?auto=format&fit=crop&w=1400&q=80",
  },
]

export default function Gallery() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <section ref={ref} id="gallery" className="relative py-20 md:py-32 bg-white/35 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
          className="w-full h-full bg-gradient-to-br from-primary-yellow/5 via-transparent to-accent-blue/5"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-foreground">Before</span>{" "}
            <span className="bg-gradient-to-r from-primary-yellow to-accent-gold bg-clip-text text-transparent">
              & After
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            See the transformation we bring to homes and businesses across the region
          </p>

          {/* Insert Before/After Slider */}
          <div className="max-w-4xl mx-auto mb-12">
            <BeforeAfterSlider />
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 1, y: 0 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * i, duration: 0.5 }}
              onClick={() => setSelectedId(item.id)}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 rounded-xl overflow-hidden border-2 border-primary-yellow/20 hover:border-primary-yellow/50 transition-all duration-300">
                {/* Background placeholder with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow/10 to-accent-blue/10" />

                {/* Image */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold">{item.title}</h3>
                  <p className="text-primary-yellow text-sm">
                    {item.before ? "Cluttered Space" : "Clean & Clear"}
                  </p>
                </div>

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl border border-primary-yellow/0 group-hover:border-primary-yellow/30"
                  animate={{
                    boxShadow: [
                      "inset 0 0 0px rgba(253, 216, 53, 0)",
                      "inset 0 0 15px rgba(253, 216, 53, 0.1)",
                      "inset 0 0 0px rgba(253, 216, 53, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/70 mb-6">Ready to transform your space?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary-yellow to-accent-gold text-primary-black font-bold text-lg hover:shadow-2xl hover:shadow-primary-yellow/50 transition-all duration-300"
          >
            Schedule Your Removal Today
            <span>Right Arrow</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
