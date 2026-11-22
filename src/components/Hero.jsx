import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile, stats } from '../data'
import { onAnchorClick } from '../lib/scroll'

const ease = [0.25, 1, 0.5, 1]
const fade = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
})

export function useLocalTime(timeZone) {
  const fmt = () => new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone }).format(new Date())
  const [time, setTime] = useState(fmt)
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 20_000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone])
  return time
}

// Hand-drawn underline that draws itself in once.
function Scribble({ children }) {
  return (
    <span className="scribble">
      {children}
      <svg viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden>
        <motion.path
          d="M2 8.5C40 3.5 92 2.5 132 4.5c22 1.1 44 3 66 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, delay: 0.9, ease: 'easeInOut' }}
        />
      </svg>
    </span>
  )
}

export default function Hero() {
  const time = useLocalTime(profile.timezone)

  return (
    <section id="home" className="pt-28 sm:pt-36">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div {...fade(0)} className="flex flex-wrap items-center justify-between gap-3">
          <p className="label">
            {profile.role} — {profile.location}
          </p>
          <a href="#contact" onClick={onAnchorClick} className="label inline-flex items-center gap-2 !text-fg">
            <span className="h-2 w-2 rounded-full bg-ok" />
            {profile.availability}
          </a>
        </motion.div>

        <motion.h1
          {...fade(0.08)}
          className="mt-8 font-serif text-[clamp(3.6rem,12vw,9.5rem)] leading-[0.88] tracking-[-0.035em]"
        >
          Muhammad
          <br />
          Tayyab<span className="text-accent">.</span>
        </motion.h1>

        <div className="mt-12 grid gap-12 border-t border-line pt-10 md:grid-cols-12 md:gap-8">
          <motion.div {...fade(0.18)} className="md:col-span-7">
            <p className="font-serif text-[1.7rem] leading-[1.3] tracking-[-0.01em] sm:text-[2.1rem]">
              I build AI features that do real work — and the <Scribble>backend services</Scribble> behind them.
            </p>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
              Focused on LLM tool calling, retrieval-augmented generation and clean, well-tested APIs in Python and .NET.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href="#projects"
                onClick={onAnchorClick}
                className="group inline-flex h-12 items-center gap-3 rounded-md bg-fg px-6 text-[15px] font-medium text-bg transition-colors hover:bg-accent"
              >
                See selected work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href={profile.resume} download className="link text-[15px] font-medium">
                Download résumé ↓
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="link text-[15px] font-medium">
                GitHub ↗
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link text-[15px] font-medium">
                LinkedIn ↗
              </a>
            </div>
          </motion.div>

          <motion.dl {...fade(0.26)} className="self-start text-[15px] md:col-span-4 md:col-start-9">
            {profile.facts.map((f) => (
              <div key={f.k} className="grid grid-cols-[96px_1fr] gap-4 border-b border-line py-3 first:pt-0">
                <dt className="label pt-0.5">{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
            <div className="grid grid-cols-[96px_1fr] gap-4 py-3">
              <dt className="label pt-0.5">Local time</dt>
              <dd className="tabular-nums">
                {time} <span className="text-muted">PKT · UTC+5</span>
              </dd>
            </div>
          </motion.dl>
        </div>

        <motion.dl {...fade(0.34)} className="mt-16 grid grid-cols-2 border-t border-line lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col py-6 pr-4 ${i % 2 ? 'pl-5 border-l border-line' : ''} ${
                i === 2 ? 'lg:border-l lg:pl-5' : ''
              } ${i >= 2 ? 'border-t border-line lg:border-t-0' : ''}`}
            >
              <dt className="order-2 mt-2 text-sm leading-snug text-muted">{s.label}</dt>
              <dd className="font-serif text-4xl tracking-tight sm:text-5xl">{s.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
