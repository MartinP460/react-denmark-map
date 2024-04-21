'use client'

import { useState } from 'react'
import ConstituenciesExample from '@/components/examples/constituencies-example'
import DenmarkExample from '@/components/examples/denmark-example'
import IslandsExample from '@/components/examples/islands-example'
import MunicipalitiesExample from '@/components/examples/municipalities-example'
import RegionsExample from '@/components/examples/regions-example'
import Description from '@/components/ui/description'
import Tabs from '@/components/ui/tabs'

const TABS = ['Municipalities', 'Constituencies', 'Regions', 'Islands', 'Denmark']

export default function Home() {
  const [activeTab, setActiveTab] = useState(0)

  const getMap = () => {
    switch (activeTab) {
      case 0:
        return <MunicipalitiesExample />
      case 1:
        return <ConstituenciesExample />
      case 2:
        return <RegionsExample />
      case 3:
        return <IslandsExample />
      case 4:
        return <DenmarkExample />
    }
  }

  return (
    <main className="flex flex-col xl:grid xl:grid-cols-5 relative">
      <div className="xl:col-span-2">
        <Tabs tabs={TABS} activeTab={activeTab} onSelect={(i) => setActiveTab(i)} />
      </div>
      <div className="xl:order-2 col-span-3 mt-4 md:mt-4">{getMap()}</div>
      <Description activeTab={activeTab} />
    </main>
  )
}
