"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"

export default function Preloader({ duration = 2500 }: { duration?: number }) {
  const [progress, setProgress] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    let start: number | null = null
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const pct = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(pct)
      if (elapsed < duration) {
        requestAnimationFrame(step)
      }
    }
    const raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [duration])

  useEffect(() => {
    if (progress >= 100) {
      controls.start({ opacity: 0, scale: 0.98, transition: { duration: 0.6 } })
    }
  }, [progress, controls])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={controls}
      className="fixed inset-0 bg-gradient-to-br from-[#050505] via-[#0b0b0b] to-[#050505] flex items-center justify-center z-50"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-6 px-6">
        <motion.img
          src="https://cdn.builder.io/api/v1/image/assets%2F37fe508629794307b44d873859aad7cf%2F07ca97242bc2430e81a2d57a4fdb367c?format=webp&width=600"
          alt="Quick Lift logo"
          width={160}
          height={160}
          className="w-28 h-28 md:w-40 md:h-40 object-contain"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2.0, ease: "linear" }}
        />

        <div className="w-64 md:w-96 h-3 bg-neutral-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-yellow to-accent-gold"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.2 }}
          />
        </div>

        <div className="text-center">
          <p className="text-sm text-foreground/60">Loading Quick Lift… {progress}%</p>
        </div>
      </div>
    </motion.div>
  )
}
