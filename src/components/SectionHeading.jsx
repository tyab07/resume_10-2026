import Reveal from './Reveal'

export default function SectionHeading({ index, eyebrow, title, intro }) {
  return (
    <Reveal className="mb-12 border-t border-line pt-8">
      <div className="grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-end">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="text-accent">{index}</span>
            <span className="mx-2 text-muted/40">/</span>
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.15] tracking-tight sm:text-[2.6rem]">{title}</h2>
        </div>
        {intro && (
          <p className="max-w-xl text-[15px] leading-relaxed text-muted md:justify-self-end md:pb-1">{intro}</p>
        )}
      </div>
    </Reveal>
  )
}
