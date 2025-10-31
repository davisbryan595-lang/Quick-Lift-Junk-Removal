"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary"
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      </div>

      {/* Logo with 3D rotation and glow */}
      <motion.div
        className="relative z-10"
        animate={{
          rotateY: [0, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
        }}
        style={{
          perspective: 1000,
        }}
      >
        <motion.div
          className="relative w-32 h-32 flex items-center justify-center"
          animate={{
            boxShadow: [
              "0 0 20px rgba(255, 205, 0, 0.3)",
              "0 0 60px rgba(255, 205, 0, 0.8)",
              "0 0 20px rgba(255, 205, 0, 0.3)",
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FullLogo%2B%285%29.png-1Hk6AD4hfFIQSSljhIL8uvTgfXljPy.webp"
            alt="Quick Lift Logo"
            width={128}
            height={128}
            className="drop-shadow-2xl"
          />
        </motion.div>
      </motion.div>

      {/* Particle burst effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full"
            initial={{
              x: 0,
              y: 0,
              opacity: 1,
            }}
            animate={{
              x: Math.cos((i / 8) * Math.PI * 2) * 100,
              y: Math.sin((i / 8) * Math.PI * 2) * 100,
              opacity: 0,
            }}
            transition={{
              duration: 1.5,
              delay: 1,
              ease: "easeOut",
            }}
            style={{
              left: "50%",
              top: "50%",
              translateX: "-50%",
              translateY: "-50%",
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
