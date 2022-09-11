import { ComponentStory, ComponentMeta } from '@storybook/react'
import Islands from './Islands'

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
  width: '700px'
}

export const WithCustomizeIslands = Template.bind({})
WithCustomizeIslands.args = {
  width: '700px',
  customizeAreas: (island) => {
    if (island.id === 'sjaelland') {
      return {
        style: { fill: 'green' }
      }
    }
  }
}
