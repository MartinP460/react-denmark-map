import { fireEvent, render } from '@testing-library/react'
// the municipalities component is used to test the generic map component
import Municipalities from '../areas/municipalities/Municipalities'

describe('Map', () => {
  it('should render successfully', () => {
    render(<Municipalities />)
  })

  it('should render with the given className', () => {
    const { container } = render(<Municipalities className="test" />)

    const style = container.querySelector('#react-denmark-map-svg')?.classList

    expect(style).toContain('test')
  })

  it('should render with the given style', () => {
    const { container } = render(<Municipalities style={{ backgroundColor: 'red' }} />)

    // @ts-ignore
    const style = container.querySelector('#react-denmark-map-svg')?.style.backgroundColor

    expect(style).toBe('red')
  })

  it('should render with the given width', () => {
    const { container } = render(<Municipalities style={{ width: '700px' }} />)

    // @ts-ignore
    const width = container.querySelector('#react-denmark-map-svg')?.style.width

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
    const customTooltip = (municipality: any) => <div>{municipality.display_name}</div>

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
      // @ts-ignore
      expect.objectContaining({
        id: 'langeland',
        name: 'langeland',
        en_name: 'langeland',
        display_name: 'Langeland',
        code: '482'
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
      // @ts-ignore
      expect.objectContaining({
        id: 'langeland',
        name: 'langeland',
        en_name: 'langeland',
        display_name: 'Langeland',
        code: '482'
      })
    )
  })

  it('should not apply the hoverable className when hoverable prop is false', () => {
    const { container } = render(<Municipalities hoverable={false} />)

    const municipality = container.querySelector('#langeland')
    if (!municipality) throw new Error('Municipality not found')

    expect(municipality.classList).not.toContain('react-denmark-map-hoverable')
  })

  it('should apply the clickable className when clickable prop is true', () => {
    const { container } = render(<Municipalities clickable />)

    const municipality = container.querySelector('#langeland')
    if (!municipality) throw new Error('Municipality not found')

    expect(municipality.classList).toContain('react-denmark-map-clickable')
  })

  it('should apply the clickable className when clickable prop is undefined and onClick is set', () => {
    const onClick = jest.fn()

    const { container } = render(<Municipalities onClick={onClick} />)

    const municipality = container.querySelector('#langeland')

    if (!municipality) throw new Error('Municipality not found')

    expect(municipality.classList).toContain('react-denmark-map-clickable')
  })

  it('should call the onMouseEnter callback when entering a municipality', () => {
    const onMouseEnter = jest.fn()

    const { container } = render(<Municipalities onMouseEnter={onMouseEnter} />)

    const municipality = container.querySelector('#langeland')
    if (!municipality) throw new Error('Municipality not found')

    fireEvent.mouseEnter(municipality)

    expect(onMouseEnter).toHaveBeenCalled()
    expect(onMouseEnter).toHaveBeenCalledWith(
      // @ts-ignore
      expect.objectContaining({
        id: 'langeland',
        name: 'langeland',
        en_name: 'langeland',
        display_name: 'Langeland',
        code: '482'
      })
    )
  })

  it('should call the onMouseLeave callback when leaving a municipality', () => {
    const onMouseLeave = jest.fn()

    const { container } = render(<Municipalities onMouseLeave={onMouseLeave} />)

    const municipality = container.querySelector('#langeland')
    if (!municipality) throw new Error('Municipality not found')

    fireEvent.mouseLeave(municipality)

    expect(onMouseLeave).toHaveBeenCalled()
    expect(onMouseLeave).toHaveBeenCalledWith(
      // @ts-ignore
      expect.objectContaining({
        id: 'langeland',
        name: 'langeland',
        en_name: 'langeland',
        display_name: 'Langeland',
        code: '482'
      })
    )
  })

  it('should render with the given viewbox', () => {
    const { container } = render(
      <Municipalities viewBox={{ left: 0, top: 0, width: 7000, height: 8000 }} />
    )

    const viewbox = container.querySelector('svg')?.getAttribute('viewBox')

    expect(viewbox).toBe('0 0 7000 8000')
  })

  it('should render with the default viewBox width when no viewbox is provided', () => {
    const { container } = render(<Municipalities />)

    const viewbox = container.querySelector('svg')?.getAttribute('viewBox')

    expect(viewbox).toBe('0 0 10116 12289') // default width and height from the municipalities component
  })

  it('should round viewbox width and height to nearest integer', () => {
    const { container } = render(
      <Municipalities
        viewBox={{
          width: 1000.499,
          height: 1000.5
        }}
      />
    )

    const viewbox = container.querySelector('svg')?.getAttribute('viewBox')

    expect(viewbox).toBe('0 0 1000 1001')
  })

  it('should exclude an area when the exclude prop is set to filter an area', () => {
    const { container } = render(
      <Municipalities filterAreas={(municipality) => !(municipality.name === 'københavn')} />
    )

    const municipality = container.querySelector('#koebenhavn')
    expect(municipality).toBeNull()
  })

  it('should exclude all other areas when the exclude prop is set to a specific area', () => {
    const { container } = render(
      <Municipalities filterAreas={(municipality) => municipality.region.name === 'nordjylland'} />
    )

    const municipality1 = container.querySelector('#koebenhavn')
    const municipality2 = container.querySelector('#odense')
    const municipality3 = container.querySelector('#faxe')
    expect(municipality1).toBeNull()
    expect(municipality2).toBeNull()
    expect(municipality3).toBeNull()
  })

  it('should render different `d` when alt positions prop is set', () => {
    const mapDefault = render(<Municipalities />)
    const mapAlt = render(
      <Municipalities bornholmAltPostition anholtAltPosition laesoeAltPosition />
    )

    const bornholmDefault = mapDefault.container.querySelector('#bornholm')?.getAttribute('d')
    const anholtDefault = mapDefault.container.querySelector('#norddjurs')?.getAttribute('d')
    const laesoeDefault = mapDefault.container.querySelector('#laesoe')?.getAttribute('d')

    const bornholmAlt = mapAlt.container.querySelector('#bornholm')?.getAttribute('d')
    const anholtAlt = mapAlt.container.querySelector('#norddjurs')?.getAttribute('d')
    const laesoeAlt = mapAlt.container.querySelector('#laesoe')?.getAttribute('d')

    expect(bornholmDefault).toBeTruthy()
    expect(bornholmAlt).toBeTruthy()
    expect(bornholmDefault).not.toBe(bornholmAlt)

    expect(anholtDefault).toBeTruthy()
    expect(anholtAlt).toBeTruthy()
    expect(laesoeAlt).not.toBe(anholtAlt)

    expect(laesoeDefault).toBeTruthy()
    expect(laesoeAlt).toBeTruthy()
    expect(laesoeDefault).not.toBe(laesoeAlt)
  })
})
