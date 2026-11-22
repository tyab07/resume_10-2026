import Reveal from './Reveal'

// Editorial section: heavy ink rule, numbered label on the left, content on a 12-column grid.
export default function Section({ id, index, label, title, intro, className = '', children }) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="grid gap-y-5 border-t-2 border-fg pt-5 md:grid-cols-12 md:gap-x-8">
          <p className="label md:col-span-3">
            <span className="text-accent">§{index}</span>&nbsp;&nbsp;{label}
          </p>
          <div className="md:col-span-9">
            <h2 className="font-serif text-[2.4rem] leading-[1.05] tracking-[-0.02em] sm:text-[3.4rem]">{title}</h2>
            {intro && <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted">{intro}</p>}
          </div>
        </Reveal>
        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  )
}
