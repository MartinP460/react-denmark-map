import type { Meta, StoryObj } from '@storybook/react'
import type { DenmarkType } from '@/components/areas/denmark/data'
import { MapProps } from '@/components/map/Map'
import Denmark from '@/components/areas/denmark/Denmark'

const Wrapper = (props: MapProps<DenmarkType>) => {
  return (
    <div style={{ maxWidth: '650px', margin: '0 auto' }}>
      <Denmark {...props} />
    </div>
  )
}

const meta = {
  title: 'ReactDenmarkMap/Denmark',
  component: Wrapper,
  args: {}
} satisfies Meta<typeof Wrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
