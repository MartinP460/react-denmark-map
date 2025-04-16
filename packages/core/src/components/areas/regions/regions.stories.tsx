import type { Meta, StoryObj } from '@storybook/react'
import type { RegionType } from '@/components/areas/regions/regions.data'
import { MapProps } from '@/components/map/map.types'
import Regions from '@/components/areas/regions'

const Wrapper = (props: MapProps<RegionType>) => {
  return (
    <div style={{ maxWidth: '650px', margin: '0 auto' }}>
      <Regions {...props} />
    </div>
  )
}

const meta = {
  title: 'ReactDenmarkMap/Regions',
  component: Wrapper,
  args: {}
} satisfies Meta<typeof Wrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithCustomizeRegions: Story = {
  args: {
    customizeAreas: (municipality) => {
      if (municipality.id === 'syddanmark') {
        return {
          style: { fill: 'green' }
        }
      }
    }
  }
}
