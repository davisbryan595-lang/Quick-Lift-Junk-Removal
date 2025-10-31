"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Preloader() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 bg-primary-black flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] opacity-50" />

      {/* Particle field */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-primary-yellow rounded-full"
            initial={{ x: `${particle.x}%`, y: `${particle.y}%`, opacity: 0 }}
            animate={{
              x: `${particle.x + (Math.random() - 0.5) * 50}%`,
              y: `${particle.y + (Math.random() - 0.5) * 50}%`,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Logo container with 3D rotation */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="w-24 h-24 md:w-32 md:h-32"
          >
            <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Logo simplified - gear */}
              <circle cx="100" cy="100" r="95" stroke="#FDD835" strokeWidth="3" />
              <circle cx="100" cy="100" r="85" fill="none" stroke="#FDD835" strokeWidth="2" />

              {/* Truck silhouette */}
              <g transform="translate(70, 80)">
                <rect x="0" y="20" width="50" height="25" fill="#FDD835" rx="2" />
                <rect x="45" y="10" width="15" height="15" fill="#FDD835" />
                <circle cx="10" cy="50" r="6" fill="#FDD835" />
                <circle cx="50" cy="50" r="6" fill="#FDD835" />
              </g>
            </svg>
          </motion.div>
        </motion.div>

        {/* Pulsing glow effect */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 20px rgba(253, 216, 53, 0.5)",
              "0 0 40px rgba(253, 216, 53, 1)",
              "0 0 20px rgba(253, 216, 53, 0.5)",
            ],
          }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="absolute inset-0 w-24 h-24 md:w-32 md:h-32"
        />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-primary-yellow">QUICK LIFT</h1>
          <p className="text-foreground/60 text-sm">Junk Removal & Hauling</p>
        </motion.div>
      </div>
    </div>
  )
}
