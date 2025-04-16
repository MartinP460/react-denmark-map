import type { Meta, StoryObj } from '@storybook/react'
import type { ConstituencyType } from '@/components/areas/constituencies/constituencies.data'
import Constituencies from '@/components/areas/constituencies'
import { MapProps } from '@/components/map/map.types'

const Wrapper = (props: MapProps<ConstituencyType>) => {
  return (
    <div style={{ maxWidth: '650px', margin: '0 auto' }}>
      <Constituencies {...props} />
    </div>
  )
}

const meta = {
  title: 'ReactDenmarkMap/Constituencies',
  component: Wrapper,
  args: {}
} satisfies Meta<typeof Wrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithCustomizeConstituencies: Story = {
  args: {
    customizeAreas: (constituency) => {
      if (constituency.id === 'sjaellands' || constituency.id === 'fyns') {
        return {
          style: { fill: 'darkred' }
        }
      }
    }
  }
}
