import Link from 'next/link'

const carreras = [
  { num: '01', nombre: 'Copa Guanajuato DH', lugar: 'Sierra de Lobos', fecha: 'May 2025', pos: '2°', tiempo: '3:42.8' },
  { num: '02', nombre: 'Urbano Irapuato Classic', lugar: 'Centro Histórico', fecha: 'Mar 2025', pos: '5°', tiempo: '2:18.4' },
  { num: '03', nombre: 'Descenso Nacional MTB', lugar: 'Puebla', fecha: 'Feb 2025', pos: '1°', tiempo: '4:01.2' },
  { num: '04', nombre: 'Callejón de Guanajuato Open', lugar: 'Guanajuato', fecha: 'Dic 2024', pos: '3°', tiempo: '1:55.6' },
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section style={{ padding: '5rem 3rem 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ width: 40, height: 2, background: '#C8FF00' }} />
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.85rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#C8FF00' }}>
            Downhill · Velocidad extrema
          </span>
        </div>

        <h1 className="glitch" data-text="Sin" style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(5rem,12vw,10rem)', lineHeight: 0.9, marginBottom: '0.3rem', display: 'block' }}>
          Sin
        </h1>
        <h1 className="glitch" data-text="frenos" style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(5rem,12vw,10rem)', lineHeight: 0.9, marginBottom: '1.5rem', color: '#C8FF00', display: 'block' }}>
          frenos
        </h1>

        <p style={{ fontFamily: "'Barlow',sans-serif", fontSize: '1.1rem', color: '#6B7A99', maxWidth: 480, lineHeight: 1.7, marginBottom: '2.5rem' }}>
          Galería de carreras de descenso. Montañas, ciudad y asfalto a toda velocidad. Sube, comparte y revive cada bajada.
        </p>

        <div style={{ display: 'flex', gap: '1rem', paddingBottom: '5rem' }}>
          <Link href="/galeria" className="btn-main" style={{ color: '#050810' }}>Ver galería</Link>
          <Link href="/patrocinadores" className="btn-sec">Patrocinadores</Link>
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ borderTop: '1px solid rgba(0,255,209,0.1)', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
        {[
          { num: '1.45M', label: 'Visualizaciones' },
          { num: '39.4K', label: 'Seguidores' },
          { num: '6+', label: 'Títulos nacionales' },
          { num: '94 km/h', label: 'Top speed' },
        ].map(({ num, label }) => (
          <div key={label} style={{ padding: '1.5rem 3rem', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2.5rem', color: '#C8FF00' }}>{num}</div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B7A99', marginTop: 4 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Carreras */}
      <section style={{ padding: '5rem 3rem', background: '#0D1020' }}>
        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.75rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#00FFD1', marginBottom: '0.8rem' }}>Historial</div>
        <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '3rem', letterSpacing: '0.05em', marginBottom: '3rem' }}>
          Mis <span style={{ color: '#00FFD1' }}>carreras</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          {carreras.map((c) => (
            <div key={c.num} style={{ display: 'grid', gridTemplateColumns: '60px 1fr auto auto', alignItems: 'center', gap: '2rem', padding: '1.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2.5rem', color: 'rgba(0,255,209,0.15)', lineHeight: 1 }}>{c.num}</div>
              <div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: '1.1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{c.nombre}</div>
                <div style={{ fontSize: '0.85rem', color: '#6B7A99', marginTop: 2 }}>📍 {c.lugar} · {c.fecha}</div>
              </div>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.8rem', color: c.pos === '1°' ? '#C8FF00' : c.pos === '2°' || c.pos === '3°' ? '#E8F0FF' : '#6B7A99' }}>{c.pos}</div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '1rem', color: '#6B7A99', textAlign: 'right' }}>
                {c.tiempo}<br /><span style={{ fontSize: '0.75rem' }}>tiempo</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 3rem', textAlign: 'center', position: 'relative', borderTop: '1px solid rgba(0,255,209,0.1)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,255,209,0.04) 0%, transparent 70%)' }} />
        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.75rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#6B7A99', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>¿Quieres patrocinar?</div>
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(3rem,7vw,6rem)', lineHeight: 0.95, marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
          Sé parte del<br /><span style={{ color: '#00FFD1' }}>podium</span>
        </h2>
        <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B7A99', marginBottom: '2.5rem', position: 'relative', zIndex: 1 }}>
          Marcas que comparten los valores de rendimiento e innovación
        </p>
        <Link href="/patrocinadores" className="btn-main" style={{ position: 'relative', zIndex: 1, color: '#050810' }}>Ver media kit</Link>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(0,255,209,0.1)' }}>
        <span style={{ fontFamily: "'Bebas Neue',sans-serif", letterSpacing: '0.15em', color: '#00FFD1' }}>FRANCISCO SOLAIZA · #33</span>
        <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.8rem', color: '#6B7A99', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Downhill MTB · México</span>
        <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.8rem', letterSpacing: '0.15em', color: 'rgba(0,255,209,0.4)' }}>🚵 Sin frenos</span>
      </footer>
    </main>
  )
}