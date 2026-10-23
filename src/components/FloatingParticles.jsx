import { useMemo } from 'react'

// Generates floating orbs that drift around the background for depth
export default function FloatingParticles({ count = 20, className = '' }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * -20,
      opacity: Math.random() * 0.3 + 0.1,
      drift: Math.random() * 60 + 20,
    }))
  }, [count])

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle absolute rounded-full"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
            background: p.id % 3 === 0
              ? 'var(--accent)'
              : p.id % 3 === 1
                ? 'var(--accent-2)'
                : 'var(--fg)',
            boxShadow: `0 0 ${p.size * 3}px ${p.id % 2 === 0 ? 'var(--accent)' : 'var(--accent-2)'}`,
            animation: `particleFloat ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
            '--drift': `${p.drift}px`,
          }}
        />
      ))}
    </div>
  )
}
