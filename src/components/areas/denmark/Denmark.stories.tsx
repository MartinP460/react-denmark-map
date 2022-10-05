import { ComponentStory, ComponentMeta } from '@storybook/react'
import Denmark from './Denmark'

const defaultStyle = {
  maxWidth: '750px',
  margin: '0 auto'
}

export default {
  title: 'ReactDenmarkMap/Denmark',
  component: Denmark,
  argTypes: {
    customizeAreas: {
      description: 'A function that is invoked for every geographical area.'
    }
  }
} as ComponentMeta<typeof Denmark>

const Template: ComponentStory<typeof Denmark> = (args) => <Denmark {...args} />

export const Default = Template.bind({})
Default.args = {
  onClick: undefined,
  style: defaultStyle
}
