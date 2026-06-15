import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getAllProjects } from '../data/projects'

export const metadata = {
  title: 'Work — BB Creative Director',
}

export default function Work() {
  const projects = getAllProjects()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8 py-12">
        <p className="text-[10px] text-[#999992] uppercase mb-4">Selected Work</p>
        <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-[6rem] text-[#EBEBEB] leading-none mb-16">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a18]">
          {projects.map((project) => (
            <Link key={project.id} href={'/work/' + project.slug} className="group bg-[#111111] p-8 hover:bg-[#161614] transition-colors block">
              <div className="w-full aspect-video relative overflow-hidden mb-6 border border-[#222220]">
                <Image src={'/' + project.slug + '-1.jpg'} alt={project.title} fill className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" style={{ filter: 'brightness(0.7)' }} />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#a8a8a1] group-hover:text-[#EBEBEB] transition-colors tracking-wide mb-1">{project.title}</p>
                  <p className="text-[10px] text-[#8a8a84] uppercase">{project.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-[#8a8a84] mb-1">{project.year}</p>
                  <span className="text-[#8a8a84] group-hover:text-[#EBEBEB] transition-colors text-sm">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}