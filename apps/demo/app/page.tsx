'use client'

import { IconExternalLink, IconPhoto } from '@tabler/icons-react'
import { CopyBlock, dracula } from 'react-code-blocks'
import Button from '@/components/ui/button'
import Logo from '@/components/ui/logo'

export default function Home() {
  return (
    <main className="flex flex-col relative xl:max-w-(--breakpoint-lg) max-w-(--breakpoint-md) container mx-auto px-4 sm:px-8 md:px-12 h-[75vh] md:h-[70vh] justify-center">
      <Logo width="72" />
      <h1 className="text-4xl sm:text-5xl 2xl:text-6xl tracking-tight mt-3">react-denmark-map</h1>
      <h5 className="mt-4 text-gray-800">
        Customizable plug-and-play map of Denmark for visual representation.
      </h5>
      <div className="mt-8 2xl:mt-10">
        <CopyBlock
          text="npm install react-denmark-map"
          language="txt"
          theme={dracula}
          customStyle={{
            width: '325px',
            padding: '0.7rem',
            fontSize: '14px'
          }}
        />
      </div>
      <div className="flex gap-4 mt-8">
        <Button variant="fill" href="/demo" className="shadow-lg" icon={<IconPhoto size="20" />}>
          Demo
        </Button>
        <Button
          variant="outline"
          href="https://github.com/MartinP460/react-denmark-map"
          className="shadow-lg"
          icon={<IconExternalLink size="20" />}
          externalLink
        >
          Docs
        </Button>
      </div>
    </main>
  )
}
