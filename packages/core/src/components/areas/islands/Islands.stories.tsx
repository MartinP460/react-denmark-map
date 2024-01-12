import { Meta, StoryObj } from '@storybook/react'
import Islands from './Islands'
import { MapProps } from '../../map/Map'
import { IslandType } from './data'

const Wrapper = (props: MapProps<IslandType>) => {
  return (
    <div style={{ maxWidth: '650px', margin: '0 auto' }}>
      <Islands {...props} />
    </div>
  )
}

const meta = {
  title: 'ReactDenmarkMap/Islands',
  component: Wrapper,
  args: {}
} satisfies Meta<typeof Wrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithCustomizeIslands: Story = {
  args: {
    customizeAreas: (island) => {
      if (island.id === 'sjaelland') {
        return {
          style: { fill: 'green' }
        }
      }
    }
  }
}
