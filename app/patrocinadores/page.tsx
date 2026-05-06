import Navbar from '@/components/Navbar'

const logros = [
  { icon: '🥈', title: 'Subcampeón Elite Nacional', sub: '2023 y 2024 · Categoría Elite' },
  { icon: '🏆', title: 'Campeón Juvenil y Expertos', sub: '2018 y 2019 · Doble título' },
  { icon: '🥇', title: '3× Campeón Elite Estatal', sub: 'Múltiples temporadas · Guanajuato' },
  { icon: '🚵', title: 'Atleta Profesional Activo', sub: 'Circuito nacional · Ensenada a Irapuato' },
]

const oferta = [
  {
    num: '01', icon: '📸',
    title: 'Representación en competencias',
    desc: 'Visibilidad de marca en entrenamientos y competencias nacionales con alcance real en el circuito elite.',
  },
  {
    num: '02', icon: '🎥',
    title: 'Contenido de calidad',
    desc: 'Creación de contenido auténtico: videos de carreras, entrenamientos y behind-the-scenes con alta producción.',
  },
  {
    num: '03', icon: '📣',
    title: 'Promoción auténtica',
    desc: 'Difusión genuina desde la experiencia real como atleta elite, con credibilidad ante la comunidad ciclista nacional.',
  },
]

const stats = [
  { num: '1.45M', label: 'Visualizaciones totales' },
  { num: '39.4K', label: 'Seguidores activos' },
  { num: '36,663', label: 'Interacciones totales' },
  { num: '310', label: 'Publicaciones' },
  { num: '1,293', label: 'Siguiendo (nicho)' },
  { num: '2.5%', label: 'Engagement rate' },
]

const barras = [
  { label: 'TikTok · Videos', val: '1.45M views', w: '92%' },
  { label: 'Instagram · Seguidores', val: '39.4K', w: '70%' },
  { label: 'Engagement rate', val: '2.5%', w: '55%' },
  { label: 'Interacciones totales', val: '36,663', w: '65%' },
]

