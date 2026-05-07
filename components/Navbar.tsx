'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/galeria', label: 'Galería' },
  { href: '/patrocinadores', label: 'Patrocinadores' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="relative z-10 border-b border-white/5">
      <div className="flex justify-between items-center px-5 py-4 md:px-8 md:py-5">
        <Link href="/" className="font-bebas text-2xl tracking-widest text-[#C8FF00]">
          FS<span className="text-white/30">·</span>33
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`font-barlow text-sm tracking-widest uppercase transition-colors ${
                  pathname === href ? 'text-[#C8FF00]' : 'text-gray-500 hover:text-[#C8FF00]'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/galeria"
          className="hidden md:inline-flex clip-corner bg-[#C8FF00] text-black px-6 py-2 font-barlow font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors"
        >
          Ver galería
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 w-10 h-10"
          aria-label="Menú"
        >
          <span className={`block w-6 h-0.5 bg-[#00FFD1] transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#00FFD1] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#00FFD1] transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 px-5 py-5 flex flex-col gap-4 bg-[#050810]">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`font-barlow text-sm tracking-widest uppercase transition-colors ${
                pathname === href ? 'text-[#C8FF00]' : 'text-gray-400'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/galeria"
            onClick={() => setOpen(false)}
            className="clip-corner bg-[#C8FF00] text-black px-5 py-2.5 font-barlow font-bold text-sm tracking-widest uppercase text-center mt-1"
          >
            Ver galería
          </Link>
        </div>
      )}
    </nav>
  )
}
