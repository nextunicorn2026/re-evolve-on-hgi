export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-cyan-400 flex items-center justify-center overflow-hidden">
      <div className="text-center px-6">
        <div className="mb-6 inline-flex items-center rounded-full border border-cyan-500/40 px-4 py-2 text-sm uppercase tracking-[0.3em]">
          RE-EVOLVE ON HGI
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tight">
          Human-Governed
          <br />
          Adaptive Intelligence
        </h1>

        <p className="mt-8 text-lg md:text-2xl max-w-3xl mx-auto text-cyan-200/70 leading-relaxed">
          A cinematic neural civilization layer orchestrating ecosystems,
          enterprises, governance, realtime telemetry, and adaptive
          intelligence across the RE-EVOLVE universe.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/platform"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            Enter Platform
          </a>

          <a
            href="/hq"
            className="rounded-xl border border-cyan-500/40 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-500/10"
          >
            Open HQ
          </a>
        </div>
      </div>
    </main>
  )
}
