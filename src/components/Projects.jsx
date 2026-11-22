import { motion } from 'framer-motion'
import { profile, projects } from '../data'
import Reveal from './Reveal'
import Section from './Section'

const KIND = {
  agent: 'AI product',
  rag: 'Retrieval system',
  ml: 'Applied research',
  auth: 'Security',
  net: 'Networked systems',
  web: 'Web app',
}

const arrow = (type) => (type === 'live' || type === 'github' || type === 'linkedin' ? '↗' : '→')

function Links({ links }) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2">
      {links.map((l) => (
        <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="link text-[15px] font-medium">
          {l.label} {arrow(l.type)}
        </a>
      ))}
    </div>
  )
}

// A printed-log style example of the system in use.
function Session({ p }) {
  const mark = { in: '>', step: '·', ok: '✓' }
  return (
    <figure className="flex h-full flex-col rounded-md border border-line bg-card">
      <figcaption className="flex items-center justify-between border-b border-line px-5 py-3">
        <span className="label">Example interaction</span>
      </figcaption>
      <motion.ol
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ show: { transition: { staggerChildren: 0.35, delayChildren: 0.15 } } }}
        className="flex-1 space-y-3 px-5 py-5 font-mono text-[13px] leading-relaxed"
      >
        {p.demo.map((line, i) => (
          <motion.li
            key={i}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.3 } } }}
            className={`flex gap-3 ${line.t === 'in' ? 'font-medium text-fg' : line.t === 'ok' ? 'text-ok' : 'text-muted'}`}
          >
            <span className={`w-3 shrink-0 ${line.t === 'in' ? 'text-accent' : ''}`}>{mark[line.t]}</span>
            <span className="min-w-0">
              {line.t === 'in' ? `“${line.v}”` : line.v}
              {i === p.demo.length - 1 && <span className="caret ml-1.5 opacity-70" aria-hidden />}
            </span>
          </motion.li>
        ))}
      </motion.ol>
      <div className="border-t border-line px-5 py-3 font-mono text-[12px] text-muted">
        {p.pipeline.map((s, i) => (
          <span key={s}>
            {i > 0 && <span className="px-1.5 text-accent">→</span>}
            {s}
          </span>
        ))}
      </div>
    </figure>
  )
}

function Featured({ p, n }) {
  return (
    <Reveal as="article" className="grid gap-10 border-t border-line py-12 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-3">
        <p className="font-serif text-6xl leading-none text-accent">{String(n).padStart(2, '0')}</p>
        <p className="label mt-4">{KIND[p.kind]}</p>
        <p className="mt-1 font-mono text-[13px] text-faint">{p.period}</p>
      </div>
      <div className="md:col-span-4">
        <h3 className="font-serif text-[2.2rem] leading-[1.05] tracking-[-0.01em]">{p.title}</h3>
        <p className="mt-2 text-[15px] font-medium text-accent">{p.subtitle}</p>
        <p className="mt-5 text-[17px] leading-relaxed">{p.description}</p>
        <ul className="mt-5 space-y-2.5 text-[15px] leading-relaxed text-muted">
          {p.points.map((pt) => (
            <li key={pt} className="flex gap-3">
              <span className="select-none text-faint">—</span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-mono text-[12.5px] leading-relaxed text-faint">{p.tags.join('  /  ')}</p>
        <div className="mt-6">
          <Links links={p.links} />
        </div>
      </div>
      <div className="self-start md:col-span-5">
        <Session p={p} />
      </div>
    </Reveal>
  )
}

function Row({ p, n }) {
  const primary = p.links[0]
  return (
    <Reveal as="li" className="group relative border-t border-line">
      <div className="grid gap-3 py-7 transition-colors md:grid-cols-12 md:gap-8">
        <div className="flex items-baseline gap-4 md:col-span-3">
          <span className="font-mono text-xs text-faint">{String(n).padStart(2, '0')}</span>
          <span className="label">{KIND[p.kind]}</span>
        </div>
        <div className="md:col-span-4">
          <h3 className="font-serif text-[1.65rem] leading-tight">
            <a
              href={primary.href}
              target="_blank"
              rel="noreferrer"
              className="after:absolute after:inset-0 after:content-[''] group-hover:text-accent"
            >
              {p.title}
            </a>
          </h3>
          <p className="mt-1 text-[15px] text-muted">{p.subtitle}</p>
        </div>
        <div className="md:col-span-4">
          <p className="text-[15px] leading-relaxed text-muted">{p.description}</p>
          <p className="mt-3 font-mono text-[12px] text-faint">{p.tags.join('  /  ')}</p>
          {p.links.length > 1 && (
            <div className="relative z-10 mt-3">
              <Links links={p.links} />
            </div>
          )}
        </div>
        <div className="hidden items-start justify-end md:col-span-1 md:flex">
          <span className="font-mono text-[13px] text-faint">{p.period}</span>
        </div>
      </div>
      <span
        aria-hidden
        className="pointer-events-none absolute right-0 top-7 hidden translate-x-2 text-2xl text-accent opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 xl:block xl:-right-8"
      >
        ↗
      </span>
    </Reveal>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const more = projects.filter((p) => !p.featured)
  return (
    <Section
      id="projects"
      index="04"
      label="Selected work"
      title={
        <>
          Systems I’ve <em className="text-accent">designed and shipped</em>.
        </>
      }
      intro="AI products, backend services and networked systems — built end to end."
    >
      <div>
        {featured.map((p, i) => (
          <Featured key={p.title} p={p} n={i + 1} />
        ))}
      </div>

      <Reveal className="mt-16 flex items-baseline justify-between gap-4 border-t-2 border-fg pt-5">
        <h3 className="font-serif text-3xl">More projects</h3>
        <a href={`${profile.github}?tab=repositories`} target="_blank" rel="noreferrer" className="link text-[15px] font-medium">
          All repositories ↗
        </a>
      </Reveal>
      <ol className="mt-6 border-b border-line">
        {more.map((p, i) => (
          <Row key={p.title} p={p} n={featured.length + i + 1} />
        ))}
      </ol>
    </Section>
  )
}
