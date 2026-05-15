import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'RE-EVOLVE ON HGI',
  description: 'Human-Governed Adaptive Intelligence Ecosystem'
}

export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
