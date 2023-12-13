import { Meta, StoryObj } from '@storybook/react'
import Denmark from './Denmark'

const defaultStyle = {
  maxWidth: '750px',
  margin: '0 auto'
}

const meta = {
  title: 'ReactDenmarkMap/Denmark',
  component: Denmark,
  args: {
    style: defaultStyle
  }
} satisfies Meta<typeof Denmark>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
