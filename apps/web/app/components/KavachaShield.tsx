'use client'

import { motion } from 'framer-motion'

const layers = [
  'Threat Intelligence Mesh',
  'Quantum Governance Shield',
  'Adaptive Firewall Grid',
  'Agent Integrity Validation',
  'Neural Sovereignty Layer'
]

export default function KavachaShield() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-amber-500/20 bg-black/40 p-8 backdrop-blur-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.18),transparent_60%)]" />

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-amber-300 uppercase tracking-[0.4em] text-xs">
              KAVACHA PROTECTION LAYER
            </p>
            <h2 className="mt-3 text-4xl font-black">
              Sovereign Intelligence Shield
            </h2>
          </div>

          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="flex h-24 w-24 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/10 shadow-[0_0_80px_rgba(251,191,36,0.35)]"
          >
            <span className="text-2xl font-black text-amber-200">K</span>
          </motion.div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {layers.map((layer, index) => (
            <motion.div
              key={layer}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-amber-500/10 bg-amber-500/5 px-5 py-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-amber-100">{layer}</span>
                <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-amber-500/10 bg-black/30">
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
            className="h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-transparent"
          />

          <div className="flex items-center justify-between px-6 py-5 text-sm uppercase tracking-[0.3em] text-amber-200">
            <span>KAVACHA SHIELD STATUS</span>
            <span>ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  )
}
