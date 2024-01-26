import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'React Denmark Map',
  description: 'Customizable plug-and-play map of Denmark for visual presentation.',
  metadataBase: new URL('https://react-denmark-map.vercel.app'),
  openGraph: {
    type: 'website',
    title: 'React Denmark Map',
    description: 'Customizable plug-and-play map of Denmark for visual presentation.'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + ' min-h-screen max-w-screen-2xl mx-auto flex flex-col'}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
