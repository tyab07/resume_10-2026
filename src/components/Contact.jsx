import { useState } from 'react'
import { profile } from '../data'
import { copyText } from '../lib/copy'
import Reveal from './Reveal'
import Section from './Section'

const channels = [
  { label: 'LinkedIn', value: 'in/muhammad-tayyab-76b9923b1', href: profile.linkedin },
  { label: 'GitHub', value: 'github.com/tyab07', href: profile.github },
  { label: 'WhatsApp', value: profile.phone, href: `https://wa.me/${profile.phoneRaw}` },
  { label: 'Based in', value: profile.location },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [copied, setCopied] = useState(false)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const copy = async () => {
    await copyText(profile.email, 'Email copied')
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const field =
    'w-full border-0 border-b border-line-strong bg-transparent px-0 py-3 text-[17px] text-fg placeholder:text-faint outline-none transition-colors focus:border-accent'

  return (
    <Section
      id="contact"
      index="05"
      label="Contact"
      title={
        <>
          Let’s build something <em className="text-accent">reliable</em>.
        </>
      }
      intro="I’m looking for internships in software engineering, AI applications and backend development. If that’s the kind of work you do, I’d like to hear about it."
    >
      <div className="grid gap-14 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-6 md:col-start-4 lg:col-span-5 lg:col-start-4">
          <p className="label">Write to me</p>
          <a
            href={`mailto:${profile.email}`}
            className="link mt-3 inline-block break-all font-serif text-[1.9rem] leading-tight sm:text-[2.4rem]"
          >
            {profile.email}
          </a>
          <div className="mt-3">
            <button onClick={copy} className="font-mono text-[13px] text-muted transition-colors hover:text-accent">
              {copied ? '✓ copied' : '[ copy address ]'}
            </button>
          </div>

          <dl className="mt-10 border-b border-line">
            {channels.map((c) => (
              <div key={c.label} className="grid grid-cols-[110px_1fr] gap-4 border-t border-line py-3.5">
                <dt className="label pt-0.5">{c.label}</dt>
                <dd className="text-[16px]">
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noreferrer" className="link">
                      {c.value} ↗
                    </a>
                  ) : (
                    c.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={80} className="md:col-span-9 md:col-start-4 lg:col-span-4 lg:col-start-9">
          <form onSubmit={submit}>
            <p className="label">Or leave a note</p>
            <label className="mt-2 block">
              <span className="sr-only">Your name</span>
              <input required autoComplete="name" className={field} placeholder="Your name" value={form.name} onChange={set('name')} />
            </label>
            <label className="block">
              <span className="sr-only">Your email</span>
              <input
                required
                type="email"
                autoComplete="email"
                className={field}
                placeholder="Your email"
                value={form.email}
                onChange={set('email')}
              />
            </label>
            <label className="block">
              <span className="sr-only">Message</span>
              <textarea
                required
                rows={4}
                className={`${field} resize-none`}
                placeholder="What are you working on?"
                value={form.message}
                onChange={set('message')}
              />
            </label>
            <button
              type="submit"
              className="group mt-8 inline-flex h-12 items-center gap-3 rounded-md bg-fg px-6 text-[15px] font-medium text-bg transition-colors hover:bg-accent"
            >
              Send message <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <p className="mt-3 text-[13px] text-faint">Opens your email app with the note pre-filled.</p>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
