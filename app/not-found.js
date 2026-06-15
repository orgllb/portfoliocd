import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8 flex items-center">
        <div className="relative w-full">

          <span
            style={{ fontFamily: 'var(--font-display)', fontSize: '20rem' }}
            className="leading-none text-[#161614] absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block"
          >
            404
          </span>

          <div className="relative z-10 max-w-lg">
            <p className="text-[10px] text-[#999992] uppercase mb-6">Error 404</p>
            <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-[8rem] text-[#EBEBEB] leading-none mb-8">
              Page Not Found
            </h1>
            <p className="text-[11px] text-[#a8a8a1] leading-loose mb-10">
              The page you are looking for does not exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/" style={{ fontFamily: 'var(--font-display)' }} className="text-sm text-[#EBEBEB] border-b border-[#a8a8a1] pb-0.5 hover:border-[#EBEBEB] transition-colors">
                Go Home
              </Link>
              <Link href="/work" style={{ fontFamily: 'var(--font-display)' }} className="text-sm text-[#a8a8a1] border-b border-[#8a8a84] pb-0.5 hover:text-[#EBEBEB] transition-colors">
                View Work
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}