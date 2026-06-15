import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const dynamic = 'force-dynamic'
async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products')

  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }

  return res.json()
}

export const metadata = {
  title: "Peak'd Shop — Bat-Orgil Batbold",
  description: "Shop the Peak'd collection — clothing and accessories from our independent lifestyle brand.",
}

export default async function Store() {
  const products = await getProducts()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8 py-12">
        <p className="text-[10px] text-[#999992] uppercase mb-4">Peakd Shop</p>
        <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-[6rem] text-[#EBEBEB] leading-none mb-6">
          Shop
        </h1>
        <p className="text-[11px] text-[#a8a8a1] leading-loose mb-16 max-w-xl">
          A rotating edit of Peakd essentials. Limited drops, no restocks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a18]">
          {products.map((product) => (
            <Link key={product.id} href={'/store/' + product.id} className="group bg-[#111111] p-6 hover:bg-[#161614] transition-colors block">
              <div className="w-full aspect-square relative overflow-hidden mb-4 bg-white flex items-center justify-center">
                <img src={product.image} alt={product.title} style={{ maxHeight: '180px', objectFit: 'contain' }} />
              </div>
              <p style={{ fontFamily: 'var(--font-display)' }} className="text-lg text-[#a8a8a1] group-hover:text-[#EBEBEB] transition-colors mb-1 line-clamp-2">
                {product.title}
              </p>
              <p className="text-[10px] text-[#8a8a84] uppercase mb-2">{product.category}</p>
              <p className="text-sm" style={{ color: '#FF6B00' }}>${product.price}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}