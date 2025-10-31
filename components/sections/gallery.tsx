"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useInView } from "react-intersection-observer"

export function GallerySection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const beforeAfter = [
    {
      title: "Residential Cleanout",
      before: "/cluttered-basement-before-junk-removal.jpg",
      after: "/clean-empty-basement-after-junk-removal.jpg",
    },
    {
      title: "Garage Transformation",
      before: "/messy-full-garage-with-junk.jpg",
      after: "/organized-empty-clean-garage.jpg",
    },
    {
      title: "Yard Cleanup",
      before: "/overgrown-yard-with-debris.jpg",
      after: "/clean-organized-yard.jpg",
    },
  ]

  const galleryImages = Array.from({ length: 6 }, (_, i) => ({
    src: `/placeholder.svg?height=400&width=400&query=professional junk removal service photo ${i + 1}`,
    title: `Project ${i + 1}`,
  }))

  return (
    <section id="gallery" className="relative py-20 px-4 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        >
          <h2 className="text-5xl font-black mb-4 text-foreground">Before & After</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            See the transformation in our completed projects
          </p>
        </motion.div>

        {/* Before & After Carousel */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative rounded-3xl overflow-hidden border-2 border-primary/30 h-96">
            {/* Before Image */}
            <motion.div
              className="absolute inset-0"
              animate={{
                x: selectedIndex * 100 + "%",
              }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={beforeAfter[selectedIndex].before || "/placeholder.svg"}
                alt="Before"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* After Image - Slider */}
            <motion.div
              className="absolute inset-0 overflow-hidden"
              style={{
                width: "50%",
              }}
              whileHover={{ width: "70%" }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={beforeAfter[selectedIndex].after || "/placeholder.svg"}
                alt="After"
                className="w-full h-full object-cover"
                style={{
                  width: "200%",
                }}
              />
            </motion.div>

            {/* Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <h3 className="text-4xl font-black text-white drop-shadow-lg">{beforeAfter[selectedIndex].title}</h3>
              <p className="text-white drop-shadow-lg mt-2">← Hover to reveal after →</p>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {beforeAfter.map((_, i) => (
                <motion.button
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === selectedIndex ? "bg-primary w-8" : "bg-white/50"
                  }`}
                  onClick={() => setSelectedIndex(i)}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-primary/20 hover:border-primary/50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <motion.div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <h4 className="text-white font-bold text-lg">{image.title}</h4>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
