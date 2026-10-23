import { skills } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import TechLogo from './TechLogo'

// Flatten all skills into individual items with their group label
const allItems = skills.flatMap((g) =>
  g.items.map((item) => ({ item, group: g.group }))
)

export default function Skills() {
  return (
    <section id="skills" className="overflow-hidden bg-bg-soft/60 py-16">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="Tech stack"
          intro="Tools I ship with — hover to pause."
        />
      </div>

      {/* Train row 1 — individual skills */}
      <Reveal>
        <div className="relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg-soft/60 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg-soft/60 to-transparent" />

          <div className="marquee-track" style={{ animationDuration: '60s' }}>
            {[...allItems, ...allItems].map((s, i) => (
              <div
                key={`${s.item}-${i}`}
                className="glow-card group mx-2 flex flex-shrink-0 items-center gap-3 rounded-xl border border-line/80 bg-card/85 px-3.5 py-2.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_8px_24px_-10px_var(--accent-glow)]"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-line/70 bg-bg-soft/80 text-fg/80 transition-colors group-hover:border-accent/30 group-hover:text-accent">
                  <TechLogo name={s.item} className="h-4 w-4" />
                </span>
                <span>
                  <span className="block whitespace-nowrap text-[12px] font-medium text-fg">{s.item}</span>
                  <span className="block whitespace-nowrap font-mono text-[8.5px] uppercase tracking-[0.14em] text-muted">
                    {s.group}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Train row 2 — grouped cards (reverse direction) */}
      <Reveal delay={120}>
        <div className="relative mt-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg-soft/60 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg-soft/60 to-transparent" />

          <div className="marquee-track items-stretch" style={{ animationDuration: '80s', animationDirection: 'reverse' }}>
            {[...skills, ...skills].map((g, i) => (
              <div
                key={`${g.group}-${i}`}
                className="glow-card group relative mx-4 flex w-[340px] flex-shrink-0 flex-col overflow-hidden rounded-2xl border border-line/80 bg-card/80 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_45px_-18px_var(--accent-glow)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-60 transition-opacity group-hover:opacity-100" />
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/[0.06] blur-2xl transition-colors group-hover:bg-accent/[0.12]" />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/80">
                      0{(i % skills.length) + 1}
                    </p>
                    <h3 className="mt-1.5 text-[15px] font-semibold tracking-tight text-fg">{g.group}</h3>
                  </div>
                  <span className="shrink-0 rounded-full border border-line bg-bg-soft/70 px-2 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.14em] text-muted">
                    {g.items.length} tools
                  </span>
                </div>

                <div className="relative mt-4 grid grid-cols-2 gap-1.5">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      title={it}
                      className="flex min-w-0 items-center gap-2 rounded-lg border border-line/50 bg-bg-soft/50 px-2 py-1.5 transition-colors hover:border-accent/30 hover:bg-bg-soft/80"
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center text-fg/75">
                        <TechLogo name={it} className="h-3.5 w-3.5" />
                      </span>
                      <span className="min-w-0 text-[10px] leading-tight text-muted">{it}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
