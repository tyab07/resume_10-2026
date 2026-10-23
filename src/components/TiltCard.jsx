import { useRef, useCallback } from 'react'

// 3D tilt card wrapper — tilts toward cursor on hover for a holographic feel
export default function TiltCard({ children, className = '', intensity = 12, glare = true, ...rest }) {
  const cardRef = useRef(null)

  const handleMove = useCallback((e) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -intensity
    const rotateY = ((x - centerX) / centerX) * intensity

    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    
    if (glare) {
      const glareEl = el.querySelector('.tilt-glare')
      if (glareEl) {
        const px = (x / rect.width) * 100
        const py = (y / rect.height) * 100
        glareEl.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.12) 0%, transparent 60%)`
        glareEl.style.opacity = '1'
      }
    }
  }, [intensity, glare])

  const handleLeave = useCallback(() => {
    const el = cardRef.current
    if (!el) return
    el.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
    const glareEl = el.querySelector('.tilt-glare')
    if (glareEl) glareEl.style.opacity = '0'
  }, [])

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...rest}
    >
      {children}
      {glare && (
        <div
          className="tilt-glare pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300"
          aria-hidden
        />
      )}
    </div>
  )
}
