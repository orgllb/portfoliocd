'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'
import { getAllProjects } from './data/projects'

export default function Home() {
  const projects = getAllProjects()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Loading screen */}
      <div className={`loader ${loaded ? 'hidden' : ''}`}>
        <p className="loader-text">Loading...</p>
      </div>

      <Cursor />

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 px-8 relative">

          {/* Ghost number */}
          <span
            className="leading-none text-[#1a1a1a] absolute right-0 top-0 select-none pointer-events-none hidden lg:block"
            style={{ fontFamily: 'var(--font-display)', fontSize: '18rem' }}
          >
            01
          </span>

          {/* Hero */}
          <section className="pt-10 pb-8">
            <p className="text-[10px] tracking-[0.3em] text-[#444440] uppercase mb-6">
              Bat-Orgil Batbold — Creative Director
            </p>
            <h1 style={{ fontFamily: 'var(--font-display)' }} className="leading-[0.9]">
              <span className="flicker block text-[clamp(5rem,15vw,10rem)] text-[#EBEBEB]">
                Bat-Orgil
              </span>
              <span className="block text-[clamp(5rem,15vw,10rem)] text-outline" style={{ WebkitTextStrokeColor: '#FF6B00' }}>
                Batbold
              </span>
            </h1>
          </section>

          {/* Divider */}
          <hr className="border-t border-[#1e1e1c] my-8" />

          {/* Mid section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Bio */}
            <div className="md:border-r border-[#1e1e1c] md:pr-12">
              <p className="text-[11px] leading-relaxed text-[#555550] tracking-wide mb-4">
                Based between Melbourne and the digital world. Crafting visual
                identities, digital experiences and cultural moments that last.
              </p>
              <p className="text-[11px] leading-relaxed text-[#555550] tracking-wide mb-6">
                Available for select projects in brand direction, web design
                and art direction.
              </p>
              <p className="text-[10px] text-[#333330] tracking-[0.2em] uppercase">Based in Melbourne, AU</p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="text-[11px] tracking-[0.2em] uppercase text-[#EBEBEB] border-b border-[#555550] pb-0.5 hover:border-[#EBEBEB] transition-colors"
                >
                  Start a Project
                </Link>
              </div>
            </div>

            {/* Work list */}
            <div>
              <p className="text-[10px] tracking-[0.3em] text-[#333330] uppercase mb-5">
                Selected Work
              </p>
              <ul className="list-none">
                {projects.map((project) => (
                  <li key={project.id}>
                    <Link
                      href={`/work/${project.slug}`}
                      className="work-item flex justify-between items-baseline py-3 block group"
                    >
                      <span className="work-title text-xl tracking-wider">
                        {project.title} — {project.category}
                      </span>
                      <span className="flex items-center gap-4">
                        <span className="text-[10px] text-[#333330] tracking-[0.2em] uppercase">
                          {project.year}
                        </span>
                        <span className="work-arrow text-[#555550] text-sm">→</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href="/work"
                  className="text-[10px] tracking-[0.2em] text-[#444440] uppercase hover:text-[#EBEBEB] transition-colors"
                >
                  View all work →
                </Link>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="grid grid-cols-3 border-t border-b border-[#1a1a18] my-16">
            {[
              { value: '5+', label: 'Years experience' },
              { value: '40+', label: 'Projects delivered' },
              { value: '3', label: 'Continents worked' },
            ].map((stat, i) => (
              <div key={i} className={`py-8 px-6 ${i < 2 ? 'border-r border-[#1a1a18]' : ''}`}>
                <p
                  style={{ fontFamily: 'var(--font-display)' }}
                  className="text-5xl text-[#EBEBEB] mb-1"
                >
                  {stat.value}
                </p>
                <p className="text-[10px] text-[#444440] tracking-[0.2em] uppercase">{stat.label}</p>
              </div>
            ))}
          </section>

        </main>
        <Footer />
      </div>
    </>
  )
}