import { Bebas_Neue, Space_Mono } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LWDM2X5BCT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LWDM2X5BCT');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}