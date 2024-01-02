'use client'

import { CopyBlock, dracula } from 'react-code-blocks'
import { IconExternalLink, IconPhoto } from '@tabler/icons-react'
import Button from '@/components/ui/Button'
import Pattern from '@/components/ui/Pattern'
import Logo from '@/components/ui/Logo'

export default function Home() {
  return (
    <main className="flex flex-col relative xl:max-w-screen-lg max-w-screen-md container mx-auto px-4 sm:px-8 md:px-12 h-[75vh] md:h-[70vh] justify-center">
      <div className="relative">
        <Pattern className="absolute w-[410px] h-[410px] -left-20 -top-12 md:w-[510px] md:h-[510px] md:-left-32 md:-top-20" />
      </div>
      <Logo width="96" />
      <h1 className="text-4xl sm:text-6xl tracking-tight mt-3">react-denmark-map</h1>
      <h5 className="mt-4 text-gray-800">
        Customizable plug-and-play map of Denmark for visual representation.
      </h5>
      <CopyBlock
        text="npm install react-denmark-map"
        language="txt"
        theme={dracula}
        customStyle={{ width: '325px', marginTop: '2rem', padding: '0.7rem', fontSize: '14px' }}
      />
      <div className="flex gap-4 mt-8">
        <Button variant="fill" href="/demo" className="shadow-lg" Icon={IconPhoto}>
          Demo
        </Button>
        <Button
          variant="outline"
          href="https://github.com/MartinP460/react-denmark-map"
          className="shadow-lg"
          Icon={IconExternalLink}
          externalLink
        >
          Docs
        </Button>
      </div>
    </main>
  )
}
