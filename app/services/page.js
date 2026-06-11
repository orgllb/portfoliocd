import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Services — BB Creative Director',
}

const services = [
  {
    number: '01',
    title: 'Brand Identity',
    description: 'Full brand identity systems from scratch — logo design, colour palettes, typography, brand guidelines and all associated collateral. Built to scale across digital and print.',
    deliverables: ['Logo & icon system', 'Brand guidelines', 'Colour & type system', 'Business stationery', 'Social media kit'],
  },
  {
    number: '02',
    title: 'Digital Design',
    description: 'Web design, UI/UX and interactive digital experiences. From wireframes and prototypes through to production-ready designs built with modern frameworks like Next.js.',
    deliverables: ['Website design', 'UI/UX design', 'Figma prototypes', 'Component libraries', 'Motion & interaction'],
  },
  {
    number: '03',
    title: 'Art Direction',
    description: 'Campaign concepting, photography direction, editorial design and content strategy. Guiding the visual voice of a brand across all touchpoints.',
    deliverables: ['Campaign direction', 'Photography briefs', 'Editorial layouts', 'Content strategy', 'Social campaigns'],
  },
  {
    number: '04',
    title: 'Creative Consulting',
    description: 'Strategic creative guidance for businesses at any stage. Audits, workshops and ongoing retainer support to align your visual identity with your business goals.',
    deliverables: ['Brand audits', 'Creative workshops', 'Retainer support', 'Competitor analysis', 'Strategy documents'],
  },
]

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8 py-12">

        <p className="text-[10px] tracking-[0.3em] text-[#444440] uppercase mb-4">
          Services
        </p>
        <h1
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-[clamp(3rem,8vw,6rem)] text-[#EBEBEB] leading-none mb-16"
        >
          What I Do
        </h1>

        <div className="space-y-px">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-[#111111] border border-[#1a1a18] p-10 grid grid-cols-1 md:grid-cols-3 gap-10"
            >
              {/* Number + title */}
              <div>
                <p
                  style={{ fontFamily: 'var(--font-display)' }}
                  className="text-5xl text-[#1e1e1c] mb-4"
                >
                  {service.number}
                </p>
                <h2
                  style={{ fontFamily: 'var(--font-display)' }}
                  className="text-3xl text-[#EBEBEB] tracking-wide"
                >
                  {service.title}
                </h2>
              </div>

              {/* Description */}
              <div>
                <p className="text-[11px] text-[#555550] leading-loose">
                  {service.description}
                </p>
              </div>

              {/* Deliverables */}
              <div>
                <p className="text-[10px] tracking-[0.2em] text-[#333330] uppercase mb-4">
                  Deliverables
                </p>
                <ul className="list-none space-y-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="text-[10px] text-[#444440] tracking-wider flex items-center gap-2">
                      <span className="w-3 h-px bg-[#333330] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 border-t border-[#1a1a18] pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-3xl text-[#EBEBEB] mb-2"
            >
              Ready to work together?
            </p>
            <p className="text-[11px] text-[#555550]">
                Available for select projects — let&apos;s talk about yours.
            </p>
          </div>
          <Link
            href="/contact"
            className="text-[11px] tracking-[0.2em] uppercase text-[#EBEBEB] border-b border-[#555550] pb-0.5 hover:border-[#EBEBEB] transition-colors"
          >
            Get In Touch →
          </Link>
        </div>

      </main>
      <Footer />
    </div>
  )
}