import { ComponentStory, ComponentMeta } from '@storybook/react'
import Municipalities from './Municipalities'
import { mockMunicipalityData } from '../../../data/mockMunicipalityData'

export default {
  title: 'ReactDenmarkMap/Municipalities',
  component: Municipalities,
  argTypes: {
    customizeMunicipalities: {
      description:
        'A function that is invoked for every municipality and return a custom object or className.'
    }
  }
} as ComponentMeta<typeof Municipalities>

const Template: ComponentStory<typeof Municipalities> = (args) => <Municipalities {...args} />

export const Default = Template.bind({})
Default.args = {
  width: '700px'
}

export const WithCustomizeMunicipalities = Template.bind({})
WithCustomizeMunicipalities.args = {
  width: '700px',
  customizeAreas: (municipality) => {
    const result = mockMunicipalityData.find((item) => item.id === municipality.da_id)

    if (!result) return

    if (result.average > 6) {
      return {
        style: { fill: 'green' }
      }
    } else {
      return {
        style: { fill: 'red' }
      }
    }
  }
}

export const WithoutTooltip = Template.bind({})
WithoutTooltip.args = {
  width: '700px',
  showTooltip: false
}

export const WithCustomTooltip = Template.bind({})
WithCustomTooltip.args = {
  width: '700px',
  customizeAreas: (municipality) => {
    const result = mockMunicipalityData.find((item) => item.id === municipality.da_id)

    if (!result) return

    return {
      style: {
        fill: '#17407a'
      }
    }
  },
  customTooltip: (municipality) => {
    const result = mockMunicipalityData.find((item) => item.id === municipality.da_id)

    return (
      <div
        style={{
          color: 'white',
          backgroundColor: '#101e2b',
          borderRadius: '4px',
          boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
          padding: '6px 12px'
        }}
      >
        <p style={{ fontWeight: 'bold', margin: '0px' }}>{municipality.name}</p>
        <p style={{ margin: '2px 0 0' }}>Average: {result?.average ? result.average : 'N/A'}</p>
      </div>
    )
  }
}
