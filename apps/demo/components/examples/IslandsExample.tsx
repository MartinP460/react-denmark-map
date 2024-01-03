import { useState } from 'react'
import { IslandType, Islands } from 'react-denmark-map'

export default function IslandsExample() {
  const [hoveredIsland, setHoveredIsland] = useState<string | null>(null)

  const customizeIslands = (island: IslandType) => {
    if (island.id === hoveredIsland) {
      return {
        style: {
          fill: '#c00'
        }
      }
    }
  }

  return (
    <Islands
      customizeAreas={customizeIslands}
      onHover={(island) => setHoveredIsland(island.id)}
      className="p-2 sm:p-8 md:w-[750px] mx-auto"
      hoverable={false}
    />
  )
}
