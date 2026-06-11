import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export async function generateStaticParams() {
  const response = await fetch('http://localhost:3000/api/projects')
  const projects = await response.json()
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({ params }) {
  const response = await fetch('http://localhost:3000/api/projects')
  const projects = await response.json()
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center text-[#555550]">Project not found</div>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8 py-12">

        <Link
          href="/work"
          className="text-[10px] tracking-[0.2em] text-[#444440] uppercase hover:text-[#EBEBEB] transition-colors mb-12 inline-block"
        >
          ← All Work
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <p className="text-[10px] tracking-[0.3em] text-[#444440] uppercase mb-4">
              {project.category} — {project.year}
            </p>
            <h1
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-[clamp(3rem,8vw,6rem)] text-[#EBEBEB] leading-none mb-8"
            >
              {project.title}
            </h1>
            <p className="text-[11px] text-[#666660] leading-loose">
              {project.description}
            </p>
          </div>

          {/* Main image placeholder */}
          <div className="aspect-square relative overflow-hidden border border-[#222220]">
            <Image
                src={'/' + project.slug + '-1.jpg'}
                alt={project.title}
                fill
                className="object-cover"
                style={{ filter: 'brightness(0.7)' }}
                />
            </div>
        </div>

        {/* Image grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a18] mb-16">
  {[1, 2, 3].map((n) => (
    <div key={n} className="aspect-square relative overflow-hidden">
      <Image
        src={'/' + project.slug + '-' + n + '.jpg'}
        alt={project.title + ' image ' + n}
        fill
        className="object-cover opacity-70 hover:opacity-100 transition-opacity duration-500"
        style={{ filter: 'brightness(0.7)' }}
      />
    </div>
  ))}
</div>

        {/* Back link */}
        <div className="border-t border-[#1a1a18] pt-10">
          <Link
            href="/work"
            className="text-[11px] tracking-[0.2em] uppercase text-[#444440] hover:text-[#EBEBEB] transition-colors"
          >
            ← Back to all work
          </Link>
        </div>

      </main>
      <Footer />
    </div>
  )
}