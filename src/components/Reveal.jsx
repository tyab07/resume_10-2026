import { motion } from 'framer-motion'

// Quiet fade-in on first scroll into view. Respects reduced motion via <MotionConfig>.
export default function Reveal({ children, delay = 0, y = 14, className = '', as = 'div', ...rest }) {
  const M = motion[as] ?? motion.div
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: [0.25, 1, 0.5, 1] }}
      {...rest}
    >
      {children}
    </M>
  )
}
