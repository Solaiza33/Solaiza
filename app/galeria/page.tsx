'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'

type Foto = {
  name: string
  url: string
  created_at: string
}

export default function Galeria() {
  const [fotos, setFotos] = useState<Foto[]>([])
  const [uploading, setUploading] = useState(false)
  const [modal, setModal] = useState<string | null>(null)
  const [toast, setToast] = useState('')
  const [dragging, setDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    cargarFotos()
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

  async function subirFotos(files: FileList | null) {
    if (!files || files.length === 0) return
    setUploading(true)
    let subidas = 0

    for (const file of Array.from(files)) {
      if (!file.type.startsWith('image/')) continue
      const nombre = `${Date.now()}_${file.name.replace(/\s/g, '_')}`
      const { error } = await supabase.storage.from('fotos').upload(`carreras/${nombre}`, file)
      if (!error) subidas++
    }

    await cargarFotos()
    setUploading(false)
    mostrarToast(`✅ ${subidas} foto${subidas !== 1 ? 's' : ''} subida${subidas !== 1 ? 's' : ''}`)
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
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* Header */}
      <section className="px-8 pt-16 pb-10">
        <p className="font-barlow text-xs tracking-widest uppercase text-[#C8FF00] mb-2">Archivo visual</p>
        <div className="flex items-end justify-between">
          <h1 className="font-bebas text-6xl tracking-wide">
            Galería de <span className="text-[#C8FF00]">bajadas</span>
          </h1>
          <span className="font-barlow text-xs text-gray-500 uppercase tracking-widest">
            {fotos.length} foto{fotos.length !== 1 ? 's' : ''}
          </span>
        </div>
      </section>

      {/* Upload zone */}
      <section className="px-8 pb-10">
        <div
          className={`relative border-2 border-dashed transition-all cursor-pointer py-16 text-center
            ${dragging
              ? 'border-[#C8FF00] bg-[#C8FF00]/10'
              : 'border-[#C8FF00]/30 bg-[#C8FF00]/02 hover:border-[#C8FF00]/60 hover:bg-[#C8FF00]/5'
            }`}
          onClick={() => inputRef.current?.click()}
          onDragOver={e => { e.preventDefault(); setDragging(true) }}
          onDragLeave={() => setDragging(false)}
          onDrop={e => { e.preventDefault(); setDragging(false); subirFotos(e.dataTransfer.files) }}
        >
          <input
            ref={inputRef}
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={e => subirFotos(e.target.files)}
          />
          <div className="text-5xl mb-4">📷</div>
          <p className="font-barlow font-semibold text-lg tracking-widest uppercase mb-2">
            {uploading ? 'Subiendo fotos...' : 'Arrastra tus fotos aquí'}
          </p>
          <p className="font-barlow text-gray-500 text-sm">
            o <span className="text-[#C8FF00]">haz clic para seleccionar</span> · JPG, PNG, WEBP
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-8 pb-20">
        {fotos.length === 0 ? (
          <div className="border border-white/5 py-20 text-center">
            <p className="font-barlow text-gray-600 uppercase tracking-widest text-sm">
              Aún no hay fotos · Sube la primera 👆
            </p>
          </div>
        ) : (
          <div className="grid gap-0.5" style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}>
            {fotos.map((foto, i) => (
              <div
                key={foto.name}
                className={`photo-card-hover relative overflow-hidden bg-[#1A1A1A] cursor-pointer
                  ${i === 0 ? 'col-span-2' : ''}
                `}
                style={{ aspectRatio: i === 0 ? '2/1' : '4/3' }}
                onClick={() => setModal(foto.url)}
              >
                <Image
                  src={foto.url}
                  alt={foto.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="overlay absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-between p-4">
                  <span className="font-barlow text-xs tracking-widest uppercase text-[#C8FF00]">
                    📷 {new Date(foto.created_at).toLocaleDateString('es-MX', { month: 'short', year: 'numeric' })}
                  </span>
                  <button
                    onClick={e => { e.stopPropagation(); eliminarFoto(foto.name) }}
                    className="text-white/60 hover:text-red-400 text-xs font-barlow uppercase tracking-widest transition-colors"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 bg-black/92 z-50 flex items-center justify-center"
          onClick={() => setModal(null)}
        >
          <button
            className="fixed top-8 right-8 border border-[#C8FF00]/40 text-[#C8FF00] w-11 h-11 flex items-center justify-center font-barlow text-lg"
            onClick={() => setModal(null)}
          >
            ✕
          </button>
          <div className="relative max-w-[90vw] max-h-[88vh]" style={{ width: '90vw', height: '88vh' }}>
            <Image src={modal} alt="Foto ampliada" fill className="object-contain" sizes="90vw" />
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-8 right-8 bg-[#C8FF00] text-black px-6 py-3 font-barlow font-bold text-sm tracking-widest uppercase z-50 transition-all">
          {toast}
        </div>
      )}
    </main>
  )
}
