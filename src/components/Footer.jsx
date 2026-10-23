import { nav, profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.9fr]">
          <div className="max-w-sm">
            <a href="#home" className="inline-flex items-center gap-2.5" aria-label="Back to top">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-fg text-sm font-bold text-bg">MT</span>
              <span className="font-semibold tracking-tight">{profile.name}</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Practical AI features, dependable backend services, and software built to hold up in production.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Sections</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="text-muted transition-colors hover:text-fg">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Connect</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${profile.email}`} className="text-muted transition-colors hover:text-fg">
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted transition-colors hover:text-fg"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted transition-colors hover:text-fg"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href={profile.resume} download className="text-muted transition-colors hover:text-fg">
                  Resume ↓
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em]">{profile.location}</p>
          <a href="#home" className="transition-colors hover:text-fg">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
