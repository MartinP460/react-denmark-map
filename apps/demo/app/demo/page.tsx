'use client'

import { useState } from 'react'
import Tabs from '@/components/ui/Tabs'
import Description from '@/components/ui/Description'
import MunicipalitiesExample from '@/components/examples/MunicipalitiesExample'
import ConstituenciesExample from '@/components/examples/ConstituenciesExample'
import RegionsExample from '@/components/examples/RegionsExample'
import IslandsExample from '@/components/examples/IslandsExample'
import DenmarkExample from '@/components/examples/DenmarkExample'
import MunicipalitiesRegionsExample from '@/components/examples/MunicipalitiesRegionsExample'

const TABS = [
  'Municipalities',
  'Constituencies',
  'Regions',
  'Islands',
  'Denmark',
  'Regions & Municipalities'
]

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
      case 5:
        return <MunicipalitiesRegionsExample />
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
