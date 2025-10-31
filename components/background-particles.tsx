"use client"

import { useEffect, useRef } from "react"

export default function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const particlesRef = useRef<any[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const css = getComputedStyle(document.documentElement)
    const color = (css.getPropertyValue("--logo-blue") || "#43b0d6").trim() || "#43b0d6"

    // create particles
    const particleCount = Math.max(30, Math.floor((width * height) / 90000))
    particlesRef.current = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 0.6 + Math.random() * 2.4,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      alpha: 0.08 + Math.random() * 0.2,
    }))

    let last = performance.now()

    const draw = (now: number) => {
      const dt = Math.min(50, now - last)
      last = now
      ctx.clearRect(0, 0, width, height)

      // subtle background gradient overlay
      const g = ctx.createLinearGradient(0, 0, width, height)
      g.addColorStop(0, hexToRgba(color, 0.02))
      g.addColorStop(1, hexToRgba(color, 0.01))
      ctx.fillStyle = g
      ctx.fillRect(0, 0, width, height)

      // draw particles
      for (const p of particlesRef.current) {
        p.x += p.vx * dt
        p.y += p.vy * dt

        // gentle drift to the right and down
        p.vx += (Math.random() - 0.5) * 0.002
        p.vy += (Math.random() - 0.5) * 0.002

        if (p.x > width + 50) p.x = -50
        if (p.x < -50) p.x = width + 50
        if (p.y > height + 50) p.y = -50
        if (p.y < -50) p.y = height + 50

        ctx.beginPath()
        ctx.fillStyle = hexToRgba(color, p.alpha)
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      // gentle connecting lines
      ctx.beginPath()
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const a = particlesRef.current[i]
          const b = particlesRef.current[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist2 = dx * dx + dy * dy
          if (dist2 < 1600 * 4) {
            const dist = Math.sqrt(dist2)
            const alpha = ((1600 * 2 - dist) / (1600 * 2)) * 0.06
            ctx.strokeStyle = hexToRgba(color, alpha)
            ctx.lineWidth = 1
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
          }
        }
      }
      ctx.stroke()

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      // recompute particle count on resize
      const target = Math.max(30, Math.floor((width * height) / 90000))
      const curr = particlesRef.current.length
      if (target > curr) {
        for (let i = 0; i < target - curr; i++) {
          particlesRef.current.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r: 0.6 + Math.random() * 2.4,
            vx: (Math.random() - 0.5) * 0.2,
            vy: (Math.random() - 0.5) * 0.2,
            alpha: 0.08 + Math.random() * 0.2,
          })
        }
      } else if (target < curr) {
        particlesRef.current.length = target
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none w-full h-full"
      aria-hidden
    />
  )
}

function hexToRgba(hex: string, alpha = 1) {
  // accept forms like #abc, #aabbcc
  const h = hex.replace("#", "")
  const bigint = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
