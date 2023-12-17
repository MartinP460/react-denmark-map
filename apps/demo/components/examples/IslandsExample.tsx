import { useState } from 'react'
import { IslandType, Islands } from 'react-denmark-map'

export default function IslandsExample() {
  const [hoveredIsland, setHoveredIsland] = useState<string | null>(null)

  const customizeIslands = (island: IslandType) => {
    const islandColor: { [key: string]: string } = {
      sjaelland: 'red',
      fyn: 'gold',
      jylland: 'green'
    }

    if (island.id === hoveredIsland) {
      return {
        style: {
          fill: islandColor[island.id]
        }
      }
    }
  }

  return (
    <Islands
      customizeAreas={customizeIslands}
      onHover={(island) => setHoveredIsland(island.id)}
      className="p-2 sm:p-8 md:w-[750px] mx-auto"
    />
  )
}
