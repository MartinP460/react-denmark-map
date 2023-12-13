import type { Meta, StoryObj } from '@storybook/react'
import Constituencies from './Constituencies'

const defaultStyle = {
  maxWidth: '750px',
  margin: '0 auto'
}

const meta = {
  title: 'ReactDenmarkMap/Constituencies',
  component: Constituencies,
  args: {
    style: defaultStyle
  }
} satisfies Meta<typeof Constituencies>

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
