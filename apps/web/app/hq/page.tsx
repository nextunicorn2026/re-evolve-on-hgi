'use client'

import { motion } from 'framer-motion'
import CinematicBackground from '../components/CinematicBackground'

const metrics = [
  { label: 'Active Agents', value: '642' },
  { label: 'Ecosystems', value: '128+' },
  { label: 'System Health', value: '99.98%' },
  { label: 'Data Flow', value: '9.82PB' }
]

export default function HQPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      <CinematicBackground />

      <div className="relative z-10 flex min-h-screen">
        <aside className="w-[280px] border-r border-cyan-500/10 bg-black/30 backdrop-blur-2xl p-6 hidden lg:flex flex-col justify-between">
          <div>
            <div className="mb-10">
              <h1 className="text-3xl font-black tracking-widest text-cyan-300">
                RE-EVOLVE
              </h1>
              <p className="text-cyan-500 uppercase text-sm tracking-[0.4em]">
                ON HGI HQ
              </p>
            </div>

            <nav className="space-y-3">
              {[
                'Mission Control',
                'Governance Grid',
                'Agent Orchestration',
                'Telemetry Mesh',
                'Infrastructure Matrix',
                'Memory Vault'
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-cyan-500/10 bg-cyan-500/5 px-4 py-4 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
                >
                  {item}
                </div>
              ))}
            </nav>
          </div>

          <div className="rounded-3xl border border-violet-500/20 bg-violet-500/10 p-5">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300">
              Alpha Omega Core
            </p>
            <h3 className="mt-3 text-2xl font-bold">Operational</h3>
          </div>
        </aside>

        <section className="flex-1 p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="uppercase tracking-[0.4em] text-cyan-400 text-sm">
                Human Governed Adaptive Intelligence
              </p>

              <h1 className="mt-4 text-5xl lg:text-7xl font-black leading-none">
                HQ Mission
                <br />
                Command Center
              </h1>
            </div>

            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-6 py-3 text-emerald-300"
            >
              SYSTEM STATUS : OPTIMAL
            </motion.div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {metrics.map((metric) => (
              <motion.div
                whileHover={{ scale: 1.03 }}
                key={metric.label}
                className="rounded-3xl border border-cyan-500/10 bg-black/30 backdrop-blur-xl p-6 shadow-[0_0_40px_rgba(0,255,255,0.08)]"
              >
                <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs">
                  {metric.label}
                </p>
                <h2 className="mt-5 text-5xl font-black text-white">
                  {metric.value}
                </h2>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 xl:grid-cols-[1.4fr_0.6fr] gap-8">
            <div className="relative overflow-hidden rounded-[32px] border border-violet-500/20 bg-black/40 p-8 backdrop-blur-2xl min-h-[520px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_60%)]" />

              <div className="relative z-10">
                <p className="text-violet-300 uppercase tracking-[0.4em] text-xs">
                  Neural Intelligence Sphere
                </p>

                <div className="relative mx-auto mt-16 h-[320px] w-[320px] rounded-full border border-cyan-400/30 bg-cyan-400/5 shadow-[0_0_120px_rgba(0,255,255,0.25)]">
                  <div className="absolute inset-8 rounded-full border border-violet-400/30 animate-pulse" />
                  <div className="absolute inset-0 animate-spin-slow rounded-full border-t border-cyan-300/60" />
                  <div className="absolute inset-[-30px] rounded-full border border-violet-500/20" />

                  <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div>
                      <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">
                        HGI CORE
                      </p>
                      <h2 className="mt-3 text-4xl font-black">LIVE</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-cyan-500/10 bg-black/30 p-6 backdrop-blur-xl">
                <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs">
                  Live Operational Feed
                </p>

                <div className="mt-6 space-y-4 text-sm">
                  {[
                    'Agent orchestration stabilized',
                    'Realtime telemetry synchronized',
                    'Governance pulse active',
                    'Panani X runtime connected'
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-cyan-500/10 bg-cyan-500/5 px-4 py-4"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-emerald-500/10 bg-emerald-500/5 p-6 backdrop-blur-xl">
                <p className="text-emerald-300 uppercase tracking-[0.3em] text-xs">
                  Ecosystem Pulse
                </p>

                <div className="mt-8 h-3 rounded-full bg-black/40 overflow-hidden">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '96%' }}
                    transition={{ duration: 2 }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                  />
                </div>

                <div className="mt-4 flex justify-between text-sm text-emerald-300">
                  <span>Adaptive Intelligence</span>
                  <span>96.7%</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
