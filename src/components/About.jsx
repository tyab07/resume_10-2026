import { about, achievements, education } from '../data'
import Reveal from './Reveal'
import Section from './Section'

export default function About() {
  return (
    <Section
      id="about"
      index="01"
      label="About"
      title={
        <>
          An engineer with an <em className="text-accent">AI focus</em>.
        </>
      }
      intro="Equal parts AI and backend — I care about what happens after the demo: correctness, evaluation and maintainability."
    >
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <Reveal className="space-y-5 text-[18px] leading-[1.7] md:col-span-6 md:col-start-4">
          {about.paragraphs.map((p, i) => (
            <p key={p} className={i === 0 ? 'font-serif text-[1.55rem] leading-[1.4] tracking-[-0.005em]' : 'text-muted'}>
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={80} className="md:col-span-3">
          <p className="label">What I focus on</p>
          <ol className="mt-4">
            {about.highlights.map((h, i) => (
              <li key={h.title} className="border-t border-line py-4">
                <p className="flex items-baseline gap-2 font-medium">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  {h.title}
                </p>
                <p className="mt-1 text-[15px] leading-snug text-muted">{h.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2">
        <Reveal className="bg-bg p-6 sm:p-8">
          <p className="label">Education</p>
          <h3 className="mt-4 font-serif text-[1.75rem] leading-tight">{education.degree}</h3>
          <p className="mt-1 text-muted">
            {education.school} · <span className="tabular-nums">{education.period}</span>
          </p>
          <ul className="mt-5 space-y-2 text-[15px]">
            {education.notes.map((n) => (
              <li key={n} className="flex gap-3">
                <span className="text-accent">—</span>
                {n}
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-line pt-4 text-sm text-muted">{education.prior}</p>
        </Reveal>
        <Reveal delay={80} className="bg-bg p-6 sm:p-8">
          <p className="label">Recognition</p>
          <ol className="mt-4">
            {achievements.map((a, i) => (
              <li key={a} className="flex gap-4 border-b border-line py-4 last:border-b-0">
                <span className="font-serif text-2xl leading-none text-accent">{i + 1}</span>
                <span className="text-[16px] leading-snug">{a}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  )
}
