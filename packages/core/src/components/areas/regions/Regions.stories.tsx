import { Meta, StoryObj } from '@storybook/react'
import Regions from './Regions'

const defaultStyle = {
  maxWidth: '750px',
  margin: '0 auto'
}

const meta = {
  title: 'ReactDenmarkMap/Regions',
  component: Regions,
  args: {
    style: defaultStyle
  }
} satisfies Meta<typeof Regions>

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
