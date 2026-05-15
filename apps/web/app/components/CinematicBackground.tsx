'use client'

export default function CinematicBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.15),transparent_40%),radial-gradient(circle_at_bottom,rgba(139,92,246,0.18),transparent_35%)]" />

      <div className="neural-grid absolute inset-0 opacity-20" />

      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="scanline" />
    </div>
  )
}
