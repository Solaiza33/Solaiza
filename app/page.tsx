import Link from 'next/link'
import Navbar from '@/components/Navbar'

const carreras = [
  { num: '01', nombre: 'Copa Guanajuato DH', lugar: 'Sierra de Lobos', fecha: 'May 2025', pos: '2°', tiempo: '3:42.8' },
  { num: '02', nombre: 'Urbano Irapuato Classic', lugar: 'Centro Histórico', fecha: 'Mar 2025', pos: '5°', tiempo: '2:18.4' },
  { num: '03', nombre: 'Descenso Nacional MTB', lugar: 'Puebla', fecha: 'Feb 2025', pos: '1°', tiempo: '4:01.2' },
  { num: '04', nombre: 'Callejón de Guanajuato Open', lugar: 'Guanajuato', fecha: 'Dic 2024', pos: '3°', tiempo: '1:55.6' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* Hero */}
      <div className="relative overflow-hidden">
        {/* Radial glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[600px] h-[600px] rounded-full -top-32 -right-32"
            style={{ background: 'radial-gradient(circle, rgba(200,255,0,0.06) 0%, transparent 70%)' }} />
          <div className="absolute w-[400px] h-[400px] rounded-full bottom-0 left-0"
            style={{ background: 'radial-gradient(circle, rgba(200,255,0,0.03) 0%, transparent 70%)' }} />
        </div>
        {/* Speed lines */}
        <div className="absolute inset-0 speed-lines pointer-events-none" />

        <Navbar />

        {/* Hero body */}
        <div className="relative z-10 px-8 pt-20 pb-0">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-0.5 bg-[#C8FF00]" />
            <span className="font-barlow text-sm tracking-widest uppercase text-[#C8FF00]">
              Downhill · Velocidad extrema
            </span>
          </div>

          <h1 className="font-bebas leading-none mb-6" style={{ fontSize: 'clamp(5rem,12vw,10rem)' }}>
            Sin<br />
            <span className="text-[#C8FF00] glitch" data-text="frenos">frenos</span>
          </h1>

          <p className="font-barlow text-lg text-gray-400 max-w-lg leading-relaxed mb-10">
            Galería de carreras de descenso. Montañas, ciudad y asfalto a toda velocidad.
            Sube, comparte y revive cada bajada.
          </p>

          <div className="flex gap-4 pb-20">
            <Link href="/galeria"
              className="clip-corner bg-[#C8FF00] text-black px-10 py-4 font-barlow font-bold text-base tracking-widest uppercase hover:bg-white transition-all hover:-translate-y-0.5">
              Ver galería
            </Link>
            <Link href="/patrocinadores"
              className="clip-corner border border-[#C8FF00]/40 text-[#C8FF00] px-10 py-4 font-barlow font-bold text-base tracking-widest uppercase hover:bg-[#C8FF00]/10 transition-all">
              Patrocinadores
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 grid grid-cols-4 border-t border-[#C8FF00]/10">
          {[
            { num: '1.45M', label: 'Visualizaciones' },
            { num: '39.4K', label: 'Seguidores' },
            { num: '6+', label: 'Títulos nacionales' },
            { num: '94 km/h', label: 'Top speed' },
          ].map(({ num, label }) => (
            <div key={label} className="py-6 px-8 border-r border-white/5 last:border-r-0">
              <div className="font-bebas text-4xl text-[#C8FF00]">{num}</div>
              <div className="font-barlow text-xs tracking-widest uppercase text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Carreras */}
      <section className="px-8 py-20 bg-[#141414]">
        <div className="mb-12">
          <p className="font-barlow text-xs tracking-widest uppercase text-[#C8FF00] mb-2">Historial</p>
          <h2 className="font-bebas text-5xl tracking-wide">Mis <span className="text-[#C8FF00]">carreras</span></h2>
        </div>

        <div className="flex flex-col divide-y divide-white/5">
          {carreras.map((c) => (
            <div key={c.num}
              className="grid items-center gap-8 py-6 transition-all hover:pl-2"
              style={{ gridTemplateColumns: '60px 1fr auto auto' }}>
              <div className="font-bebas text-4xl text-[#C8FF00]/15">{c.num}</div>
              <div>
                <div className="font-barlow font-semibold text-lg tracking-wide uppercase">{c.nombre}</div>
                <div className="text-sm text-gray-500 mt-0.5">📍 {c.lugar} · {c.fecha}</div>
              </div>
              <div className={`font-bebas text-3xl ${c.pos === '1°' ? 'text-[#C8FF00]' : c.pos === '2°' || c.pos === '3°' ? 'text-white' : 'text-gray-500'}`}>
                {c.pos}
              </div>
              <div className="font-barlow text-right text-gray-400">
                {c.tiempo}<br />
                <span className="text-xs text-gray-600">tiempo</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(200,255,0,0.04) 0%, transparent 70%)' }} />
        <p className="relative z-10 font-barlow text-xs tracking-widest uppercase text-gray-500 mb-4">¿Quieres patrocinar?</p>
        <h2 className="relative z-10 font-bebas leading-none mb-4" style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
          Sé parte del<br /><span className="text-[#C8FF00]">podium</span>
        </h2>
        <p className="relative z-10 font-barlow text-gray-500 tracking-widest uppercase text-sm mb-10">
          Marcas que comparten los valores de rendimiento e innovación
        </p>
        <Link href="/patrocinadores"
          className="relative z-10 clip-corner bg-[#C8FF00] text-black px-12 py-4 font-bebas text-lg tracking-widest hover:bg-white transition-all inline-block">
          Ver media kit
        </Link>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 border-t border-white/5 flex justify-between items-center">
        <span className="font-bebas tracking-widest text-[#C8FF00]">FRANCISCO SOLAIZA · #33</span>
        <span className="font-barlow text-xs text-gray-600 uppercase tracking-widest">Downhill MTB · México</span>
        <span className="font-barlow text-xs tracking-widest" style={{ color: 'rgba(200,255,0,0.4)' }}>🚵 Sin frenos</span>
      </footer>
    </main>
  )
}
