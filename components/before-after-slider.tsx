"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function BeforeAfterSlider({
  beforeSrc = "/before.jpg",
  afterSrc = "/after.jpg",
}: {
  beforeSrc?: string
  afterSrc?: string
}) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [percent, setPercent] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      // keep percent within bounds
      setPercent((p) => Math.max(5, Math.min(95, p)))
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const onDrag = (_e: any, info: { point: { x: number } }) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = info.point.x - rect.left
    const p = (x / rect.width) * 100
    setPercent(Math.max(5, Math.min(95, Math.round(p))))
  }

  return (
    <div ref={containerRef} className="relative overflow-hidden rounded-2xl h-96">
      {/* After Image */}
      <div className="absolute inset-0">
        <Image src={afterSrc} alt="After" fill className="object-cover" />
      </div>

      {/* Before Image (Clipped) */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
        aria-hidden={false}
      >
        <Image src={beforeSrc} alt="Before" fill className="object-cover" />
      </motion.div>

      {/* Draggable Handle */}
      <motion.div
        className="absolute top-0 bottom-0 w-1 bg-white/80 cursor-ew-resize"
        style={{ left: `${percent}%`, x: "-50%" }}
        drag="x"
        dragConstraints={containerRef}
        dragElastic={0}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        onDrag={(e, info) => onDrag(e, info as any)}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-black/80">
          ↔
        </div>
      </motion.div>
    </div>
  )
}
