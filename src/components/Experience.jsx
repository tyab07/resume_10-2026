import { experience } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="Work & teaching"
          intro="Industry and academic experience alongside my degree."
        />

        <ol className="border-y border-line">
          {experience.map((e, i) => (
            <Reveal
              as="li"
              key={e.role}
              delay={i * 50}
              className="grid gap-3 border-b border-line py-5 last:border-b-0 sm:grid-cols-[170px_1fr] sm:gap-6 lg:grid-cols-[200px_1fr]"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">{e.period}</p>
                <p className="mt-2 text-[12px] font-medium text-accent">{e.org}</p>
                <p className="mt-0.5 text-[10px] text-muted">{e.place}</p>
              </div>

              <div>
                <h3 className="text-base font-semibold tracking-tight">{e.role}</h3>
                <ul className="mt-2 space-y-1.5 text-[13px] leading-relaxed text-muted">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-1">
                  {e.tags.map((t) => (
                    <span key={t} className="rounded border border-line px-1.5 py-0.5 font-mono text-[9.5px] text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
