import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'React Denmark Map | Docs',
  description:
    'React Denmark Map - Customizable plug-and-play map of Denmark for visual presentation.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + ' min-h-screen max-w-screen-2xl mx-auto bg-gray-100'}>
        {children}
      </body>
    </html>
  )
}