import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getAllPosts, getPostBySlug } from '../../data/posts'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p style={{ color: '#555550' }}>Post not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8 py-12">
        <Link href="/blog" style={{ color: '#444440', fontSize: '10px' }} className="uppercase mb-12 inline-block hover:opacity-70 transition-opacity">
          Back to Journal
        </Link>
        <div className="max-w-2xl mt-8">
          <p className="text-[10px] text-[#444440] uppercase mb-4">{post.category} - {post.date} - {post.readTime} read</p>
          <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-[5rem] text-[#EBEBEB] leading-none mb-10">{post.title}</h1>
          <hr className="border-t border-[#1a1a18] mb-8" />
          {post.body.map((para, i) => (
            <p key={i} className="text-[12px] text-[#666660] leading-loose mb-6">{para}</p>
          ))}
        </div>
        <div className="border-t border-[#1a1a18] pt-10 mt-16">
          <Link href="/blog" style={{ color: '#444440', fontSize: '11px' }} className="uppercase hover:opacity-70 transition-opacity">
            Back to Journal
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}