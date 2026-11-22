import { nav, profile } from '../data'
import { onAnchorClick } from '../lib/scroll'
import { Wordmark } from './Navbar'

export default function Footer({ onOpenMenu }) {
  return (
    <footer className="border-t-2 border-fg">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <a href="#home" onClick={onAnchorClick} aria-label="Back to top">
              <Wordmark />
            </a>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted">
              Practical AI features, dependable backend services, and software built to hold up in production.
            </p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-2.5 text-[15px] md:col-span-4 md:col-start-7">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={onAnchorClick} className="link w-fit text-muted">
                {n.label}
              </a>
            ))}
            <a href={profile.resume} download className="link w-fit text-muted">
              Résumé ↓
            </a>
          </nav>
          <div className="flex flex-col gap-2.5 text-[15px] md:col-span-2">
            <a href={profile.github} target="_blank" rel="noreferrer" className="link w-fit text-muted">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link w-fit text-muted">
              LinkedIn ↗
            </a>
            <a href={`mailto:${profile.email}`} className="link w-fit text-muted">
              Email
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 font-mono text-[12px] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name} — Faisalabad, Pakistan
          </p>
          <div className="flex gap-5">
            <button onClick={onOpenMenu} className="transition-colors hover:text-fg">
              Command menu
            </button>
            <a href="#home" onClick={onAnchorClick} className="transition-colors hover:text-fg">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
