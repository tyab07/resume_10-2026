import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { nav, profile } from '../data'
import { onAnchorClick } from '../lib/scroll'
import { Close, Menu, Moon, Sun } from './icons'

function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) current = id
      }
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

export function Wordmark() {
  return (
    <span className="font-serif text-[22px] leading-none tracking-[-0.01em]">
      M. Tayyab<span className="text-accent">.</span>
    </span>
  )
}

export default function Navbar({ theme, onToggleTheme, onOpenMenu }) {
  const ids = useMemo(() => ['home', ...nav.map((n) => n.id)], [])
  const active = useScrollSpy(ids)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMac, setIsMac] = useState(true)

  useEffect(() => {
    setIsMac(/mac|iphone|ipad/i.test(navigator.userAgent))
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (e) => {
    setOpen(false)
    onAnchorClick(e)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? 'border-line bg-bg/90 backdrop-blur-md' : 'border-transparent bg-bg'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5">
        <a href="#home" onClick={go} aria-label="Back to top">
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((n, i) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={go}
              aria-current={active === n.id ? 'true' : undefined}
              className={`group relative py-1 text-[14px] transition-colors ${active === n.id ? 'text-fg' : 'text-muted hover:text-fg'}`}
            >
              <span className="mr-1.5 font-mono text-[11px] text-faint">0{i + 1}</span>
              {n.label}
              <span
                className={`absolute inset-x-0 -bottom-px h-px origin-left bg-accent transition-transform duration-300 ${
                  active === n.id ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            onClick={onOpenMenu}
            className="hidden h-9 items-center gap-2 rounded-md border border-line px-2.5 text-[13px] text-muted transition hover:border-line-strong hover:text-fg md:inline-flex"
            aria-label="Open command menu"
          >
            <kbd className="font-mono text-[12px]">{isMac ? '⌘' : 'Ctrl'} K</kbd>
          </button>
          <button
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="grid h-9 w-9 place-items-center rounded-md border border-line text-muted transition hover:border-line-strong hover:text-fg"
          >
            {theme === 'dark' ? <Sun width={15} height={15} /> : <Moon width={15} height={15} />}
          </button>
          <a
            href={profile.resume}
            download
            className="hidden h-9 items-center rounded-md bg-fg px-4 text-[13px] font-medium text-bg transition hover:bg-accent sm:inline-flex"
          >
            Résumé
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="grid h-9 w-9 place-items-center rounded-md border border-line lg:hidden"
          >
            {open ? <Close width={16} height={16} /> : <Menu width={16} height={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden border-t border-line lg:hidden"
          >
            <div className="mx-auto max-w-6xl px-5 py-3">
              {nav.map((n, i) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={go}
                  className={`flex items-baseline gap-3 border-b border-line py-3.5 font-serif text-2xl ${
                    active === n.id ? 'text-accent' : ''
                  }`}
                >
                  <span className="font-mono text-xs text-faint">0{i + 1}</span>
                  {n.label}
                </a>
              ))}
              <a
                href={profile.resume}
                download
                className="mt-4 flex h-11 items-center justify-center rounded-md bg-fg text-sm font-medium text-bg"
              >
                Download résumé
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
