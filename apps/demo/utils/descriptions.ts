type Description = {
  name: string
  description: string
  code: {
    thumbnail: string
    full: string
  }
}

export const descriptions: Description[] = [
  {
    name: 'Municipalities',
    description: `The Municipality component. 
      This example displays municipalities and more specifically the population of each. More pronounced colors indicate a higher population.`,
    code: {
      thumbnail: `import { Municipalities } from 'react-denmark-map'

const App = () => {
  // ...

  return (
    <Municipalities
      customTooltip={customTooltip}
      customizeAreas={customizeMunicipalities}
    />
  )
}`,
      full: `import { Municipalities } from 'react-denmark-map'
  
const municipalityData = [{ ... }]

const App = () => {
  const customizeMunicipalities = (municipality) => {
    const result = municipalityData.find((item) => item.id === municipality.name)

    if (!result) return

    return {
      style: {
        fill: \`rgba(204, 0, 0, \${result.population / 150000})\`
      }
    }
  }

  const customTooltip = (municipality) => {
    const result = municipalityData.find((item) => item.id === municipality.name)

    return (
      <div>
        <p>{municipality.displayName}</p>
        <p>{\`Population: \${result?.population ?? 'N/A'}\`}</p>
      </div>
    )
  }

  return (
    <Municipalities
      customTooltip={customTooltip}
      customizeAreas={customizeMunicipalities}
    />
  )
}`
    }
  },
  {
    name: 'Constituencies',
    description:
      'The Constituencies component. In this example, the constituency of Fyn (Fyns storkreds) is colored red.',
    code: {
      thumbnail: `import { Constituencies } from 'react-denmark-map'

const App = () => {
  return (
    <Constituencies
      customizeAreas={customizeAreas}
    />
  )
}`,
      full: `import { Constituencies } from 'react-denmark-map'

const App = () => {
  const customizeAreas = (constituency) => {
    // keep in mind that the constituency names have an s at the end,
    // because it's an abbrevation for, e.g. 'fyns storkreds'
    if (constituency.id === 'fyns') {
      return {
        style: { fill: '#c00' }
      }
    }
  }

  return (
    <Constituencies
      customizeAreas={customizeAreas}
    />
  )
}`
    }
  },
  {
    name: 'Regions',
    description:
      'The Regions component. This example logs the name of a region to the console hovering or clicking it.',
    code: {
      thumbnail: `import { Regions } from 'react-denmark-map'

const App = () => {
  // ...

  return (
    <Regions
      onClick={handleClick}
      onHover={handleHover}
    />
  )
}`,
      full: `import { Regions } from 'react-denmark-map'

const App = () => {
  const handleClick = (municipality) => {
    console.log(\`You clicked region \${municipality.displayName}.\`)
  }

  const handleHover = (municipality) => {
    console.log(\`You hovered region \${municipality.displayName}.\`)
  }

  return (
    <Regions
      onClick={handleClick}
      onHover={handleHover}
    />
  )
}`
    }
  },
  {
    name: 'Islands',
    description:
      // eslint-disable-next-line quotes
      "The Islands component. In this example, hovering an island sets it's color to red.",
    code: {
      thumbnail: `import { Islands } from 'react-denmark-map'
      
const App = () => {
  // ...

  return (
    <Islands
      customizeAreas={customizeIslands}
      onHover={(island) => ...}
      hoverable={false}
    />
  )
}`,
      full: `import { useState } from 'react'
import { Islands } from 'react-denmark-map'

const App = () => {
  const [hoveredIsland, setHoveredIsland] = useState(null)

  if (island.id === hoveredIsland) {
    return {
      style: {
        fill: '#c00'
      }
    }
  }

  return (
    <Islands
      customizeAreas={customizeIslands}
      onHover={(island) => setHoveredIsland(island.id)}
      hoverable={false}
    />
  )
}`
    }
  },
  {
    name: 'Denmark',
    description:
      'The Denmark component. This example displays a dark-green map of Denmark that has no side effects when hovering.',
    code: {
      thumbnail: `import { Denmark } from 'react-denmark-map'

const App = () => {
  return (
    <Denmark
      color="darkgreen"
      hoverable={false}
      showTooltip={false}
    />
  )
}`,
      full: `import { Denmark } from 'react-denmark-map'

const App = () => {
  return (
    <Denmark
      color="darkgreen"
      hoverable={false}
      showTooltip={false}
    />
  )
}`
    }
  },
  {
    name: 'Municipalities & Regions',
    description: 'An example of focusing on the municipalities within a specific region.',
    code: {
      thumbnail: `import { Municipalities, Regions } from 'react-denmark-map'

const App = () => {
  // ...

  return (
    <div>
      {/* ... */}
      {selectedRegion ? (
        <Municipalities
          customizeAreas={customizeAreas}
          viewBox={regionViewboxes[selectedRegion.name]}
          filterAreas={(municipality) => 
            municipality.region.id === selectedRegion.id}
          bornholmAltPostition
        />
      ) : (
        <Regions
          onClick={(region) => setSelectedRegion(region)}
        />
      )}
    </div>
  )
}`,
      full: `import { useState } from 'react'
import { Municipalities, Regions } from 'react-denmark-map'
      
const App = () => {
  const [selectedRegion, setSelectedRegion] = useState(null)

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

  const customizeAreas = (municipality) => {
    if (selectedRegion?.id === municipality.region.id) {
      return {
        style: {
          fill: '#c00'
        }
      }
    }
  }

  return (
    <div className="relative">
      {selectedRegion && (
        <button
          onClick={() => setSelectedRegion(null)}
        >
          &larr;
        </button>
      )}
      {selectedRegion ? (
        <Municipalities
          customizeAreas={customizeAreas}
          viewBox={regionViewboxes[selectedRegion.name]}
          filterAreas={(municipality) => 
            municipality.region.id === selectedRegion.id}
          bornholmAltPostition
        />
      ) : (
        <Regions
          onClick={(region) => setSelectedRegion(region)}
        />
      )}
    </div>
  )
}`
    }
  }
]