export default function Patrocinadores() {
  return (
    <main className="min-h-screen bg-[#050810] text-[#E8F0FF]">
      {/* Grid background */}
      <div className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,255,209,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,209,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute w-[600px] h-[600px] rounded-full -top-32 -right-32"
          style={{ background: 'radial-gradient(circle, rgba(0,255,209,0.06) 0%, transparent 70%)' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full bottom-48 -left-24"
          style={{ background: 'radial-gradient(circle, rgba(255,45,120,0.05) 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero */}
        <section className="px-8 py-20 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex-1 max-w-20 h-px bg-[#00FFD1]/40" />
            <span className="font-barlow text-xs tracking-widest uppercase text-[#00FFD1]">
              Atleta Elite · Downhill MTB
            </span>
            <div className="flex-1 max-w-20 h-px bg-[#00FFD1]/40" />
          </div>

          <h1 className="font-bebas leading-none mb-2" style={{ fontSize: 'clamp(4rem,10vw,9rem)' }}>
            <span className="text-[#00FFD1] glitch" data-text="Francisco">Francisco</span><br />
            <span className="text-[#FF2D78]">Solaiza</span>
          </h1>
          <p className="font-barlow text-sm text-gray-500 tracking-widest uppercase mb-12">
            Ciclismo competitivo de alto rendimiento · Nivel nacional
          </p>

          {/* Athlete card */}
          <div className="max-w-2xl mx-auto border border-[#00FFD1]/15 bg-[#121624] p-8 grid grid-cols-[100px_1fr] gap-6 items-center text-left relative">
            <div className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: 'linear-gradient(90deg, #00FFD1, #FF2D78, #00FFD1)' }} />
            <div className="w-24 h-24 rounded-full border-2 border-[#00FFD1] bg-gradient-to-br from-[#1a2a3a] to-[#0a1a2a] flex items-center justify-center font-bebas text-3xl text-[#00FFD1]"
              style={{ boxShadow: '0 0 30px rgba(0,255,209,0.2)' }}>
              FS
            </div>
            <div>
              <h2 className="font-bebas text-3xl tracking-wide mb-1">Francisco Solaiza</h2>
              <p className="font-barlow text-sm text-[#00FFD1] tracking-widest mb-2">@francisco_solaiza</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Deportista de alto rendimiento especializado en downhill MTB. Representación elite nacional
                con presencia en competencias de Ensenada a Irapuato.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="max-w-3xl mx-auto mt-0.5 grid grid-cols-3">
            {stats.map(({ num, label }, i) => (
              <div key={label}
                className="bg-[#121624] border border-[#00FFD1]/10 py-6 px-4 text-center hover:border-[#00FFD1]/30 transition-colors">
                <div className={`font-bebas text-4xl mb-1 ${i % 3 === 0 ? 'text-[#00FFD1]' : i % 3 === 1 ? 'text-[#FF2D78]' : 'text-[#C8FF00]'}`}>
                  {num}
                </div>
                <div className="font-barlow text-xs tracking-widest uppercase text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Logros */}
        <section className="px-8 py-16">
          <p className="font-barlow text-xs tracking-widest uppercase text-[#00FFD1] mb-2">Trayectoria deportiva</p>
          <h2 className="font-bebas text-5xl tracking-wide mb-10">Palmarés y <span className="text-[#00FFD1]">logros</span></h2>
          <div className="grid grid-cols-2 gap-0.5">
            {logros.map(({ icon, title, sub }) => (
              <div key={title}
                className="bg-[#121624] border border-[#00FFD1]/10 p-6 flex items-center gap-5 hover:border-[#00FFD1]/30 hover:translate-x-1 transition-all">
                <div className="w-14 h-14 flex items-center justify-center text-2xl bg-[#00FFD1]/07 border border-[#00FFD1]/15 flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <div className="font-barlow font-semibold tracking-wide uppercase text-sm mb-1">{title}</div>
                  <div className="text-sm text-gray-500">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Oferta */}
        <section className="px-8 py-16 bg-[#0D1020] border-y border-[#00FFD1]/10">
          <p className="font-barlow text-xs tracking-widest uppercase text-[#00FFD1] mb-2">Propuesta de valor</p>
          <h2 className="font-bebas text-5xl tracking-wide mb-10">Qué <span className="text-[#00FFD1]">ofrezco</span></h2>
          <div className="grid grid-cols-3 gap-0.5">
            {oferta.map(({ num, icon, title, desc }) => (
              <div key={num}
                className="bg-[#121624] border border-[#00FFD1]/10 p-6 relative hover:border-[#FF2D78]/40 transition-colors group">
                <div className="absolute top-4 right-5 font-bebas text-6xl text-[#FF2D78]/10 leading-none">{num}</div>
                <div className="text-3xl mb-4">{icon}</div>
                <div className="font-barlow font-bold tracking-widest uppercase text-sm mb-3">{title}</div>
                <div className="text-sm text-gray-500 leading-relaxed">{desc}</div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF2D78] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            ))}
          </div>
        </section>

        {/* Alcance */}
        <section className="px-8 py-16">
          <div className="grid grid-cols-2 gap-20">
            <div>
              <p className="font-barlow text-xs tracking-widest uppercase text-[#00FFD1] mb-2">Alcance digital</p>
              <h2 className="font-bebas text-5xl tracking-wide mb-8">Impacto en <span className="text-[#00FFD1]">redes</span></h2>
              <div className="space-y-6">
                {barras.map(({ label, val, w }) => (
                  <div key={label}>
                    <div className="flex justify-between mb-2">
                      <span className="font-barlow text-sm uppercase tracking-widest text-gray-300">{label}</span>
                      <span className="font-bebas text-base text-[#00FFD1]">{val}</span>
                    </div>
                    <div className="h-1.5 bg-white/5 overflow-hidden">
                      <div className="h-full reach-bar-fill"
                        style={{
                          width: w,
                          background: 'linear-gradient(90deg, #00FFD1, #FF2D78)',
                        }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-barlow text-xs tracking-widest uppercase text-[#00FFD1] mb-2">Perfil del atleta</p>
              <h2 className="font-bebas text-5xl tracking-wide mb-6">Valores de <span className="text-[#00FFD1]">marca</span></h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Busco colaboración con marcas que compartan el compromiso por el{' '}
                <strong className="text-white">rendimiento</strong>, la{' '}
                <strong className="text-white">innovación</strong> y el{' '}
                <strong className="text-white">profesionalismo</strong> en el deporte de alto nivel.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Alto rendimiento', 'Innovación', 'Profesionalismo', 'Autenticidad', 'Competencia elite', 'Comunidad MTB', 'Contenido viral', 'Nicho ciclismo MX'].map(v => (
                  <span key={v}
                    className="font-barlow text-xs tracking-widest uppercase px-4 py-2 border border-[#00FFD1]/20 text-[#00FFD1]/70 hover:border-[#00FFD1] hover:text-[#00FFD1] transition-colors cursor-default">
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-8 py-24 text-center relative overflow-hidden border-t border-[#00FFD1]/10">
          <div className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,255,209,0.05) 0%, transparent 70%)' }} />
          <p className="relative z-10 font-barlow text-xs tracking-widest uppercase text-gray-500 mb-4">¿Listo para colaborar?</p>
          <h2 className="relative z-10 font-bebas leading-none mb-4" style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Sé parte del<br /><span className="text-[#00FFD1]">podium</span>
          </h2>
          <p className="relative z-10 font-barlow text-gray-500 tracking-widest uppercase text-sm mb-10">
            A cambio busco apoyo en equipamiento y respaldo para continuar creciendo
          </p>
          <div className="relative z-10 flex gap-4 justify-center">
            <a href="mailto:francisco.solaiza@email.com"
              className="clip-corner bg-[#00FFD1] text-black px-12 py-4 font-bebas text-lg tracking-widest hover:bg-white transition-all inline-block">
              Contactar a Francisco
            </a>
            <a href="https://instagram.com/francisco_solaiza" target="_blank" rel="noopener noreferrer"
              className="clip-corner border border-[#00FFD1]/40 text-[#00FFD1] px-12 py-4 font-bebas text-lg tracking-widest hover:bg-[#00FFD1]/10 transition-all inline-block">
              Ver perfil ↗
            </a>
          </div>

          <div className="relative z-10 flex justify-center gap-12 mt-12">
            {[
              { net: 'Instagram', num: '39.4K' },
              { net: 'TikTok views', num: '1.45M' },
              { net: 'Títulos', num: '6+' },
              { net: 'Años elite', num: '7+' },
            ].map(({ net, num }) => (
              <div key={net} className="text-center">
                <div className="font-barlow text-xs tracking-widest uppercase text-gray-500 mb-1">{net}</div>
                <div className="font-bebas text-2xl text-[#00FFD1]">{num}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="px-8 py-6 border-t border-white/5 flex justify-between items-center">
          <span className="font-bebas tracking-widest text-[#00FFD1]">FRANCISCO SOLAIZA · #33</span>
          <span className="font-barlow text-xs text-gray-600 uppercase tracking-widest">Media Kit 2025 · Downhill MTB · México</span>
          <span className="font-barlow text-xs tracking-widest" style={{ color: 'rgba(0,255,209,0.4)' }}>@francisco_solaiza</span>
        </footer>
      </div>
    </main>
  )
}
