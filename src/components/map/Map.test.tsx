import { fireEvent, render } from '@testing-library/react'
import Municipalities from '../areas/municipalities/Municipalities'

describe('Map', () => {
  it('should render successfully', () => {
    render(<Municipalities />)
  })

  it('should render with default props', () => {
    const { container } = render(<Municipalities />)

    const parent = container.querySelector('figure')
    const svg = container.querySelector('svg')

    expect(parent?.style.width).toBe('auto')
    expect(svg?.style.fill).toBe('#ccc')
  })

  it('should render with the given width', () => {
    const { container } = render(<Municipalities width="700px" />)

    const width = container.querySelector('figure')?.style.width

    expect(width).toBe('700px')
  })

  it('should render with the given color', () => {
    const { container } = render(<Municipalities color="blue" />)

    const color = container.querySelector('svg')?.style.fill

    expect(color).toBe('blue')
  })

  it('should render the municipality name in the tooltip when hovering', () => {
    const { container } = render(<Municipalities />)

    const municipality = container.querySelector('#langeland')

    if (!municipality) throw new Error('Municipality not found')

    fireEvent.mouseEnter(municipality)

    const tooltip = container.querySelector('#react-denmark-map-tooltip')

    expect(tooltip?.textContent).toBe('Langeland')
  })

  it('should not render the tooltip when showTooltip is false', () => {
    const { container } = render(<Municipalities showTooltip={false} />)

    const municipality = container.querySelector('#langeland')

    if (!municipality) throw new Error('Municipality not found')

    fireEvent.mouseEnter(municipality)

    const tooltip = container.querySelector('#react-denmark-map-tooltip')
    expect(tooltip).toBeNull()
  })

  it('should render the custom tooltip when hovering', () => {
    const customTooltip = (municipality: any) => <div>{municipality.name}</div>

    const { container } = render(<Municipalities customTooltip={customTooltip} />)

    const municipality = container.querySelector('#langeland')
    if (!municipality) throw new Error('Municipality not found')

    fireEvent.mouseEnter(municipality)

    const defaultTooltip = container.querySelector('#react-denmark-map-tooltip')
    expect(defaultTooltip).toBeFalsy()

    const customTooltipElement = container.querySelector('#react-denmark-map-tooltip-wrapper > div')
    expect(customTooltipElement?.textContent).toBe('Langeland')
  })

  it('should call the onClick function when clicking a municipality', () => {
    const onClick = jest.fn()

    const { container } = render(<Municipalities onClick={onClick} />)

    const municipality = container.querySelector('#langeland')
    if (!municipality) throw new Error('Municipality not found')

    fireEvent.click(municipality)

    expect(onClick).toHaveBeenCalled()
    expect(onClick).toHaveBeenCalledWith(
      expect.objectContaining({
        id: 'langeland',
        da_id: 'langeland',
        name: 'Langeland'
      })
    )
  })

  it('should call the onHover callback when hovering', () => {
    const onHover = jest.fn()

    const { container } = render(<Municipalities onHover={onHover} />)

    const municipality = container.querySelector('#langeland')
    if (!municipality) throw new Error('Municipality not found')

    fireEvent.mouseOver(municipality)

    expect(onHover).toHaveBeenCalled()
    expect(onHover).toHaveBeenCalledWith(
      expect.objectContaining({
        id: 'langeland',
        da_id: 'langeland',
        name: 'Langeland'
      })
    )
  })
})
