'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'

type Foto = {
  name: string
  url: string
  created_at: string
}

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'solaiza33'

export default function Galeria() {
  const [fotos, setFotos] = useState<Foto[]>([])
  const [uploading, setUploading] = useState(false)
  const [modal, setModal] = useState<string | null>(null)
  const [toast, setToast] = useState('')
  const [dragging, setDragging] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    cargarFotos()
    const saved = sessionStorage.getItem('fs_admin')
    if (saved === 'true') setIsAdmin(true)
  }, [])

  async function cargarFotos() {
    const { data, error } = await supabase.storage.from('fotos').list('carreras', {
      sortBy: { column: 'created_at', order: 'desc' },
    })
    if (error || !data) return
    const urls = data
      .filter(f => f.name !== '.emptyFolderPlaceholder')
      .map(f => ({
        name: f.name,
        created_at: f.created_at ?? '',
        url: supabase.storage.from('fotos').getPublicUrl(`carreras/${f.name}`).data.publicUrl,
      }))
    setFotos(urls)
  }

  function handleLogin() {
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true)
      sessionStorage.setItem('fs_admin', 'true')
      setShowLogin(false)
      setPassword('')
      setLoginError(false)
    } else {
      setLoginError(true)
    }
  }

  function handleLogout() {
    setIsAdmin(false)
    sessionStorage.removeItem('fs_admin')
  }

  async function subirFotos(files: FileList | null) {
    if (!files || files.length === 0) return
    setUploading(true)
    let subidas = 0
    let lastError = ''
    for (const file of Array.from(files)) {
      if (!file.type.startsWith('image/')) continue
      const nombre = `${Date.now()}_${file.name.replace(/\s/g, '_')}`
      const { error } = await supabase.storage.from('fotos').upload(`carreras/${nombre}`, file)
      if (!error) {
        subidas++
      } else {
        lastError = error.message
        console.error('Supabase upload error:', error)
      }
    }
    await cargarFotos()
    setUploading(false)
    if (subidas > 0) {
      mostrarToast(`✅ ${subidas} foto${subidas !== 1 ? 's' : ''} subida${subidas !== 1 ? 's' : ''}`)
    } else {
      mostrarToast(`❌ Error: ${lastError}`)
    }
  }

  async function eliminarFoto(nombre: string) {
    if (!confirm('¿Eliminar esta foto?')) return
    await supabase.storage.from('fotos').remove([`carreras/${nombre}`])
    setFotos(prev => prev.filter(f => f.name !== nombre))
    mostrarToast('Foto eliminada')
  }

  function mostrarToast(msg: string) {
    setToast(msg)
    setTimeout(() => setToast(''), 3000)
  }

  return (
    <main style={{ minHeight: '100vh' }}>

      {/* Header */}
      <section style={{ padding: '4rem 3rem 2rem' }}>
        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.75rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#00FFD1', marginBottom: '0.8rem' }}>
          Archivo visual
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem' }}>
          <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '4rem', letterSpacing: '0.05em', lineHeight: 1 }}>
            Galería de <span style={{ color: '#00FFD1' }}>bajadas</span>
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B7A99' }}>
              {fotos.length} foto{fotos.length !== 1 ? 's' : ''}
            </span>
            {isAdmin ? (
              <button onClick={handleLogout} style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FF2D78', background: 'transparent', border: '1px solid rgba(255,45,120,0.3)', padding: '0.4rem 1rem', cursor: 'pointer' }}>
                Cerrar sesión
              </button>
            ) : (
              <button onClick={() => setShowLogin(true)} style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#00FFD1', background: 'transparent', border: '1px solid rgba(0,255,209,0.3)', padding: '0.4rem 1rem', cursor: 'pointer' }}>
                Admin
              </button>
            )}
          </div>
        </div>

        {/* Upload zone — solo admin */}
        {isAdmin && (
          <div
            style={{ border: `2px dashed ${dragging ? '#00FFD1' : 'rgba(0,255,209,0.3)'}`, background: dragging ? 'rgba(0,255,209,0.06)' : 'rgba(0,255,209,0.02)', padding: '4rem 2rem', textAlign: 'center', cursor: 'pointer', marginBottom: '2rem', transition: 'all 0.3s' }}
            onClick={() => inputRef.current?.click()}
            onDragOver={e => { e.preventDefault(); setDragging(true) }}
            onDragLeave={() => setDragging(false)}
            onDrop={e => { e.preventDefault(); setDragging(false); subirFotos(e.dataTransfer.files) }}
          >
            <input ref={inputRef} type="file" multiple accept="image/*" style={{ display: 'none' }} onChange={e => subirFotos(e.target.files)} />
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📷</div>
            <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: '1.2rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              {uploading ? 'Subiendo fotos...' : 'Arrastra tus fotos aquí'}
            </p>
            <p style={{ fontSize: '0.9rem', color: '#6B7A99' }}>
              o <span style={{ color: '#00FFD1' }}>haz clic para seleccionar</span> · JPG, PNG, WEBP
            </p>
          </div>
        )}
      </section>

      {/* Grid de fotos */}
      <section style={{ padding: '0 3rem 5rem' }}>
        {fotos.length === 0 ? (
          <div style={{ border: '1px solid rgba(255,255,255,0.05)', padding: '5rem 2rem', textAlign: 'center' }}>
            <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B7A99' }}>
              Aún no hay fotos · {isAdmin ? 'Sube la primera 👆' : 'Próximamente'}
            </p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {fotos.map((foto, i) => (
              <div
                key={foto.name}
                className="photo-card-hover"
                style={{ position: 'relative', overflow: 'hidden', background: '#121624', cursor: 'pointer', aspectRatio: i === 0 ? '2/1' : '4/3', gridColumn: i === 0 ? 'span 2' : 'span 1' }}
                onClick={() => setModal(foto.url)}
              >
                <Image src={foto.url} alt={foto.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '1rem' }}>
                  <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#00FFD1' }}>
                    📷 {new Date(foto.created_at).toLocaleDateString('es-MX', { month: 'short', year: 'numeric' })}
                  </span>
                  {isAdmin && (
                    <button
                      onClick={e => { e.stopPropagation(); eliminarFoto(foto.name) }}
                      style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', background: 'transparent', border: 'none', cursor: 'pointer' }}
                    >
                      Eliminar
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Modal foto */}
      {modal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setModal(null)}>
          <button style={{ position: 'fixed', top: '2rem', right: '2rem', border: '1px solid rgba(0,255,209,0.4)', color: '#00FFD1', background: 'transparent', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '1.2rem' }} onClick={() => setModal(null)}>✕</button>
          <div style={{ position: 'relative', width: '90vw', height: '88vh' }}>
            <Image src={modal} alt="Foto ampliada" fill style={{ objectFit: 'contain' }} sizes="90vw" />
          </div>
        </div>
      )}

      {/* Login modal */}
      {showLogin && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(5,8,16,0.95)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setShowLogin(false)}>
          <div style={{ background: '#121624', border: '1px solid rgba(0,255,209,0.2)', padding: '3rem', width: 380, position: 'relative' }} onClick={e => e.stopPropagation()}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#00FFD1,#FF2D78,#00FFD1)' }} />
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Acceso Admin</h2>
            <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.85rem', color: '#6B7A99', letterSpacing: '0.1em', marginBottom: '2rem' }}>Ingresa la contraseña para gestionar la galería</p>
            <input
              type="password"
              value={password}
              onChange={e => { setPassword(e.target.value); setLoginError(false) }}
              onKeyDown={e => e.key === 'Enter' && handleLogin()}
              placeholder="Contraseña"
              autoFocus
              style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: `1px solid ${loginError ? '#FF2D78' : 'rgba(0,255,209,0.2)'}`, color: '#E8F0FF', padding: '0.8rem 1rem', fontFamily: "'Barlow',sans-serif", fontSize: '1rem', outline: 'none', marginBottom: '0.5rem' }}
            />
            {loginError && (
              <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.8rem', color: '#FF2D78', letterSpacing: '0.1em', marginBottom: '1rem' }}>Contraseña incorrecta</p>
            )}
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <button onClick={handleLogin} style={{ flex: 1, background: '#00FFD1', color: '#050810', border: 'none', padding: '0.8rem', fontFamily: "'Bebas Neue',sans-serif", fontSize: '1rem', letterSpacing: '0.15em', cursor: 'pointer' }}>
                Entrar
              </button>
              <button onClick={() => { setShowLogin(false); setPassword(''); setLoginError(false) }} style={{ flex: 1, background: 'transparent', color: '#6B7A99', border: '1px solid rgba(255,255,255,0.1)', padding: '0.8rem', fontFamily: "'Bebas Neue',sans-serif", fontSize: '1rem', letterSpacing: '0.15em', cursor: 'pointer' }}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', background: '#00FFD1', color: '#050810', padding: '0.8rem 1.5rem', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', zIndex: 100 }}>
          {toast}
        </div>
      )}
    </main>
  )
}