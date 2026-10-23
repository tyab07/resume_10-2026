import { Box, Chart, Cpu, Database, MessageCode, Network, Spark, Wrench } from './icons'
import { techLogos } from '../techLogos'

// Brand marks cover the concrete tools; these cover concepts without a logo.
const fallbacks = {
  'Tool / function calling': Wrench,
  RAG: Spark,
  'Vector embeddings': Box,
  ChromaDB: Database,
  'Prompt engineering': MessageCode,
  'REST APIs': Network,
  SQL: Database,
  XGBoost: Cpu,
  SHAP: Chart,
}

function isDark(hex) {
  const n = parseInt(hex, 16)
  const r = (n >> 16) & 255
  const g = (n >> 8) & 255
  const b = n & 255
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 < 0.42
}

export default function TechLogo({ name, className = 'h-4 w-4' }) {
  const logo = techLogos[name]

  if (logo) {
    const dark = isDark(logo.hex)
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill={dark ? 'currentColor' : `#${logo.hex}`}
        aria-hidden="true"
      >
        <path d={logo.path} />
      </svg>
    )
  }

  const Icon = fallbacks[name] ?? Spark
  return <Icon className={className} aria-hidden="true" />
}
