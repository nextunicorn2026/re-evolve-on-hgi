'use client'

import { motion } from 'framer-motion'

const events = [
  'Governance Mesh Synced',
  '642 Agents Operational',
  'Realtime Telemetry Active',
  'Panani X Runtime Connected',
  'Neural Intelligence Stable'
]

export default function TelemetryTicker() {
  return (
    <div className="overflow-hidden rounded-2xl border border-cyan-500/10 bg-black/30 backdrop-blur-xl py-3">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
        className="flex gap-10 whitespace-nowrap px-6 text-cyan-300 uppercase tracking-[0.3em] text-xs"
      >
        {[...events, ...events].map((event, index) => (
          <span key={index}>{event}</span>
        ))}
      </motion.div>
    </div>
  )
}
