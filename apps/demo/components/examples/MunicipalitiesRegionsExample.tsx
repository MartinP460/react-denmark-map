import { useState } from 'react'
import { Municipalities, RegionType, Regions } from 'react-denmark-map'

export default function MunicipalitiesRegionsExample() {
  const [selectedRegion, setSelectedRegion] = useState<RegionType | null>(null)

  const regionViewboxes = {
    nordjylland: {
      top: -500,
      width: 6000,
      height: 6000
    },
    midtjylland: {
      top: 3000,
      width: 6300,
      height: 6000
    },
    syddanmark: {
      top: 6300,
      width: 6500,
      height: 6000
    },
    sjælland: {
      left: 5000,
      top: 6600,
      width: 6500,
      height: 6000
    },
    hovedstaden: {
      left: 8000,
      top: 5500,
      width: 4600,
      height: 4000
    }
  }

  const customizeAreas = () => ({
    style: {
      fill: '#c00'
    }
  })

  return (
    <div className="relative">
      {selectedRegion && (
        <button
          className="absolute left-4 md:top-10 md:left-20 text-5xl hover:opacity-60 opacity-80 bg-gray-300 rounded px-2 py-1"
          onClick={() => setSelectedRegion(null)}
        >
          &larr;
        </button>
      )}
      {selectedRegion ? (
        <Municipalities
          customizeAreas={customizeAreas}
          viewBox={regionViewboxes[selectedRegion.name]}
          filterAreas={(municipality) => municipality.region.id === selectedRegion.id}
          bornholmAltPostition
          className="p-2 sm:p-8 md:w-[750px] mx-auto"
        />
      ) : (
        <Regions
          onClick={(region) => setSelectedRegion(region)}
          className="p-2 sm:p-8 md:w-[750px] mx-auto"
        />
      )}
    </div>
  )
}
