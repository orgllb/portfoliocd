import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

async function getProduct(id) {
  const res = await fetch('https://fakestoreapi.com/products/' + id)

  if (!res.ok) {
    throw new Error('Failed to fetch product')
  }

  return res.json()
}

export async function generateMetadata({ params }) {
  const product = await getProduct(params.id)
  return {
    title: product.title + " — Peak'd Shop",
    description: product.description,
  }
}

export default async function ProductDetail({ params }) {
  const product = await getProduct(params.id)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8 py-12">
        <Link href="/store" style={{ color: '#999992', fontSize: '10px' }} className="uppercase mb-12 inline-block hover:opacity-70 transition-opacity">
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-8">
          <div className="aspect-square bg-white flex items-center justify-center p-10">
            <img src={product.image} alt={product.title} style={{ maxHeight: '350px', objectFit: 'contain' }} />
          </div>

          <div>
            <p className="text-[10px] text-[#999992] uppercase mb-4">{product.category}</p>
            <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-[3rem] text-[#EBEBEB] leading-tight mb-6">
              {product.title}
            </h1>
            <p className="text-2xl mb-6" style={{ color: '#FF6B00', fontFamily: 'var(--font-display)' }}>
              ${product.price}
            </p>
            <Link
                href={`/contact?item=${encodeURIComponent(product.title)}`}
                className="inline-block text-[11px] tracking-[0.2em] uppercase text-[#0a0a0a] bg-[#EBEBEB] px-8 py-3 hover:bg-[#cccccc] transition-colors mb-6"
            >
                Enquire to Purchase
            </Link>
            <p className="text-[12px] text-[#b8b8b1] leading-loose mb-6">
              {product.description}
            </p>
            <p className="text-[10px] text-[#8a8a84] uppercase">
              Rating: {product.rating?.rate} ({product.rating?.count} reviews)
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}