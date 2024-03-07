import { Meta, StoryObj } from '@storybook/react'
import { MapProps } from '@/components/map/Map'
import { MunicipalityType } from '@/components/areas/municipalities/data'
import Municipalities from '@/components/areas/municipalities/Municipalities'

const mockMunicipalityData: { id: string; average: number }[] = [
  {
    id: 'assens',
    average: 7.1
  },
  {
    id: 'billund',
    average: 6.9
  },
  {
    id: 'bornholm',
    average: 6.7
  },
  {
    id: 'esbjerg',
    average: 6.2
  },
  {
    id: 'frederikshavn',
    average: 6.0
  },
  {
    id: 'guldborgsund',
    average: 5.7
  },
  {
    id: 'haderslev',
    average: 6.4
  },
  {
    id: 'herning',
    average: 6.1
  },
  {
    id: 'hjørring',
    average: 6.3
  },
  {
    id: 'holbæk',
    average: 5.9
  },
  {
    id: 'holstebro',
    average: 6.4
  },
  {
    id: 'horsens',
    average: 5.8
  },
  {
    id: 'kolding',
    average: 5.9
  },
  {
    id: 'københavn',
    average: 6.0
  },
  {
    id: 'køge',
    average: 5.1
  },
  {
    id: 'lemvig',
    average: 6.2
  },
  {
    id: 'lyngby-taarbæk',
    average: 6.1
  },
  {
    id: 'norddjurs',
    average: 6.0
  },
  {
    id: 'odense',
    average: 5.8
  },
  {
    id: 'randers',
    average: 6.4
  },
  {
    id: 'ringkøbing-skjern',
    average: 6.3
  },
  {
    id: 'ringsted',
    average: 5.9
  },
  {
    id: 'roskilde',
    average: 5.9
  },
  {
    id: 'silkeborg',
    average: 5.9
  },
  {
    id: 'skanderborg',
    average: 5.7
  },
  {
    id: 'skive',
    average: 6.4
  },
  {
    id: 'struer',
    average: 5.7
  },
  {
    id: 'svendborg',
    average: 6.1
  },
  {
    id: 'sønderborg',
    average: 6.2
  },
  {
    id: 'thisted',
    average: 6.3
  },
  {
    id: 'tønder',
    average: 5.7
  },
  {
    id: 'varde',
    average: 6.6
  },
  {
    id: 'vejen',
    average: 6.2
  },
  {
    id: 'vejle',
    average: 6.2
  },
  {
    id: 'vesthimmerlands',
    average: 5.9
  },
  {
    id: 'viborg',
    average: 6.1
  },
  {
    id: 'aalborg',
    average: 6.3
  },
  {
    id: 'aarhus',
    average: 6.6
  }
]

const Wrapper = (props: MapProps<MunicipalityType>) => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Municipalities {...props} />
    </div>
  )
}

const meta = {
  title: 'ReactDenmarkMap/Municipalities',
  component: Wrapper
} satisfies Meta<typeof Wrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithCustomStyle: Story = {
  args: {
    style: {
      backgroundColor: 'black',
      paddingTop: '20px',
      paddingBottom: '20px'
    },
    color: 'white'
  }
}

export const WithCustomizeMunicipalities: Story = {
  args: {
    customizeAreas: (municipality) => {
      const result = mockMunicipalityData.find((item) => item.id === municipality.name)

      if (!result) return

      if (result.average > 6) {
        return {
          style: { fill: 'green' }
        }
      } else {
        return {
          style: { fill: 'red' }
        }
      }
    }
  }
}

const CustomTooltip = ({ area }: { area: MunicipalityType }) => {
  const result = mockMunicipalityData.find((item) => item.id === area.name)

  return (
    <div
      style={{
        color: 'white',
        backgroundColor: '#101e2b',
        borderRadius: '4px',
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
        padding: '6px 12px'
      }}
    >
      <p style={{ fontWeight: 'bold', margin: '0px' }}>{area.displayName}</p>
      <p style={{ margin: '2px 0 0' }}>Average: {result?.average ? result.average : 'N/A'}</p>
    </div>
  )
}

export const WithCustomTooltip: Story = {
  args: {
    customizeAreas: (municipality) => {
      const result = mockMunicipalityData.find((item) => item.id === municipality.name)

      if (!result) return

      return {
        style: {
          fill: '#17407a'
        }
      }
    },
    customTooltip: CustomTooltip
  }
}

export const WithMouseEvents: Story = {
  args: {
    onMouseEnter: (municipality) => {
      console.log('Mouse entered: ', municipality)
    },
    onMouseLeave: (municipality) => {
      console.log('Mouse left: ', municipality)
    }
  }
}

export const WithoutTooltip: Story = {
  args: {
    showTooltip: false
  }
}

export const NonHoverable: Story = {
  args: {
    hoverable: false,
    showTooltip: false
  }
}

export const Clickable: Story = {
  args: {
    hoverable: false,
    clickable: true
  }
}

export const WithFilterAreas: Story = {
  args: {
    filterAreas: (municipality) => !(municipality.region.name === 'hovedstaden')
  }
}

export const WithCustomZoomControls: Story = {
  args: {
    customZoomControls: ({ onZoomIn, onZoomOut }) => (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button onClick={onZoomIn}>+</button>
        <button onClick={onZoomOut}>–</button>
      </div>
    )
  }
}

export const NonZoomable: Story = {
  args: {
    zoomable: false
  }
}
