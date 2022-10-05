import { ComponentStory, ComponentMeta } from '@storybook/react'
import Islands from './Islands'

const defaultStyle = {
  maxWidth: '750px',
  margin: '0 auto'
}

export default {
  title: 'ReactDenmarkMap/Islands',
  component: Islands,
  argTypes: {
    customizeAreas: {
      description: 'A function that is invoked for every geographical area.'
    }
  }
} as ComponentMeta<typeof Islands>

const Template: ComponentStory<typeof Islands> = (args) => <Islands {...args} />

export const Default = Template.bind({})
Default.args = {
  onClick: undefined,
  style: defaultStyle
}

export const WithCustomizeIslands = Template.bind({})
WithCustomizeIslands.args = {
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
