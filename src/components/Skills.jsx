import { skills } from '../data'
import Reveal from './Reveal'
import Section from './Section'

export default function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      label="Skills"
      title={
        <>
          The tools I <em className="text-accent">reach for</em>.
        </>
      }
      intro="From the model and retrieval layer to the APIs and interfaces around it."
    >
      <div className="border-b border-line">
        {skills.map((g, i) => (
          <Reveal
            key={g.group}
            delay={i * 40}
            className="grid gap-4 border-t border-line py-6 md:grid-cols-12 md:gap-8"
          >
            <div className="flex items-baseline gap-3 md:col-span-3">
              <span className="font-mono text-xs text-faint">0{i + 1}</span>
              <h3 className="font-serif text-2xl">{g.group}</h3>
            </div>
            <ul className="flex flex-wrap gap-2 md:col-span-9 md:pt-1">
              {g.items.map((it) => (
                <li
                  key={it}
                  className="rounded-[4px] border border-line bg-card px-3 py-1.5 text-[15px] transition-colors hover:border-fg"
                >
                  {it}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
