'use client'

import Button from '@/components/ui/Button'
import Pattern from '@/components/ui/Pattern'

export default function Home() {
  return (
    <main className="flex flex-col mt-36 relative max-w-screen-lg mx-auto">
      <Pattern className="absolute -left-20 -top-20" />
      <h1 className="text-5xl">React Denmark Map</h1>
      <h5 className="mt-4">Customizable plug-and-play map of Denmark for visual representation.</h5>
      <div className="flex gap-4 mt-8">
        <Button variant="fill" href="/demo" className="shadow-lg">
          Demo
        </Button>
        <Button
          variant="outline"
          href="https://github.com/MartinP460/react-denmark-map"
          className="shadow-lg"
        >
          Docs
        </Button>
      </div>
    </main>
  )
}
