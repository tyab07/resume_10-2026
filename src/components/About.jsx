import { about, achievements, education } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import TiltCard from './TiltCard'
import { Check } from './icons'

export default function About() {
  return (
    <section id="about" className="relative py-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-20 h-[300px] w-[300px] rounded-full bg-accent-2/[0.04] blur-[100px]" aria-hidden />

      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="01"
          eyebrow="About"
          title={
            <>
              Engineer with an <em className="font-serif font-normal italic text-accent">AI focus</em>
            </>
          }
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="space-y-3 text-[14px] leading-relaxed text-muted">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}

            <div className="grid gap-2.5 pt-2 sm:grid-cols-3">
              {about.highlights.map((h) => (
                <TiltCard
                  key={h.title}
                  intensity={10}
                  className="rounded-lg border border-line bg-card/50 p-3 transition-all hover:border-accent/30 hover:shadow-[0_4px_20px_var(--accent-glow)]"
                >
                  <p className="text-[12px] font-semibold text-fg">{h.title}</p>
                  <p className="mt-1 text-[11px] leading-snug text-muted">{h.text}</p>
                </TiltCard>
              ))}
            </div>
          </Reveal>

          <div className="space-y-4">
            <Reveal delay={80}>
              <TiltCard intensity={6} className="glass rounded-xl p-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent">Education</p>
                <h3 className="mt-2 text-base font-semibold">{education.degree}</h3>
                <p className="text-[12px] text-muted">{education.school}</p>
                <p className="mt-0.5 font-mono text-[10px] text-muted">{education.period}</p>
                <ul className="mt-3 space-y-1 text-[12px] text-fg/90">
                  {education.notes.map((n) => (
                    <li key={n} className="flex items-start gap-1.5">
                      <Check width={13} height={13} className="mt-0.5 shrink-0 text-accent" /> {n}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 border-t border-line pt-2 text-[10px] text-muted">{education.prior}</p>
              </TiltCard>
            </Reveal>

            <Reveal delay={140}>
              <TiltCard intensity={6} className="glass rounded-xl p-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent">Achievements</p>
                <ul className="mt-3 space-y-2 text-[12px] text-fg/90">
                  {achievements.map((a) => (
                    <li key={a} className="flex items-start gap-1.5">
                      <Check width={13} height={13} className="mt-0.5 shrink-0 text-accent" /> {a}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
