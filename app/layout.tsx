import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Francisco Solaiza · Downhill MTB',
  description: 'Atleta elite de downhill MTB. Galería de carreras y media kit para patrocinadores.',
  openGraph: {
    title: 'Francisco Solaiza · Downhill MTB',
    description: 'Subcampeón elite nacional 2023 y 2024. Portafolio y galería de carreras.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ background: '#050810', margin: 0 }}>
        {/* Glows — fixed, full screen */}
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
          <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,255,209,0.06) 0%, transparent 70%)', top: -100, right: -100, animation: 'pulse1 6s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,45,120,0.05) 0%, transparent 70%)', bottom: 200, left: -100, animation: 'pulse2 8s ease-in-out infinite' }} />
        </div>
        {/* Grid — fixed, full screen */}
        <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(0,255,209,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,209,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Navbar — full width */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <Navbar />
        </div>

        {/* Page content — max 1400px centered */}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1400, margin: '0 auto' }}>
          {children}
        </div>
      </body>
    </html>
  )
}