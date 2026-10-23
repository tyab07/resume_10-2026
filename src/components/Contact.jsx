import { useState } from 'react'
import { profile } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import TiltCard from './TiltCard'
import { Arrow, Github, Linkedin, Mail, Phone, Pin } from './icons'

const items = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/muhammadtayyab', href: profile.linkedin },
  { icon: Github, label: 'GitHub', value: 'github.com/tyab07', href: profile.github },
  { icon: Phone, label: 'Phone / WhatsApp', value: profile.phone, href: `https://wa.me/${profile.phoneRaw}` },
  { icon: Pin, label: 'Location', value: profile.location },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const field =
    'w-full rounded-lg border border-line bg-bg-soft/70 px-4 py-3 text-sm text-fg placeholder:text-muted/60 outline-none transition focus:border-accent focus:bg-bg-soft'

  return (
    <section id="contact" className="relative py-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-10 top-1/3 h-[380px] w-[380px] rounded-full bg-accent/[0.04] blur-[120px]" aria-hidden />

      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title={
            <>
              Let’s build something <em className="font-serif font-normal italic text-accent">reliable</em>
            </>
          }
          intro="I’m looking for internships in software engineering, AI applications and backend development. If that’s the kind of work you’re doing, I’d like to hear about it."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <Reveal>
              <TiltCard intensity={5} className="glass rounded-2xl p-6 sm:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Direct channels</p>
                <ul className="mt-4 divide-y divide-line border-t border-line">
                  {items.map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex items-center gap-4 py-3.5">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line bg-bg-soft text-accent">
                        <Icon width={16} height={16} />
                      </span>
                      <div className="min-w-0">
                        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel="noreferrer"
                            className="mt-0.5 block truncate text-sm font-medium transition hover:text-accent"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="mt-0.5 text-sm font-medium">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>

            <Reveal delay={80}>
              <TiltCard intensity={6} className="rounded-xl border border-line bg-bg-soft p-5">
                <p className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Currently available
                </p>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  Open to AI engineering internships for 2026. Based in Faisalabad, Pakistan — remote-friendly.
                </p>
              </TiltCard>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <TiltCard intensity={4} className="rounded-2xl border border-line bg-card p-6 sm:p-8">
              <form onSubmit={submit}>
                <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
                  <p className="text-sm font-semibold">Send a message</p>
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-muted">opens in email</span>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-muted">Your name</span>
                    <input required className={field} placeholder="Jane Doe" value={form.name} onChange={set('name')} />
                  </label>
                  <label className="block">
                    <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-muted">Your email</span>
                    <input
                      required
                      type="email"
                      className={field}
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={set('email')}
                    />
                  </label>
                </div>
                <label className="mt-4 block">
                  <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-muted">Message</span>
                  <textarea
                    required
                    rows={5}
                    className={`${field} resize-none`}
                    placeholder="Tell me about the role or project…"
                    value={form.message}
                    onChange={set('message')}
                  />
                </label>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-[13px] font-semibold text-bg transition-all hover:shadow-[0_0_16px_var(--accent-glow)] hover:brightness-110 active:scale-95"
                  >
                    Send message
                    <Arrow width={16} height={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-[11px] text-muted">This opens your email app with the message pre-filled.</p>
                </div>
              </form>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
