import type { Meta, StoryObj } from '@storybook/react'
import type { DenmarkType } from '@/components/areas/denmark/denmark.data'
import Denmark from '@/components/areas/denmark'
import { MapProps } from '@/components/map/map.types'

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
