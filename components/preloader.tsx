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
      <div className="absolute inset-0" aria-hidden="true">
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
            transition={{ duration: 2.5, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* Logo container with 3D rotation */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.img
          src="https://cdn.builder.io/api/v1/image/assets%2F37fe508629794307b44d873859aad7cf%2F07ca97242bc2430e81a2d57a4fdb367c?format=webp&width=400"
          alt="Quick Lift Junk Removal logo"
          width={128}
          height={128}
          className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_0_16px_rgba(253,216,53,0.6)]"
          initial={{ opacity: 0, rotateY: 0, scale: 0.8 }}
          animate={{ opacity: 1, rotateY: 360, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />

        {/* Pulsing glow effect */}
        <motion.div
          aria-hidden="true"
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
