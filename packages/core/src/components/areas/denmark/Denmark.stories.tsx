import { Meta, StoryObj } from '@storybook/react'
import Denmark from './Denmark'
import { MapProps } from '../../map/Map'
import { DenmarkType } from './data'

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
