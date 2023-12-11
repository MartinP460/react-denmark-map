import { Meta, StoryObj } from '@storybook/react'
import Islands from './Islands'

const defaultStyle = {
  maxWidth: '750px',
  margin: '0 auto'
}

const meta = {
  title: 'ReactDenmarkMap/Islands',
  component: Islands,
  args: {
    style: defaultStyle
  }
} satisfies Meta<typeof Islands>

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
    },
    onClick: undefined,
    style: defaultStyle
  }
}
