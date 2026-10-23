import { useRef, useEffect, useState } from 'react'
import { profile, stats } from '../data'
import { Arrow, Download, Github, Linkedin, Spark } from './icons'
import FloatingParticles from './FloatingParticles'
import Grid3D from './Grid3D'

export default function Hero() {
  const photoContainerRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  // 3D Parallax tilt effect tracking mouse
  useEffect(() => {
    const handle = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMousePos({ x, y })
    }
    window.addEventListener('mousemove', handle, { passive: true })
    return () => window.removeEventListener('mousemove', handle)
  }, [])

  return (
    <section id="home" className="relative isolate flex min-h-[94vh] items-center overflow-hidden pt-20 pb-32">
      {/* 3D Perspective Grid floor */}
      <Grid3D className="-z-20 opacity-35" />

      {/* Floating particles background */}
      <FloatingParticles count={28} className="-z-10" />

      {/* Ambient 3D glow spheres */}
      <div className="absolute -left-36 top-16 h-[540px] w-[540px] rounded-full bg-accent/[0.08] blur-[150px] animate-pulse-slow" aria-hidden />
      <div className="absolute -right-36 bottom-8 h-[440px] w-[440px] rounded-full bg-accent-2/[0.09] blur-[130px] animate-pulse-slow" aria-hidden />
      <div className="absolute left-1/2 top-1/4 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-accent/[0.03] blur-[110px]" aria-hidden />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left — Text & Actions */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.07] px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-accent backdrop-blur-md shadow-[0_0_20px_var(--accent-glow)]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Open to AI & software internships
          </div>

          <h1 className="mt-7 text-[3.4rem] font-semibold leading-[0.9] tracking-[-0.05em] sm:text-[4.4rem] lg:text-[5rem] xl:text-[5.4rem]">
            <span className="block">Muhammad</span>
            <span className="block">
              Tayyab<span className="text-accent text-glow">.</span>
            </span>
          </h1>

          <p className="mt-4 font-serif text-[1.7rem] italic leading-none text-accent sm:text-[1.95rem]">
            {profile.role}
          </p>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted sm:text-base">{profile.headline}</p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-[13px] font-semibold text-bg transition-all hover:shadow-[0_0_24px_var(--accent-glow)] hover:brightness-110 active:scale-95"
            >
              View work
              <Arrow width={15} height={15} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-card/60 backdrop-blur-sm px-5 py-2.5 text-[13px] font-semibold text-fg transition hover:bg-card-hover hover:border-accent/30 active:scale-95"
            >
              <Download width={15} height={15} /> Resume
            </a>
            <div className="ml-1 flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-card/40 text-muted transition hover:border-accent/40 hover:text-accent hover:shadow-[0_0_12px_var(--accent-glow)]"
              >
                <Github width={16} height={16} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-card/40 text-muted transition hover:border-accent/40 hover:text-accent hover:shadow-[0_0_12px_var(--accent-glow)]"
              >
                <Linkedin width={16} height={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Right — 3D Holographic blended portrait with depth badges */}
        <div className="relative mx-auto flex w-full max-w-xs items-center justify-center lg:max-w-sm">
          {/* Animated 3D orbital rings */}
          <div
            className="absolute -inset-10 animate-spin-very-slow rounded-full border border-accent/[0.12] pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute -inset-20 animate-spin-very-slow-reverse rounded-full border border-dashed border-accent-2/[0.1] pointer-events-none"
            aria-hidden
            style={{ animationDuration: '40s' }}
          />

          {/* Soft backlight bloom blending the portrait into background */}
          <div
            className="absolute inset-0 rounded-full bg-accent/[0.12] blur-[70px] scale-95 pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute inset-0 rounded-full bg-accent-2/[0.08] blur-[90px] scale-110 translate-y-6 pointer-events-none"
            aria-hidden
          />

          {/* Interactive 3D tilt stage */}
          <div
            ref={photoContainerRef}
            className="relative z-10 flex flex-col items-center"
            style={{
              perspective: '1000px',
              transform: `rotateY(${mousePos.x * 6}deg) rotateX(${mousePos.y * -4}deg)`,
              transition: 'transform 0.15s ease-out',
            }}
          >
            {/* 3D Pixar Coding Robot — cleanly blended without extra floating text */}
            <img
              src="/pixar-robot.png"
              alt="Pixar Coding Robot"
              className="photo-blend h-auto w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[390px] object-contain select-none pointer-events-auto filter drop-shadow-[0_15px_35px_var(--accent-glow)] transition-all duration-300 hover:scale-[1.02]"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* 3D Glass Stats Strip at bottom */}
      <div className="absolute inset-x-0 bottom-0 border-t border-line/60 bg-bg/75 backdrop-blur-xl">
        <div className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`stat-item px-5 py-3 transition-colors hover:bg-card-hover/40 ${
                i > 0 ? 'border-l border-line/50' : ''
              }`}
            >
              <p className="font-mono text-lg font-semibold leading-none text-accent text-glow">{s.value}</p>
              <p className="mt-1 text-[10.5px] leading-snug text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
