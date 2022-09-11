import { ComponentStory, ComponentMeta } from '@storybook/react'
import Regions from './Regions'

export default {
  title: 'ReactDenmarkMap/Regions',
  component: Regions,
  argTypes: {
    customizeAreas: {
      description:
        'A function that is invoked for every municipality and return a custom object or className.'
    }
  }
} as ComponentMeta<typeof Regions>

const Template: ComponentStory<typeof Regions> = (args) => <Regions {...args} />

export const Default = Template.bind({})
Default.args = {
  width: '700px'
}

export const WithCustomizeRegions = Template.bind({})
WithCustomizeRegions.args = {
  width: '700px',
  customizeAreas: (municipality) => {
    if (municipality.id === 'syddanmark') {
      return {
        style: { fill: 'green' }
      }
    }
  }
}
