import { projects } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import TiltCard from './TiltCard'
import { External, Github, Linkedin } from './icons'

const iconFor = (type) => (type === 'github' ? Github : type === 'linkedin' ? Linkedin : External)

const KIND_LABEL = {
  agent: 'AI product',
  rag: 'Retrieval system',
  ml: 'Applied research',
  auth: 'Security infra',
  net: 'Distributed systems',
  web: 'Web app',
}

function Links({ links }) {
  return (
    <div className="flex flex-wrap gap-1">
      {links.map((l) => {
        const Icon = iconFor(l.type)
        return (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded border border-line px-2 py-1 text-[10px] font-medium text-fg/90 transition-colors hover:border-accent/30 hover:text-accent hover:shadow-[0_0_8px_var(--accent-glow)]"
          >
            <Icon width={12} height={12} /> {l.label}
          </a>
        )
      })}
    </div>
  )
}

function Tags({ tags }) {
  return (
    <div className="flex flex-wrap gap-1">
      {tags.map((t) => (
        <span key={t} className="rounded border border-line px-1.5 py-0.5 font-mono text-[9.5px] text-muted">
          {t}
        </span>
      ))}
    </div>
  )
}

function Pipeline({ steps }) {
  if (!steps?.length) return null
  return (
    <div className="mt-3 flex flex-wrap items-center gap-1 font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
      {steps.map((step, i) => (
        <span key={step} className="flex items-center gap-1">
          {i > 0 && <span className="text-accent/40">→</span>}
          <span className="rounded border border-line bg-bg-soft/60 px-1.5 py-0.5">{step}</span>
        </span>
      ))}
    </div>
  )
}

function Featured({ p, i }) {
  const hero = i === 0
  return (
    <Reveal delay={i * 50} className={hero ? 'lg:col-span-2' : ''}>
      <TiltCard
        intensity={6}
        className={`group relative flex h-full flex-col rounded-xl border border-line bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_var(--accent-glow)] ${
          hero ? 'p-6 sm:p-7' : 'p-5'
        }`}
      >
        {/* Gradient accent line at top */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
          <div className="flex items-center gap-2">
            <span>{p.period}</span>
            <span className="h-3 w-px bg-line" />
            <span>{KIND_LABEL[p.kind]}</span>
          </div>
          {hero && <span className="rounded-full border border-accent/20 bg-accent/[0.06] px-2 py-0.5 text-[8px] text-accent">Flagship</span>}
        </div>

        <h3 className={`mt-3 font-semibold tracking-tight ${hero ? 'text-xl sm:text-2xl' : 'text-lg'}`}>{p.title}</h3>
        <p className="mt-0.5 text-[12px] font-medium text-muted">{p.subtitle}</p>
        <p className={`mt-3 leading-relaxed text-muted ${hero ? 'max-w-2xl text-[14px]' : 'text-[13px]'}`}>
          {p.description}
        </p>

        <Pipeline steps={p.pipeline} />

        <ul className="mt-3 space-y-1.5 text-[13px] leading-relaxed text-muted">
          {p.points.map((pt) => (
            <li key={pt} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {pt}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-3">
            <Tags tags={p.tags} />
            <Links links={p.links} />
          </div>
        </div>
      </TiltCard>
    </Reveal>
  )
}

function Compact({ p, i }) {
  return (
    <Reveal delay={i * 50}>
      <TiltCard
        intensity={8}
        className="group relative flex h-full flex-col rounded-lg border border-line bg-card p-4 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_var(--accent-glow)]"
      >
        {/* Gradient accent line at top */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-2/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="flex items-start justify-between gap-2 font-mono text-[8.5px] uppercase tracking-[0.12em] text-muted">
          <span>{KIND_LABEL[p.kind]}</span>
          <span>{p.period}</span>
        </div>
        <h3 className="mt-3 text-base font-semibold tracking-tight">{p.title}</h3>
        <p className="mt-0.5 text-[10px] font-medium text-muted">{p.subtitle}</p>
        <p className="mt-2 flex-1 text-[12px] leading-relaxed text-muted">{p.description}</p>
        <div className="mt-4 space-y-2 border-t border-line pt-3">
          <Tags tags={p.tags} />
          <Links links={p.links} />
        </div>
      </TiltCard>
    </Reveal>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const more = projects.filter((p) => !p.featured)
  return (
    <section id="projects" className="relative bg-bg-soft/60 py-16 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-accent/[0.04] blur-[120px]" aria-hidden />
      <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-accent-2/[0.04] blur-[100px]" aria-hidden />

      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="04"
          eyebrow="Work"
          title={
            <>
              Selected <em className="font-serif font-normal italic text-accent">systems</em>
            </>
          }
          intro="AI-powered products, backend services and distributed systems — built end to end."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {featured.map((p, i) => (
            <Featured key={p.title} p={p} i={i} />
          ))}
        </div>

        <Reveal className="mb-5 mt-12 flex items-center gap-3">
          <h3 className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">More work</h3>
          <span className="h-px flex-1 bg-gradient-to-r from-line to-transparent" />
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((p, i) => (
            <Compact key={p.title} p={p} i={i} />
          ))}
        </div>

        <Reveal className="mt-10">
          <a
            href="https://github.com/tyab07?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-card px-5 py-2.5 text-[12px] font-semibold transition-all hover:border-accent/30 hover:text-accent hover:shadow-[0_0_16px_var(--accent-glow)]"
          >
            <Github width={15} height={15} /> All repos on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  )
}
