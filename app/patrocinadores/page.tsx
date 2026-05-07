import Navbar from '@/components/Navbar'

export default function Patrocinadores() {
  return (
    <main style={{background:'#050810', color:'#E8F0FF', fontFamily:"'Barlow', sans-serif", overflowX:'hidden', minHeight:'100vh'}}>

      {/* Animated glows */}
      <div style={{position:'fixed', inset:0, pointerEvents:'none', zIndex:0}}>
        <div style={{position:'absolute', width:600, height:600, borderRadius:'50%', background:'radial-gradient(circle, rgba(0,255,209,0.06) 0%, transparent 70%)', top:-100, right:-100, animation:'pulse1 6s ease-in-out infinite'}} />
        <div style={{position:'absolute', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle, rgba(255,45,120,0.05) 0%, transparent 70%)', bottom:200, left:-100, animation:'pulse2 8s ease-in-out infinite'}} />
      </div>

      {/* Grid background */}
      <div style={{position:'fixed', inset:0, zIndex:0, pointerEvents:'none', backgroundImage:'linear-gradient(rgba(0,255,209,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,209,0.03) 1px, transparent 1px)', backgroundSize:'60px 60px'}} />

      <style>{`
        @keyframes pulse1 { 0%,100%{transform:scale(1);opacity:0.6} 50%{transform:scale(1.2);opacity:1} }
        @keyframes pulse2 { 0%,100%{transform:scale(1.1);opacity:0.4} 50%{transform:scale(0.9);opacity:0.8} }
        @keyframes spin { to{transform:rotate(360deg)} }
        @keyframes glitch1 { 0%,90%,100%{transform:none;opacity:0} 92%{transform:translateX(-4px);opacity:0.8} 94%{transform:translateX(4px);opacity:0.8} 96%{transform:none;opacity:0} }
        @keyframes glitch2 { 0%,88%,100%{transform:none;opacity:0} 90%{transform:translateX(4px);opacity:0.8} 92%{transform:translateX(-4px);opacity:0.8} 94%{transform:none;opacity:0} }
        @keyframes fillBar { from{width:0} to{width:var(--w)} }
        .glitch{position:relative;}
        .glitch::before,.glitch::after{content:attr(data-text);position:absolute;top:0;left:0;width:100%;height:100%;}
        .glitch::before{color:#00FFD1;animation:glitch1 4s infinite;clip-path:polygon(0 30%,100% 30%,100% 55%,0 55%);}
        .glitch::after{color:#FF2D78;animation:glitch2 4s infinite;clip-path:polygon(0 60%,100% 60%,100% 80%,0 80%);}
        .mega-stat{background:#121624;padding:2rem 1.5rem;text-align:center;border:1px solid rgba(0,255,209,0.15);position:relative;overflow:hidden;transition:border-color 0.3s;}
        .mega-stat:hover{border-color:#00FFD1;}
        .mega-stat::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,#00FFD1,transparent);transform:scaleX(0);transition:transform 0.4s;}
        .mega-stat:hover::after{transform:scaleX(1);}
        .ach-item{background:#121624;border:1px solid rgba(0,255,209,0.15);padding:1.5rem 2rem;display:flex;align-items:center;gap:1.5rem;transition:all 0.3s;}
        .ach-item:hover{border-color:rgba(0,255,209,0.4);transform:translateX(4px);}
        .offer-card{background:#121624;border:1px solid rgba(0,255,209,0.15);padding:2rem 1.5rem;position:relative;transition:all 0.3s;overflow:hidden;}
        .offer-card:hover{border-color:rgba(255,45,120,0.4);}
        .offer-card::before{content:'';position:absolute;top:0;left:0;width:100%;height:2px;background:#FF2D78;transform:scaleX(0);transition:transform 0.3s;transform-origin:left;}
        .offer-card:hover::before{transform:scaleX(1);}
        .value-pill{font-family:'Barlow Condensed',sans-serif;font-size:0.85rem;letter-spacing:0.15em;text-transform:uppercase;padding:0.6rem 1.4rem;border:1px solid rgba(0,255,209,0.15);color:#6B7A99;transition:all 0.3s;cursor:default;}
        .value-pill:hover{border-color:#00FFD1;color:#00FFD1;background:rgba(0,255,209,0.05);}
        .value-pill.hl{border-color:rgba(0,255,209,0.5);color:#00FFD1;}
        .btn-main{display:inline-flex;align-items:center;gap:0.8rem;background:#00FFD1;color:#050810;padding:1rem 3rem;font-family:'Bebas Neue',sans-serif;font-size:1.1rem;letter-spacing:0.15em;border:none;cursor:pointer;transition:all 0.3s;clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px));text-decoration:none;}
        .btn-main:hover{background:#fff;transform:translateY(-3px);}
        .btn-sec{display:inline-flex;align-items:center;gap:0.8rem;background:transparent;color:#00FFD1;padding:1rem 3rem;font-family:'Bebas Neue',sans-serif;font-size:1.1rem;letter-spacing:0.15em;border:1px solid rgba(0,255,209,0.4);cursor:pointer;transition:all 0.3s;margin-left:1rem;text-decoration:none;}
        .btn-sec:hover{background:rgba(0,255,209,0.08);}
        .reach-fill{height:100%;background:linear-gradient(90deg,#00FFD1,#FF2D78);animation:fillBar 1.5s ease-out forwards;}
        .avatar-ring{position:absolute;inset:-6px;border-radius:50%;border:1px dashed rgba(0,255,209,0.3);animation:spin 12s linear infinite;}
      `}</style>

      <div style={{position:'relative', zIndex:1}}>
        <Navbar />

        {/* HERO */}
        <section style={{padding:'5rem 3rem 3rem', textAlign:'center'}}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'1rem', marginBottom:'1rem'}}>
            <div style={{flex:1, maxWidth:80, height:1, background:'rgba(0,255,209,0.4)'}} />
            <span style={{fontFamily:"'Barlow Condensed',sans-serif", fontSize:'0.85rem', letterSpacing:'0.4em', textTransform:'uppercase', color:'#00FFD1'}}>Atleta Elite · Downhill MTB</span>
            <div style={{flex:1, maxWidth:80, height:1, background:'rgba(0,255,209,0.4)'}} />
          </div>

          <h1 style={{fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(3.5rem,10vw,8rem)', letterSpacing:'0.05em', lineHeight:0.9, marginBottom:'0.5rem'}}>
            <span className="glitch" data-text="FRANCISCO" style={{color:'#00FFD1', display:'block'}}>FRANCISCO</span>
            <span style={{color:'#FF2D78'}}>SOLAIZA</span>
          </h1>
          <p style={{fontFamily:"'Barlow Condensed',sans-serif", fontSize:'1rem', color:'#6B7A99', letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:'3.5rem'}}>
            Ciclismo competitivo de alto rendimiento · Nivel nacional
          </p>

          {/* Athlete card */}
          <div style={{maxWidth:740, margin:'0 auto', border:'1px solid rgba(0,255,209,0.15)', background:'#121624', padding:'2.5rem', display:'grid', gridTemplateColumns:'120px 1fr', gap:'2rem', alignItems:'center', position:'relative', overflow:'hidden', textAlign:'left'}}>
            <div style={{position:'absolute', top:0, left:0, right:0, height:2, background:'linear-gradient(90deg,#00FFD1,#FF2D78,#00FFD1)'}} />
            <div style={{display:'flex', justifyContent:'center'}}>
              <div style={{position:'relative', width:100, height:100}}>
                <div style={{width:100, height:100, borderRadius:'50%', border:'3px solid #00FFD1', background:'linear-gradient(135deg,#1a2a3a,#0a1a2a)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:"'Bebas Neue',sans-serif", fontSize:'2.5rem', color:'#00FFD1', boxShadow:'0 0 30px rgba(0,255,209,0.2)'}}>FS</div>
                <div className="avatar-ring" />
              </div>
            </div>
            <div>
              <h2 style={{fontFamily:"'Bebas Neue',sans-serif", fontSize:'2.2rem', letterSpacing:'0.05em', marginBottom:'0.2rem'}}>Francisco Solaiza</h2>
              <div style={{fontFamily:"'Barlow Condensed',sans-serif", fontSize:'0.9rem', color:'#00FFD1', letterSpacing:'0.15em', marginBottom:'0.8rem'}}>@francisco_solaiza</div>
              <div style={{fontSize:'0.9rem', color:'#6B7A99', lineHeight:1.6}}>Deportista de alto rendimiento especializado en downhill MTB. Representación elite nacional con presencia en competencias de Ensenada a Irapuato. Campeón múltiple con proyección internacional.</div>
            </div>
          </div>

          {/* Mega stats */}
          <div style={{maxWidth:900, margin:'3rem auto 0', display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:2}}>
            {[
              {num:'1.45M', label:'Visualizaciones totales', color:'#00FFD1'},
              {num:'39.4K', label:'Seguidores activos', color:'#FF2D78'},
              {num:'36,663', label:'Interacciones totales', color:'#C8FF00'},
              {num:'310', label:'Publicaciones', color:'#00FFD1'},
              {num:'1,293', label:'Siguiendo (nicho)', color:'#FF2D78'},
              {num:'2.5%', label:'Engagement rate', color:'#C8FF00'},
            ].map(({num, label, color}) => (
              <div key={label} className="mega-stat">
                <div style={{fontFamily:"'Bebas Neue',sans-serif", fontSize:'3rem', color, lineHeight:1, marginBottom:'0.3rem'}}>{num}</div>
                <div style={{fontFamily:"'Barlow Condensed',sans-serif", fontSize:'0.75rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'#6B7A99'}}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        <div style={{height:1, background:'linear-gradient(90deg,transparent,rgba(0,255,209,0.15),transparent)'}} />

        {/* Logros */}
        <section style={{position:'relative', zIndex:1, padding:'5rem 3rem'}}>
          <div style={{fontFamily:"'Barlow Condensed',sans-serif", fontSize:'0.75rem', letterSpacing:'0.35em', textTransform:'uppercase', color:'#00FFD1', marginBottom:'0.8rem'}}>Trayectoria deportiva</div>
          <div style={{fontFamily:"'Bebas Neue',sans-serif", fontSize:'3rem', letterSpacing:'0.05em', marginBottom:'3rem'}}>Palmarés y <span style={{color:'#00FFD1'}}>logros</span></div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:2}}>
            {[
              {icon:'🥈', title:'Subcampeón Elite Nacional', sub:'2023 y 2024 · Categoría Elite'},
              {icon:'🏆', title:'Campeón Juvenil y Expertos', sub:'2018 y 2019 · Doble título'},
              {icon:'🥇', title:'3× Campeón Elite Estatal', sub:'Múltiples temporadas · Guanajuato'},
              {icon:'🚵', title:'Atleta Profesional Activo', sub:'Circuito nacional · Ensenada a Irapuato'},
            ].map(({icon, title, sub}) => (
              <div key={title} className="ach-item">
                <div style={{fontSize:'2rem', flexShrink:0, width:56, height:56, display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(0,255,209,0.07)', border:'1px solid rgba(0,255,209,0.15)'}}>{icon}</div>
                <div>
                  <div style={{fontFamily:"'Barlow Condensed',sans-serif", fontSize:'1rem', fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:'0.2rem'}}>{title}</div>
                  <div style={{fontSize:'0.85rem', color:'#6B7A99'}}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div style={{height:1, background:'linear-gradient(90deg,transparent,rgba(0,255,209,0.15),transparent)'}} />

        {/* Oferta */}
        <section style={{background:'#0D1020', padding:'5rem 3rem', position:'relative', zIndex:1, borderTop:'1px solid rgba(0,255,209,0.15)', borderBottom:'1px solid rgba(0,255,209,0.15)'}}>
          <div style={{fontFamily:"'Barlow Condensed',sans-serif", fontSize:'0.75rem', letterSpacing:'0.35em', textTransform:'uppercase', color:'#00FFD1', marginBottom:'0.8rem'}}>Propuesta de valor</div>
          <div style={{fontFamily:"'Bebas Neue',sans-serif", fontSize:'3rem', letterSpacing:'0.05em', marginBottom:'3rem'}}>Qué <span style={{color:'#00FFD1'}}>ofrezco</span></div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:2}}>
            {[
              {num:'01', icon:'📸', title:'Representación en competencias', desc:'Visibilidad de marca en entrenamientos y competencias nacionales con alcance real en el circuito elite.'},
              {num:'02', icon:'🎥', title:'Contenido de calidad', desc:'Creación de contenido auténtico: videos de carreras, entrenamientos y behind-the-scenes con alta producción visual.'},
              {num:'03', icon:'📣', title:'Promoción auténtica', desc:'Difusión genuina desde la experiencia real como atleta elite, con credibilidad ante la comunidad ciclista nacional.'},
            ].map(({num, icon, title, desc}) => (
              <div key={num} className="offer-card">
                <div style={{fontFamily:"'Bebas Neue',sans-serif", fontSize:'4rem', color:'rgba(255,45,120,0.1)', lineHeight:1, position:'absolute', top:'1rem', right:'1.5rem'}}>{num}</div>
                <div style={{fontSize:'1.8rem', marginBottom:'1rem'}}>{icon}</div>
                <div style={{fontFamily:"'Barlow Condensed',sans-serif", fontSize:'1.1rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'0.8rem'}}>{title}</div>
                <div style={{fontSize:'0.88rem', color:'#6B7A99', lineHeight:1.6}}>{desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Alcance + Valores */}
        <section style={{position:'relative', zIndex:1, padding:'5rem 3rem'}}>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem'}}>
            <div>
              <div style={{fontFamily:"'Barlow Condensed',sans-serif", fontSize:'0.75rem', letterSpacing:'0.35em', textTransform:'uppercase', color:'#00FFD1', marginBottom:'0.8rem'}}>Alcance digital</div>
              <div style={{fontFamily:"'Bebas Neue',sans-serif", fontSize:'3rem', letterSpacing:'0.05em', marginBottom:'2rem'}}>Impacto en <span style={{color:'#00FFD1'}}>redes</span></div>
              {[
                {label:'TikTok · Videos', val:'1.45M views', w:'92%'},
                {label:'Instagram · Seguidores', val:'39.4K', w:'70%'},
                {label:'Engagement rate', val:'2.5%', w:'55%'},
                {label:'Interacciones totales', val:'36,663', w:'65%'},
              ].map(({label, val, w}) => (
                <div key={label} style={{marginBottom:'1.5rem'}}>
                  <div style={{display:'flex', justifyContent:'space-between', marginBottom:'0.5rem'}}>
                    <span style={{fontFamily:"'Barlow Condensed',sans-serif", fontSize:'0.9rem', letterSpacing:'0.1em', textTransform:'uppercase'}}>{label}</span>
                    <span style={{fontFamily:"'Bebas Neue',sans-serif", fontSize:'1rem', color:'#00FFD1'}}>{val}</span>
                  </div>
                  <div style={{height:6, background:'rgba(255,255,255,0.06)', overflow:'hidden'}}>
                    <div className="reach-fill" style={{'--w':w} as React.CSSProperties} />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div style={{fontFamily:"'Barlow Condensed',sans-serif", fontSize:'0.75rem', letterSpacing:'0.35em', textTransform:'uppercase', color:'#00FFD1', marginBottom:'0.8rem'}}>Perfil del atleta</div>
              <div style={{fontFamily:"'Bebas Neue',sans-serif", fontSize:'3rem', letterSpacing:'0.05em', marginBottom:'1.5rem'}}>Valores de <span style={{color:'#00FFD1'}}>marca</span></div>
              <p style={{fontSize:'0.95rem', color:'#6B7A99', lineHeight:1.7, marginBottom:'2rem'}}>
                Busco colaboración con marcas que compartan el compromiso por el <strong style={{color:'#E8F0FF'}}>rendimiento</strong>, la <strong style={{color:'#E8F0FF'}}>innovación</strong> y el <strong style={{color:'#E8F0FF'}}>profesionalismo</strong> en el deporte de alto nivel.
              </p>
              <div style={{display:'flex', gap:2, flexWrap:'wrap'}}>
                {['Alto rendimiento','Innovación','Profesionalismo','Autenticidad','Competencia elite','Comunidad MTB','Contenido viral','Nicho ciclismo MX'].map((v, i) => (
                  <span key={v} className={`value-pill${i < 3 ? ' hl' : ''}`}>{v}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div style={{height:1, background:'linear-gradient(90deg,transparent,rgba(0,255,209,0.15),transparent)'}} />

        {/* CTA */}
        <section style={{position:'relative', zIndex:1, padding:'6rem 3rem', textAlign:'center', borderTop:'1px solid rgba(0,255,209,0.15)'}}>
          <div style={{position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,255,209,0.05) 0%, transparent 70%)'}} />
          <div style={{fontFamily:"'Barlow Condensed',sans-serif", fontSize:'0.75rem', letterSpacing:'0.35em', textTransform:'uppercase', color:'#6B7A99', marginBottom:'1rem', position:'relative', zIndex:1}}>¿Listo para colaborar?</div>
          <h2 style={{fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(3rem,7vw,6rem)', letterSpacing:'0.05em', marginBottom:'1rem', position:'relative', zIndex:1}}>
            Sé parte del<br /><span style={{color:'#00FFD1'}}>podium</span>
          </h2>
          <p style={{fontFamily:"'Barlow Condensed',sans-serif", fontSize:'1rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'#6B7A99', marginBottom:'2.5rem', position:'relative', zIndex:1}}>
            A cambio busco apoyo en equipamiento y respaldo para continuar creciendo
          </p>
          <div style={{position:'relative', zIndex:1}}>
            <a href="mailto:francisco.solaiza@email.com" className="btn-main">📩 Contactar a Francisco</a>
            <a href="https://instagram.com/francisco_solaiza" target="_blank" rel="noopener noreferrer" className="btn-sec">↗ Ver perfil</a>
          </div>
          <div style={{display:'flex', justifyContent:'center', gap:'3rem', marginTop:'3rem', position:'relative', zIndex:1}}>
            {[
              {net:'Instagram', num:'39.4K'},
              {net:'TikTok views', num:'1.45M'},
              {net:'Títulos', num:'6+'},
              {net:'Años elite', num:'7+'},
            ].map(({net, num}) => (
              <div key={net} style={{textAlign:'center'}}>
                <div style={{fontFamily:"'Barlow Condensed',sans-serif", fontSize:'0.75rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'#6B7A99', marginBottom:'0.3rem'}}>{net}</div>
                <div style={{fontFamily:"'Bebas Neue',sans-serif", fontSize:'1.8rem', color:'#00FFD1'}}>{num}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer style={{position:'relative', zIndex:1, padding:'2rem 3rem', display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid rgba(0,255,209,0.15)'}}>
          <span style={{fontFamily:"'Bebas Neue',sans-serif", fontSize:'1.1rem', color:'#00FFD1', letterSpacing:'0.15em'}}>FRANCISCO SOLAIZA · #33</span>
          <span style={{fontFamily:"'Barlow Condensed',sans-serif", fontSize:'0.8rem', color:'#6B7A99', letterSpacing:'0.1em', textTransform:'uppercase'}}>Media Kit 2025 · Downhill MTB · México</span>
          <span style={{fontFamily:"'Barlow Condensed',sans-serif", fontSize:'0.8rem', letterSpacing:'0.15em', color:'rgba(0,255,209,0.4)'}}>@francisco_solaiza</span>
        </footer>
      </div>
    </main>
  )
}