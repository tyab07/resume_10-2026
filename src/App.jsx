import { lazy, Suspense, useCallback, useEffect, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import Lenis from 'lenis'
import { Toaster } from 'sonner'
import { setLenis } from './lib/scroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Loaded on first open — keeps cmdk/Radix out of the initial bundle.
const CommandMenu = lazy(() => import('./components/CommandMenu'))

function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ autoRaf: true, lerp: 0.1 })
    setLenis(lenis)
    // Honour a #hash in the URL on first load.
    const id = location.hash.slice(1)
    if (id) requestAnimationFrame(() => lenis.scrollTo(`#${CSS.escape(id)}`, { immediate: true }))
    return () => {
      setLenis(null)
      lenis.destroy()
    }
  }, [])
}

export default function App() {
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute('data-theme') || 'light')
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuRequested, setMenuRequested] = useState(false)
  useEffect(() => {
    if (menuOpen) setMenuRequested(true)
  }, [menuOpen])
  // Preload the menu shortly after first paint so the first ⌘K opens instantly.
  useEffect(() => {
    const id = setTimeout(() => setMenuRequested(true), 2500)
    return () => clearTimeout(id)
  }, [])
  useSmoothScroll()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#141413' : '#f3f0e8')
    try {
      localStorage.setItem('theme-v2', theme)
    } catch {
      /* storage unavailable */
    }
  }, [theme])

  const toggleTheme = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])

  // ⌘K / Ctrl+K opens the command menu from anywhere.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setMenuOpen((o) => !o)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-bg"
      >
        Skip to content
      </a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} onOpenMenu={() => setMenuOpen(true)} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer onOpenMenu={() => setMenuOpen(true)} />
      {menuRequested && (
        <Suspense fallback={null}>
          <CommandMenu open={menuOpen} onOpenChange={setMenuOpen} theme={theme} onToggleTheme={toggleTheme} />
        </Suspense>
      )}
      <Toaster theme={theme} position="bottom-center" richColors={false} toastOptions={{ className: 'font-sans' }} />
    </MotionConfig>
  )
}
