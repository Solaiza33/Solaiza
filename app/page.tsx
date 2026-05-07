'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

const carreras = [
  { num: '01', nombre: 'Copa Guanajuato DH', lugar: 'Sierra de Lobos', fecha: 'May 2025', pos: '2°', tiempo: '3:42.8' },
  { num: '02', nombre: 'Urbano Irapuato Classic', lugar: 'Centro Histórico', fecha: 'Mar 2025', pos: '5°', tiempo: '2:18.4' },
  { num: '03', nombre: 'Descenso Nacional MTB', lugar: 'Puebla', fecha: 'Feb 2025', pos: '1°', tiempo: '4:01.2' },
  { num: '04', nombre: 'Callejón de Guanajuato Open', lugar: 'Guanajuato', fecha: 'Dic 2024', pos: '3°', tiempo: '1:55.6' },
]

const logros = [
  { icon: '🥈', title: 'Subcampeón Elite Nacional', sub: '2023 y 2024' },
  { icon: '🏆', title: 'Campeón Juvenil y Expertos', sub: '2018 y 2019' },
  { icon: '🥇', title: '3× Campeón Elite Estatal', sub: 'Guanajuato' },
  { icon: '🌎', title: 'Meta: Copa del Mundo UCI', sub: 'Top 10 Panamericanos' },
]

