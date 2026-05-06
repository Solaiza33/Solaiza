'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="relative z-10 flex justify-between items-center px-8 py-5 border-b border-white/5">
      <Link href="/" className="font-bebas text-2xl tracking-widest text-[#C8FF00]">
        FS<span className="text-white/30">·</span>33
      </Link>
      <ul className="flex gap-8 list-none">
        {[
          { href: '/', label: 'Inicio' },
          { href: '/galeria', label: 'Galería' },
          { href: '/patrocinadores', label: 'Patrocinadores' },
        ].map(({ href, label }) => (
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
        className="clip-corner bg-[#C8FF00] text-black px-6 py-2 font-barlow font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors"
      >
        Ver galería
      </Link>
    </nav>
  )
}
