import { useRef, useEffect, useMemo } from 'react'

// Animated 3D grid that renders a perspective wireframe grid, 
// creating a futuristic "Tron-like" floor effect
export default function Grid3D({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener('resize', resize)

    let offset = 0
    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      const style = getComputedStyle(document.documentElement)
      const accent = style.getPropertyValue('--accent').trim() || '#00d4ff'
      
      // Perspective grid
      const lines = 20
      const spacing = 40
      offset = (offset + 0.3) % spacing

      ctx.strokeStyle = accent
      ctx.lineWidth = 0.5

      // Horizontal lines (receding into distance)
      for (let i = 0; i < lines; i++) {
        const y = h * 0.5 + (i + offset / spacing) * spacing * 0.6
        const alpha = 1 - (i / lines)
        ctx.globalAlpha = alpha * 0.15
        ctx.beginPath()
        // Converging toward center for perspective
        const shrink = 1 - (i / lines) * 0.6
        const left = w * (0.5 - 0.5 * shrink)
        const right = w * (0.5 + 0.5 * shrink)
        ctx.moveTo(left, y)
        ctx.lineTo(right, y)
        ctx.stroke()
      }

      // Vertical lines (converging toward vanishing point)
      const vanishY = h * 0.35
      const vanishX = w * 0.5
      const vertLines = 16
      for (let i = -vertLines / 2; i <= vertLines / 2; i++) {
        const bottomX = vanishX + i * 60
        ctx.globalAlpha = 0.08
        ctx.beginPath()
        ctx.moveTo(vanishX + i * 5, vanishY)
        ctx.lineTo(bottomX, h)
        ctx.stroke()
      }

      ctx.globalAlpha = 1
      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden
      style={{ opacity: 0.6 }}
    />
  )
}
