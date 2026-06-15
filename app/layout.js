import { Bebas_Neue, Space_Mono } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Bat-Orgil Batbold — Creative Director',
  description: 'Melbourne-based Creative Director. Brand identity, digital experiences and art direction.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${spaceMono.variable}`}>
      <body className="bg-[#111111] text-[#EBEBEB] antialiased">
        {children}
        <GoogleAnalytics gaId="G-LWDM2X5BCT" />
      </body>
    </html>
  )
}