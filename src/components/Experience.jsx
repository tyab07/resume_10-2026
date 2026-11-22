import { experience } from '../data'
import Reveal from './Reveal'
import Section from './Section'

export default function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      label="Experience"
      title={
        <>
          Work &amp; <em className="text-accent">teaching</em>.
        </>
      }
      intro="Industry and academic roles alongside my degree."
    >
      <ol className="border-b border-line">
        {experience.map((e, i) => (
          <Reveal
            as="li"
            key={e.role}
            delay={i * 50}
            className="grid gap-4 border-t border-line py-8 md:grid-cols-12 md:gap-8"
          >
            <div className="md:col-span-3">
              <p className="font-mono text-[13px] tabular-nums text-muted">{e.period}</p>
              <p className="mt-1 text-sm text-faint">{e.place}</p>
            </div>
            <div className="md:col-span-4">
              <h3 className="font-serif text-[1.6rem] leading-tight">{e.role}</h3>
              <p className="mt-1 font-medium text-accent">{e.org}</p>
            </div>
            <div className="md:col-span-5">
              <ul className="space-y-2.5 text-[16px] leading-relaxed text-muted">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="select-none text-faint">—</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-mono text-[12.5px] text-faint">{e.tags.join('  /  ')}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
