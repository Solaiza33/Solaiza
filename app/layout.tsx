import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Francisco Solaiza · Downhill MTB',
  description: 'Atleta elite de downhill MTB. Galería de carreras y media kit para patrocinadores.',
  openGraph: {
    title: 'Francisco Solaiza · Downhill MTB',
    description: 'Subcampeón elite nacional 2023 y 2024. Portafolio y galería de carreras.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          minHeight: '100vh',
          boxShadow: '0 0 80px rgba(0,0,0,0.8)',
        }}>
          {children}
        </div>
      </body>
    </html>
  )
}