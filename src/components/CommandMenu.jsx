import { Command } from 'cmdk'
import { ArrowUpRight, Copy, CornerDownLeft, FileText, Hash, Moon, Sun } from 'lucide-react'
import { nav, profile, projects } from '../data'
import { scrollToId } from '../lib/scroll'
import { copyText } from '../lib/copy'
import { Github, Linkedin } from './icons'

const repoLinks = projects.flatMap((p) =>
  p.links.filter((l) => l.type === 'github' && l.href.includes('github.com/tyab07/')).map((l) => ({ ...l, project: p.title })),
)

function Item({ onSelect, icon: Icon, children, hint, keywords }) {
  return (
    <Command.Item onSelect={onSelect} keywords={keywords}>
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-line bg-bg-soft text-muted">
        <Icon width={14} height={14} />
      </span>
      <span className="min-w-0 flex-1 truncate">{children}</span>
      {hint && <span className="shrink-0 font-mono text-[11px] text-muted">{hint}</span>}
    </Command.Item>
  )
}

export default function CommandMenu({ open, onOpenChange, theme, onToggleTheme }) {
  const run = (fn) => () => {
    onOpenChange(false)
    // Let the dialog close (and release scroll lock) before acting.
    setTimeout(fn, 60)
  }
  const openUrl = (url) => run(() => window.open(url, '_blank', 'noopener,noreferrer'))

  return (
    <Command.Dialog open={open} onOpenChange={onOpenChange} label="Command menu" loop>
      <Command.Input placeholder="Type a command or search…" />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="Navigate">
          <Item icon={Hash} onSelect={run(() => scrollToId('home'))}>
            Home
          </Item>
          {nav.map((n) => (
            <Item key={n.id} icon={Hash} onSelect={run(() => scrollToId(n.id))}>
              {n.label}
            </Item>
          ))}
        </Command.Group>

        <Command.Group heading="Actions">
          <Item icon={Copy} keywords={['email', 'mail', 'contact']} onSelect={run(() => copyText(profile.email, 'Email copied'))}>
            Copy email address
          </Item>
          <Item
            icon={FileText}
            keywords={['cv', 'resume', 'download']}
            onSelect={run(() => {
              const a = document.createElement('a')
              a.href = profile.resume
              a.download = ''
              a.click()
            })}
          >
            Download résumé
          </Item>
          <Item icon={theme === 'dark' ? Sun : Moon} keywords={['theme', 'dark', 'light']} onSelect={run(onToggleTheme)}>
            Switch to {theme === 'dark' ? 'light' : 'dark'} theme
          </Item>
        </Command.Group>

        <Command.Group heading="Profiles">
          <Item icon={Github} onSelect={openUrl(profile.github)} hint="github.com/tyab07">
            GitHub
          </Item>
          <Item icon={Linkedin} onSelect={openUrl(profile.linkedin)} hint="LinkedIn">
            LinkedIn
          </Item>
        </Command.Group>

        <Command.Group heading="Source code">
          {repoLinks.map((l) => (
            <Item key={l.href} icon={ArrowUpRight} onSelect={openUrl(l.href)} keywords={['repo', 'code', 'source']}>
              {l.project}
              {l.label !== 'Source' && <span className="text-muted"> · {l.label}</span>}
            </Item>
          ))}
        </Command.Group>
      </Command.List>
      <div className="flex items-center justify-between border-t border-line px-4 py-2.5 font-mono text-[11px] text-muted">
        <span className="inline-flex items-center gap-1.5">
          <CornerDownLeft width={12} height={12} /> to select
        </span>
        <span>esc to close</span>
      </div>
    </Command.Dialog>
  )
}
