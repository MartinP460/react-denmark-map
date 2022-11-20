import { ComponentStory, ComponentMeta } from '@storybook/react'
import Constituencies from './Constituencies'

const defaultStyle = {
  maxWidth: '750px',
  margin: '0 auto'
}

export default {
  title: 'ReactDenmarkMap/Constituencies',
  component: Constituencies,
  argTypes: {
    customizeAreas: {
      description: 'A function that is invoked for every geographical area.'
    }
  }
} as ComponentMeta<typeof Constituencies>

const Template: ComponentStory<typeof Constituencies> = (args) => <Constituencies {...args} />

export const Default = Template.bind({})
Default.args = {
  onClick: undefined,
  style: defaultStyle
}

export const WithCustomizeConstituencies = Template.bind({})
WithCustomizeConstituencies.args = {
  customizeAreas: (constituency) => {
    if (constituency.id === 'sjaellands' || constituency.id === 'fyns') {
      return {
        style: { fill: 'darkred' }
      }
    }
  },
  onClick: undefined,
  style: defaultStyle
}
