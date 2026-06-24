import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getAllProjects, getProjectBySlug } from '../../data/projects'

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((p) => ({ slug: p.slug }))
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p style={{ color: '#a8a8a1' }}>Project not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8 py-12">
        <Link href="/work" style={{ color: '#999992', fontSize: '10px' }} className="uppercase mb-12 inline-block hover:opacity-70 transition-opacity">
          Back to Work
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <p className="text-[12px] text-[#999992] uppercase mb-4">{project.category} - {project.year}</p>
            <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-[5rem] text-[#EBEBEB] leading-none mb-8">{project.title}</h1>
            <p className="text-[13px] text-[#b8b8b1] leading-loose mb-8">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[12px] text-[#a8a8a1] border border-[#222220] px-3 py-1 uppercase">{tag}</span>
              ))}
            </div>
          </div>
          <div className="aspect-square relative overflow-hidden border border-[#222220]">
            <Image src={'/' + project.slug + '-1.jpg'} alt={project.title} fill className="object-cover" style={{ filter: 'brightness(0.7)' }} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a18] mb-16">
          {[1, 2, 3].map((n) => (
            <div key={n} className="aspect-square relative overflow-hidden">
              <Image src={'/' + project.slug + '-' + n + '.jpg'} alt={project.title + ' image ' + n} fill className="object-cover opacity-70 hover:opacity-100 transition-opacity duration-500" style={{ filter: 'brightness(0.7)' }} />
            </div>
          ))}
        </div>
        <div className="border-t border-[#1a1a18] pt-10">
          <Link href="/work" style={{ color: '#999992', fontSize: '11px' }} className="uppercase hover:opacity-70 transition-opacity">
            Back to all work
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}