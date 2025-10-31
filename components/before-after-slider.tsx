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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const p = (x / rect.width) * 100
    setPercent(Math.max(5, Math.min(95, p)))
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const p = (x / rect.width) * 100
    setPercent(Math.max(5, Math.min(95, p)))
  }

  useEffect(() => {
    if (!isDragging) return
    document.addEventListener("mousemove", handleMouseMove as any)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("touchmove", handleTouchMove as any)
    document.addEventListener("touchend", handleMouseUp)
    return () => {
      document.removeEventListener("mousemove", handleMouseMove as any)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove as any)
      document.removeEventListener("touchend", handleMouseUp)
    }
  }, [isDragging])

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl h-96 user-select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* After Image */}
      <div className="absolute inset-0">
        <Image src={afterSrc} alt="After" fill className="object-cover pointer-events-none" />
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
        aria-hidden={false}
      >
        <Image src={beforeSrc} alt="Before" fill className="object-cover pointer-events-none" />
      </div>

      {/* Draggable Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white/90 cursor-ew-resize transition-opacity"
        style={{ left: `${percent}%`, transform: "translateX(-50%)" }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-primary-yellow font-bold text-lg hover:scale-110 transition-transform">
          ↔
        </div>
      </div>
    </div>
  )
}
