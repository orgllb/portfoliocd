import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#1a1a18] px-8 py-8 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <p
            className="text-lg tracking-[0.3em] text-[#F0EEE8] mb-1"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            BAT-ORGIL BATBOLD
          </p>
          <p className="text-[11px] text-[#444440] tracking-[0.2em] uppercase">
            Creative Director — Melbourne, AU
          </p>
        </div>

        <ul className="flex gap-8 list-none">
          {[
            { href: '/work', label: 'Work' },
            { href: '/about', label: 'About' },
            { href: '/contact', label: 'Contact' },
          ].map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="nav-link">{link.label}</Link>
            </li>
          ))}
        </ul>

        <p className="text-[11px] text-[#333330] tracking-[0.2em]">
          © {year} All rights reserved
        </p>
      </div>
    </footer>
  )
}