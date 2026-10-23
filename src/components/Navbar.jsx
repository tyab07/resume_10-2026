import { useEffect, useMemo, useState } from 'react'
import { nav, profile } from '../data'
import { Close, Download, Menu, Moon, Sun } from './icons'

function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) current = id
      }
      // Bottom of page -> last section
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = ids[ids.length - 1]
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids])
  return active
}

export default function Navbar({ theme, onToggleTheme }) {
  const ids = useMemo(() => ['home', ...nav.map((n) => n.id)], [])
  const active = useScrollSpy(ids)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const link = (id) =>
    `relative py-2 text-[13px] font-medium transition-colors ${active === id ? 'text-fg' : 'text-muted hover:text-fg'}`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-line bg-bg/75 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="flex items-center gap-2.5 font-semibold tracking-tight" aria-label="Go to top">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-fg text-sm font-bold text-bg">
            MT
          </span>
          <span className="hidden whitespace-nowrap sm:inline">{profile.name}</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={link(n.id)} aria-current={active === n.id ? 'true' : undefined}>
              {n.label}
              <span
                aria-hidden
                className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-fg transition-transform duration-300 ${
                  active === n.id ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition hover:text-fg hover:bg-card-hover"
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
          <a
            href={profile.resume}
            download
            className="hidden items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-bg transition-all hover:shadow-[0_0_16px_var(--accent-glow)] hover:brightness-110 sm:inline-flex"
          >
            <Download width={16} height={16} /> Resume
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-fg lg:hidden"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-bg/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3" aria-label="Mobile">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                  active === n.id ? 'bg-card-hover text-fg' : 'text-muted'
                }`}
              >
                {n.label}
              </a>
            ))}
            <a
              href={profile.resume}
              download
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-bg"
            >
              <Download width={16} height={16} /> Download Resume
            </a>
          </nav>
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 h-px">
        <div
          className="h-full bg-fg/40"
          style={{ width: `${progress}%`, opacity: scrolled ? 1 : 0 }}
        />
      </div>
    </header>
  )
}
