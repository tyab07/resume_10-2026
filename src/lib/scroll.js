// Single shared Lenis instance so nav links and the command menu scroll the same way.
let lenis = null

export const setLenis = (instance) => {
  lenis = instance
}

export function scrollToId(id) {
  const target = id === 'home' ? 0 : document.getElementById(id)
  if (target === null) return
  if (lenis) lenis.scrollTo(target, { duration: 1.2 }) // honours CSS scroll-margin-top
  else if (target === 0) window.scrollTo({ top: 0, behavior: 'smooth' })
  else target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  history.replaceState(null, '', id === 'home' ? location.pathname : `#${id}`)
}

// Click handler for in-page anchor links (<a href="#id">).
export function onAnchorClick(e) {
  const href = e.currentTarget.getAttribute('href')
  if (!href?.startsWith('#') || e.metaKey || e.ctrlKey) return
  e.preventDefault()
  scrollToId(href.slice(1) || 'home')
}