export default function Home() {
  const [fotos, setFotos] = useState<{ url: string; name: string }[]>([])

  useEffect(() => {
    supabase.storage.from('fotos').list('carreras', { sortBy: { column: 'created_at', order: 'desc' }, limit: 4 })
      .then(({ data }) => {
        if (!data) return
        setFotos(
          data
            .filter((f: { name: string }) => f.name !== '.emptyFolderPlaceholder')
            .slice(0, 4)
            .map((f: { name: string }) => ({
              name: f.name,
              url: supabase.storage.from('fotos').getPublicUrl(`carreras/${f.name}`).data.publicUrl,
            }))
        )
      })
  }, [])

  return (
    <main>

      {/* ── HERO ── */}
      <section style={{ padding: '5rem 3rem 4rem', position: 'relative' }}>
        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ width: 40, height: 2, background: '#00FFD1' }} />
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.8rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#00FFD1' }}>
            Downhill MTB · Categoría Experto · #33
          </span>
        </div>

        {/* Name */}
        <div style={{ marginBottom: '1rem' }}>
          <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(4.5rem,11vw,9rem)', lineHeight: 0.88, letterSpacing: '0.02em', display: 'block', margin: 0 }}>
            Francisco
          </h1>
          <h1 className="glitch" data-text="Solaiza" style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(4.5rem,11vw,9rem)', lineHeight: 0.88, letterSpacing: '0.02em', color: '#00FFD1', display: 'block', margin: 0 }}>
            Solaiza
          </h1>
        </div>

        {/* Bio */}
        <p style={{ fontFamily: "'Barlow',sans-serif", fontSize: '1.05rem', color: '#6B7A99', maxWidth: 520, lineHeight: 1.75, marginBottom: '2.5rem' }}>
          Ciclista de descenso en categoría experto, nacido en Ensenada, Baja California. Con un gran talento arriba de la bicicleta y metas claras: el podio nacional y las copas del mundo UCI.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/galeria" className="btn-main" style={{ color: '#050810' }}>Ver galería</Link>
          <Link href="/patrocinadores" className="btn-sec">Media kit</Link>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="divider" />
      <div className="stats-bar" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderBottom: '1px solid rgba(0,255,209,0.1)' }}>
        {[
          { num: '1.45M', label: 'Visualizaciones' },
          { num: '39.4K', label: 'Seguidores' },
          { num: '6+',    label: 'Títulos nacionales' },
          { num: '94',    label: 'km/h top speed' },
        ].map(({ num, label }, i) => (
          <div key={label} style={{ padding: '1.8rem 2.5rem', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2.8rem', color: '#00FFD1', lineHeight: 1 }}>{num}</div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#6B7A99', marginTop: 4 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* ── ACERCA DE MÍ ── */}
      <section className="about-grid" style={{ padding: '5rem 3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
        {/* Text */}
        <div>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.75rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#00FFD1', marginBottom: '0.8rem' }}>El atleta</div>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '3.5rem', letterSpacing: '0.05em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Acerca<br /><span style={{ color: '#00FFD1' }}>de mí</span>
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#6B7A99', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Soy Francisco Solaiza, ciclista en la modalidad de DownHill en la categoría experto y con un gran talento arriba de mi bicicleta. Nacido en Ensenada, Baja California, México.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#6B7A99', lineHeight: 1.8, marginBottom: '2rem' }}>
            Mis metas personales como deportista son ser campeón nacional dentro de esta modalidad, tener la oportunidad de competir en Copas del Mundo UCI y entrar en el top 10 en los Juegos Panamericanos, así mismo poder representar a marcas reconocidas a nivel nacional e internacional.
          </p>
          {/* Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              { icon: '📞', val: '(646) 107 1145' },
              { icon: '✉️', val: 'francisco2000solaiza@gmail.com' },
              { icon: '📘', val: 'Jesus Francisco Solaiza' },
            ].map(({ icon, val }) => (
              <div key={val} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.9rem', letterSpacing: '0.05em', color: '#E8F0FF' }}>
                <span>{icon}</span>
                <span style={{ color: '#6B7A99' }}>{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Photo placeholder / logros */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* Avatar card */}
          <div style={{ background: '#121624', border: '1px solid rgba(0,255,209,0.15)', padding: '2.5rem', textAlign: 'center', position: 'relative', marginBottom: 2 }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#00FFD1,#FF2D78,#00FFD1)' }} />
            <div style={{ position: 'relative', width: 100, height: 100, margin: '0 auto 1rem', display: 'inline-block' }}>
              <div style={{ width: 100, height: 100, borderRadius: '50%', border: '3px solid #00FFD1', background: 'linear-gradient(135deg,#1a2a3a,#0a1a2a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Bebas Neue',sans-serif", fontSize: '2.5rem', color: '#00FFD1', boxShadow: '0 0 30px rgba(0,255,209,0.2)' }}>FS</div>
              <div className="avatar-ring" />
            </div>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.6rem', letterSpacing: '0.1em' }}>Francisco Solaiza</div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#00FFD1', marginTop: 4 }}>Downhill · Experto · #33</div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.75rem', color: '#6B7A99', marginTop: 6 }}>Ensenada, Baja California · México</div>
          </div>

          {/* Logros */}
          {logros.map(({ icon, title, sub }) => (
            <div key={title} className="ach-item">
              <div style={{ fontSize: '1.5rem', flexShrink: 0, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,255,209,0.07)', border: '1px solid rgba(0,255,209,0.15)' }}>{icon}</div>
              <div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{title}</div>
                <div style={{ fontSize: '0.8rem', color: '#6B7A99', marginTop: 2 }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CARRERAS ── */}
      <div className="divider" />
      <section style={{ padding: '5rem 3rem', background: '#0D1020' }}>
        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.75rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#00FFD1', marginBottom: '0.8rem' }}>Historial</div>
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '3.5rem', letterSpacing: '0.05em', marginBottom: '3rem' }}>
          Mis <span style={{ color: '#00FFD1' }}>carreras</span>
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {carreras.map((c) => (
            <div key={c.num} className="carrera-row" style={{ display: 'grid', gridTemplateColumns: '56px 1fr auto auto', alignItems: 'center', gap: '2rem', padding: '1.4rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)', transition: 'padding-left 0.3s' }}>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2.2rem', color: 'rgba(0,255,209,0.12)', lineHeight: 1 }}>{c.num}</div>
              <div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: '1.05rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{c.nombre}</div>
                <div style={{ fontSize: '0.82rem', color: '#6B7A99', marginTop: 2 }}>📍 {c.lugar} · {c.fecha}</div>
              </div>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.8rem', color: c.pos === '1°' ? '#00FFD1' : c.pos === '2°' || c.pos === '3°' ? '#E8F0FF' : '#6B7A99' }}>{c.pos}</div>
              <div className="carrera-tiempo" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.95rem', color: '#6B7A99', textAlign: 'right' }}>
                {c.tiempo}<br /><span style={{ fontSize: '0.7rem' }}>tiempo</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── GALERÍA CTA ── */}
      <div className="divider" />
      <section className="cta-grid" style={{ padding: '5rem 3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.75rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#00FFD1', marginBottom: '0.8rem' }}>Fotos en acción</div>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '3.5rem', letterSpacing: '0.05em', lineHeight: 1, marginBottom: '1.2rem' }}>
            Cada bajada<br /><span style={{ color: '#00FFD1' }}>en imágenes</span>
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#6B7A99', lineHeight: 1.75, marginBottom: '2rem' }}>
            Fotos de entrenamientos, competencias y momentos en la pista. La velocidad capturada en cada toma.
          </p>
          <Link href="/galeria" className="btn-main" style={{ color: '#050810' }}>Ver galería completa</Link>
        </div>
        <div className="cta-photos" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          {fotos.length > 0
            ? fotos.map((foto, i) => (
                <div key={foto.name} style={{ position: 'relative', overflow: 'hidden', background: '#121624', aspectRatio: i === 0 ? '2/1' : '1', gridColumn: i === 0 ? 'span 2' : 'span 1' }}>
                  <Image src={foto.url} alt={foto.name} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 400px" />
                </div>
              ))
            : ['📸','🏔️','🚵','⚡'].map((icon, i) => (
                <div key={i} style={{ background: '#121624', border: '1px solid rgba(0,255,209,0.1)', aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', opacity: 0.5 }}>
                  {icon}
                </div>
              ))
          }
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <div className="divider" />
      <section style={{ padding: '5rem 3rem', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,255,209,0.04) 0%, transparent 70%)' }} />
        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.75rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#6B7A99', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>Contacto</div>
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(3rem,6vw,5rem)', letterSpacing: '0.05em', lineHeight: 1, marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
          ¿Hablamos?<br /><span style={{ color: '#00FFD1' }}>Escríbeme</span>
        </h2>
        <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.9rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B7A99', marginBottom: '2.5rem', position: 'relative', zIndex: 1 }}>
          Patrocinios · Colaboraciones · Competencias
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
          <a href="mailto:francisco2000solaiza@gmail.com" className="btn-main" style={{ color: '#050810' }}>📩 Enviar email</a>
          <a href="tel:6461071145" className="btn-sec">📞 Llamar</a>
        </div>
        <div className="contact-row" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '3rem', position: 'relative', zIndex: 1 }}>
          {[
            { label: 'Teléfono', val: '(646) 107 1145' },
            { label: 'Email', val: 'francisco2000solaiza@gmail.com' },
            { label: 'Facebook', val: 'Jesus Francisco Solaiza' },
          ].map(({ label, val }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B7A99', marginBottom: '0.3rem' }}>{label}</div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.9rem', color: '#E8F0FF' }}>{val}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <div className="divider" />
      <footer className="site-footer" style={{ padding: '2rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: "'Bebas Neue',sans-serif", letterSpacing: '0.15em', color: '#00FFD1' }}>FRANCISCO SOLAIZA · #33</span>
        <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.8rem', color: '#6B7A99', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Downhill MTB · Ensenada, México</span>
        <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.8rem', color: 'rgba(0,255,209,0.4)', letterSpacing: '0.1em' }}>🚵 Sin frenos</span>
      </footer>

    </main>
  )
}