import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default async function Blog() {
  const response = await fetch('http://localhost:3000/api/posts')
  const posts = await response.json()
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8 py-12">
        <p className="text-[10px] text-[#444440] uppercase mb-4">Journal</p>
        <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-[6rem] text-[#EBEBEB] leading-none mb-16">
          Thoughts
        </h1>
        <ul className="list-none">
          {posts.map((post) => (
            <li key={post.id} className="border-b border-[#1a1a18] py-6">
              <Link href={'/blog/' + post.slug} className="block hover:opacity-70 transition-opacity">
                <p style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#555550] mb-1">
                  {post.title}
                </p>
                <p className="text-[10px] text-[#333330]">{post.date}</p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-[10px] text-[#333330] uppercase mb-3">
  Inspiration
</p>
<p className="text-[11px] text-[#555550] mb-6">
  These are the websites and brands that inspire my creative direction, design thinking and cultural perspective.
</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a18]">
    <a href="https://hypebeast.com" target="_blank" rel="noopener noreferrer" className="bg-[#111111] p-6 block hover:bg-[#161614] transition-colors group">
      <p style={{ fontFamily: 'var(--font-display)' }} className="text-xl text-[#555550] group-hover:text-[#EBEBEB] transition-colors mb-2">
        Hypebeast
      </p>
      <p style={{ fontSize: '10px', color: '#333330' }}>
        Streetwear and culture
      </p>
    </a>
    <a href="https://stockx.com" target="_blank" rel="noopener noreferrer" className="bg-[#111111] p-6 block hover:bg-[#161614] transition-colors group">
      <p style={{ fontFamily: 'var(--font-display)' }} className="text-xl text-[#555550] group-hover:text-[#EBEBEB] transition-colors mb-2">
        StockX
      </p>
      <p style={{ fontSize: '10px', color: '#333330' }}>
        Culture and commerce
      </p>
    </a>
    <a href="https://nytimes.com" target="_blank" rel="noopener noreferrer" className="bg-[#111111] p-6 block hover:bg-[#161614] transition-colors group">
      <p style={{ fontFamily: 'var(--font-display)' }} className="text-xl text-[#555550] group-hover:text-[#EBEBEB] transition-colors mb-2">
        NY Times
      </p>
      <p style={{ fontSize: '10px', color: '#333330' }}>
        News and journalism
      </p>
    </a>
  </div>
      </main>
      <Footer />
    </div>
  )
}