import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Gallery — BB Creative Director',
}

const galleryItems = [
  { id: 1, alt: 'Brand identity design for Nova Studio', width: 800, height: 600, label: 'Nova Studio — Brand' },
  { id: 2, alt: 'Editorial photography for Mono Magazine', width: 800, height: 1000, label: 'Mono — Editorial' },
  { id: 3, alt: 'Digital campaign for Veil fashion label', width: 800, height: 600, label: 'Veil — Digital' },
  { id: 4, alt: 'Wayfinding system for Meridian venue', width: 800, height: 800, label: 'Meridian — Signage' },
  { id: 5, alt: 'Campaign artwork for Obsidian Collective', width: 800, height: 600, label: 'Obsidian — Campaign' },
  { id: 6, alt: 'Typography study and type specimen', width: 800, height: 1000, label: 'Type Study' },
]

export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8 py-12">

        <p className="text-[12px] tracking-[0.3em] text-[#999992] uppercase mb-4">
          Gallery
        </p>
        <h1
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-[clamp(3rem,8vw,6rem)] text-[#EBEBEB] leading-none mb-16"
        >
          Visual Archive
        </h1>

        {/* Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {galleryItems.map((item) => (
           <div
                key={item.id}
                className="bg-[#1a1a18] group overflow-hidden relative aspect-square"
            >
              <Image
                src={`https://picsum.photos/seed/${item.id * 13}/${item.width}/${item.height}`}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500"
              />
              {/* Label on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-[#111111] to-transparent">
                <p className="text-[12px] text-[#888880] tracking-[0.2em] uppercase">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </main>
      <Footer />
    </div>
  )
}