import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8 py-12">

        <p className="text-[10px] text-[#444440] uppercase mb-4">About</p>
        <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-[6rem] text-[#EBEBEB] leading-none mb-16">
          Creative Director
        </h1>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          <div>
            <p className="text-[11px] text-[#666660] leading-loose mb-4">
              I am Bat-Orgil Batbold, a Melbourne-based Creative Director with a passion for bold visual identities, digital experiences and meaningful design.
            </p>
            <p className="text-[11px] text-[#666660] leading-loose mb-10">
              My practice sits at the intersection of graphic design, digital experience and creative strategy. I believe in making work that is intentional, restrained, and built to last.
            </p>

            <p className="text-[10px] text-[#333330] uppercase mb-4">Expertise</p>
            <div className="flex flex-wrap gap-2 mb-10">
              {['Brand Identity', 'Art Direction', 'UI/UX Design', 'Typography', 'Motion', 'Creative Strategy'].map((skill) => (
                <span key={skill} className="text-[10px] text-[#555550] border border-[#222220] px-3 py-1 uppercase">
                  {skill}
                </span>
              ))}
            </div>

            <p className="text-[10px] text-[#333330] uppercase mb-2">Currently</p>
            <p className="text-[11px] text-[#555550]">Available for new projects</p>
          </div>

<div className="w-full max-w-sm aspect-[3/4] relative overflow-hidden border border-[#222220]">
  <Image
    src="/portrait.jpg"
    alt="Bat-Orgil Batbold"
    fill
    className="object-cover"
    style={{ filter: 'brightness(0.4) contrast(1.2)' }}
  />
</div>

        </div>
      </main>
      <Footer />
    </div>
  )
}