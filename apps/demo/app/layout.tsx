import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import '@/app/globals.css'

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
      <body className={inter.className + ' min-h-screen max-w-(--breakpoint-2xl) mx-auto flex flex-col'}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
