import { useCallback, useMemo, useState } from 'react'
import { fireEvent, render } from '@testing-library/react'
// the municipalities component is used to test the generic map component
import Constituencies from '../areas/constituencies/Constituencies'
import Denmark from '../areas/denmark/Denmark'
import Islands from '../areas/islands/Islands'
import Municipalities from '../areas/municipalities/Municipalities'
import Regions from '../areas/regions/Regions'
import { MunicipalityType } from '../areas/municipalities'
import { test } from '../../utils'

describe('Map', () => {
  afterEach(() => jest.restoreAllMocks())

  describe('should render with', () => {
    it('constituencies', () => {
      const { container } = render(<Constituencies />)
      const constituency = container.querySelector('[data-area-id="sydjyllands"]')
      expect(constituency).toBeTruthy()
    })

    it('denmark', () => {
      const { container } = render(<Denmark />)
      const denmark = container.querySelector('[data-area-id="danmark"]')
      expect(denmark).toBeTruthy()
    })

    it('islands', () => {
      const { container } = render(<Islands />)
      const island = container.querySelector('[data-area-id="fyn"]')
      expect(island).toBeTruthy()
    })

    it('municipalities', () => {
      const { container } = render(<Municipalities />)
      const municipality = container.querySelector('[data-area-id="langeland"]')
      expect(municipality).toBeTruthy()
    })

    it('regions', () => {
      const { container } = render(<Regions />)
      const region = container.querySelector('[data-area-id="nordjylland"]')
      expect(region).toBeTruthy()
    })
  })

  describe('should rerender', () => {
    it('upon prop update', async () => {
      const Test = () => {
        const [state, setState] = useState(0)

        // eslint-disable-next-line react-hooks/exhaustive-deps
        const style = useMemo(() => ({ color: 'red' }), [state])

        return (
          <>
            <button onClick={() => setState(state + 1)}></button>
            <Municipalities style={style} />
          </>
        )
      }

      const { container } = render(<Test />)

      const button = container.getElementsByTagName('button')
      const spy = jest.spyOn(test, 'rerenders')

      fireEvent.click(button[0])
      fireEvent.click(button[0])
      fireEvent.click(button[0])

      expect(spy).toHaveBeenCalledTimes(3)
    })
  })

  describe('should not rerender', () => {
    it('with no props', async () => {
      const Test = () => {
        const [state, setState] = useState(0)

        return (
          <>
            <button onClick={() => setState(state + 1)}></button>
            <Municipalities />
          </>
        )
      }

      const { container } = render(<Test />)

      const button = container.getElementsByTagName('button')
      const spy = jest.spyOn(test, 'rerenders')

      fireEvent.click(button[0])
      fireEvent.click(button[0])
      fireEvent.click(button[0])

      expect(spy).toHaveBeenCalledTimes(0)
    })

    it('with memoized function prop', async () => {
      const Test = () => {
        const [state, setState] = useState(0)

        const customizeAreas = useCallback(() => {
          return {
            style: {
              fill: 'red'
            }
          }
        }, [])

        return (
          <>
            <button onClick={() => setState(state + 1)}></button>
            <Municipalities customizeAreas={customizeAreas} />
          </>
        )
      }

      const { container } = render(<Test />)

      const button = container.getElementsByTagName('button')
      const spy = jest.spyOn(test, 'rerenders')

      fireEvent.click(button[0])
      fireEvent.click(button[0])
      fireEvent.click(button[0])

      expect(spy).toHaveBeenCalledTimes(0)
    })

    it('with memoized object prop', async () => {
      const Test = () => {
        const [state, setState] = useState(0)

        const style = useMemo(() => ({ color: 'red' }), [])

        return (
          <>
            <button onClick={() => setState(state + 1)}></button>
            <Municipalities style={style} />
          </>
        )
      }

      const { container } = render(<Test />)

      const button = container.getElementsByTagName('button')
      const spy = jest.spyOn(test, 'rerenders')

      fireEvent.click(button[0])
      fireEvent.click(button[0])
      fireEvent.click(button[0])

      expect(spy).toHaveBeenCalledTimes(0)
    })
  })

  describe('with no props', () => {
    it('should render the municipality name in the tooltip when hovering', () => {
      const { container } = render(<Municipalities />)

      const municipality = container.querySelector('[data-area-id="langeland"]')

      if (!municipality) throw new Error('Municipality not found')

      fireEvent.mouseEnter(municipality)

      const tooltip = container.querySelector('#react-denmark-map-tooltip')

      expect(tooltip?.textContent).toBe('Langeland')
    })

    it('should be able to zoom in and out', async () => {
      const { container } = render(<Municipalities />)

      const zoomInButton = container.querySelector('.react-denmark-map-zoom-controls > button')
      const zoomOutButton = container.querySelector(
        '.react-denmark-map-zoom-controls > button:nth-child(2)'
      )

      if (!zoomInButton || !zoomOutButton) throw new Error('Zoom buttons not found')

      let zoomPanePrevious = container.querySelector<HTMLElement>('.react-transform-component')
      let zoomPanePreviousStyle = zoomPanePrevious?.style.transform

      fireEvent.click(zoomInButton)

      // Since zooming has an animation, we must wait for the animation to finish before testing
      // whether the zoom has triggered. It may cause some flakyness.
      await new Promise((r) => setTimeout(r, 250))

      expect(
        container.querySelector<HTMLElement>('.react-transform-component')?.style.transform
      ).not.toBe(zoomPanePreviousStyle)

      fireEvent.click(zoomOutButton)

      zoomPanePrevious = container.querySelector<HTMLElement>('.react-transform-component')
      zoomPanePreviousStyle = zoomPanePrevious?.style.transform

      fireEvent.click(zoomInButton)

      await new Promise((r) => setTimeout(r, 250))

      expect(
        container.querySelector<HTMLElement>('.react-transform-component')?.style.transform
      ).not.toBe(zoomPanePreviousStyle)
    })
  })

  describe('with prop', () => {
    describe('className', () => {
      it('should render with the given className', () => {
        const { container } = render(<Municipalities className="test" />)

        const style = container.querySelector('#react-denmark-map-svg')?.classList

        expect(style).toContain('test')
      })
    })

    describe('style', () => {
      it('should render with the given style', () => {
        const { container } = render(<Municipalities style={{ width: '700px' }} />)

        const width = container.querySelector<HTMLElement>('#react-denmark-map-svg')?.style.width

        expect(width).toBe('700px')
      })
    })

    describe('color', () => {
      it('should render with the given color', () => {
        const { container } = render(<Municipalities color="blue" />)

        const color = container.querySelector('svg')?.style.fill

        expect(color).toBe('blue')
      })
    })

    describe('showTooltip', () => {
      it('should not render the tooltip when showTooltip is false', () => {
        const { container } = render(<Municipalities showTooltip={false} />)

        const municipality = container.querySelector('[data-area-id="langeland"]')

        if (!municipality) throw new Error('Municipality not found')

        fireEvent.mouseEnter(municipality)

        const tooltip = container.querySelector('#react-denmark-map-tooltip')
        expect(tooltip).toBeNull()
      })
    })

    describe('customTooltip', () => {
      it('should render the custom tooltip when hovering', () => {
        const customTooltip = (municipality: MunicipalityType) => (
          <div>{municipality.display_name}</div>
        )

        const { container } = render(<Municipalities customTooltip={customTooltip} />)

        const municipality = container.querySelector('[data-area-id="langeland"]')
        if (!municipality) throw new Error('Municipality not found')

        fireEvent.mouseEnter(municipality)

        const defaultTooltip = container.querySelector('#react-denmark-map-tooltip')
        expect(defaultTooltip).toBeFalsy()

        const customTooltipElement = container.querySelector(
          '#react-denmark-map-tooltip-wrapper > div'
        )
        expect(customTooltipElement?.textContent).toBe('Langeland')
      })
    })

    describe('onClick', () => {
      it('should call the onClick function when clicking a municipality', () => {
        const onClick = jest.fn()

        const { container } = render(<Municipalities onClick={onClick} />)

        const municipality = container.querySelector('[data-area-id="langeland"]')
        if (!municipality) throw new Error('Municipality not found')

        fireEvent.click(municipality)

        expect(onClick).toHaveBeenCalled()
        expect(onClick).toHaveBeenCalledWith(
          expect.objectContaining({
            id: 'langeland',
            name: 'langeland',
            en_name: 'langeland',
            display_name: 'Langeland',
            code: '482'
          })
        )
      })

      it('should apply the clickable className when clickable prop is undefined', () => {
        const onClick = jest.fn()

        const { container } = render(<Municipalities onClick={onClick} />)

        const municipality = container.querySelector('[data-area-id="langeland"]')

        if (!municipality) throw new Error('Municipality not found')

        expect(municipality.classList).toContain('react-denmark-map-clickable')
      })
    })

    describe('onHover', () => {
      it('should call the onHover callback when hovering', () => {
        const onHover = jest.fn()

        const { container } = render(<Municipalities onHover={onHover} />)

        const municipality = container.querySelector('[data-area-id="langeland"]')
        if (!municipality) throw new Error('Municipality not found')

        fireEvent.mouseOver(municipality)

        expect(onHover).toHaveBeenCalled()
        expect(onHover).toHaveBeenCalledWith(
          expect.objectContaining({
            id: 'langeland',
            name: 'langeland',
            en_name: 'langeland',
            display_name: 'Langeland',
            code: '482'
          })
        )
      })
    })

    describe('hoverable', () => {
      it('should not apply the hoverable className when hoverable prop is false', () => {
        const { container } = render(<Municipalities hoverable={false} />)

        const municipality = container.querySelector('[data-area-id="langeland"]')
        if (!municipality) throw new Error('Municipality not found')

        expect(municipality.classList).not.toContain('react-denmark-map-hoverable')
      })
    })

    describe('clickable', () => {
      it('should apply the clickable className when clickable prop is true', () => {
        const { container } = render(<Municipalities clickable />)

        const municipality = container.querySelector('[data-area-id="langeland"]')
        if (!municipality) throw new Error('Municipality not found')

        expect(municipality.classList).toContain('react-denmark-map-clickable')
      })
    })

    describe('onMouseEnter', () => {
      it('should call the onMouseEnter callback when entering a municipality', () => {
        const onMouseEnter = jest.fn()

        const { container } = render(<Municipalities onMouseEnter={onMouseEnter} />)

        const municipality = container.querySelector('[data-area-id="langeland"]')
        if (!municipality) throw new Error('Municipality not found')

        fireEvent.mouseEnter(municipality)

        expect(onMouseEnter).toHaveBeenCalled()
        expect(onMouseEnter).toHaveBeenCalledWith(
          expect.objectContaining({
            id: 'langeland',
            name: 'langeland',
            en_name: 'langeland',
            display_name: 'Langeland',
            code: '482'
          })
        )
      })
    })

    describe('onMouseLeave', () => {
      it('should call the onMouseLeave callback when leaving a municipality', () => {
        const onMouseLeave = jest.fn()

        const { container } = render(<Municipalities onMouseLeave={onMouseLeave} />)

        const municipality = container.querySelector('[data-area-id="langeland"]')
        if (!municipality) throw new Error('Municipality not found')

        fireEvent.mouseLeave(municipality)

        expect(onMouseLeave).toHaveBeenCalled()
        expect(onMouseLeave).toHaveBeenCalledWith(
          expect.objectContaining({
            id: 'langeland',
            name: 'langeland',
            en_name: 'langeland',
            display_name: 'Langeland',
            code: '482'
          })
        )
      })
    })

    describe('customizeAreas', () => {
      it('should render given areas with the given style and className', () => {
        const customizeAreas = (municipality: MunicipalityType) => {
          if (municipality.name === 'langeland') {
            return {
              className: 'red-municipality',
              style: {
                fill: 'red'
              }
            }
          }
        }

        const { container } = render(<Municipalities customizeAreas={customizeAreas} />)

        const municipality = container.querySelector<HTMLElement>('[data-area-id="langeland"]')
        if (!municipality) throw new Error('Municipality not found')

        const differentMunicipality = container.querySelector<HTMLElement>(
          '[data-area-id="koebenhavn"]'
        )
        if (!differentMunicipality) throw new Error('Municipality not found')

        expect(municipality.style.fill).toBe('red')
        expect(municipality.classList).toContain('red-municipality')

        expect(differentMunicipality.style.fill).not.toBe('red')
        expect(differentMunicipality.classList).not.toContain('red-municipality')
      })
    })

    describe('viewBox', () => {
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

        expect(viewbox).toBe('0 0 1000 1215') // default width and height from the municipalities component
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
    })

    describe('filterAreas', () => {
      it('should exclude an area when the exclude prop is set to filter an area', () => {
        const { container } = render(
          <Municipalities filterAreas={(municipality) => !(municipality.name === 'københavn')} />
        )

        const municipality = container.querySelector('#koebenhavn')
        expect(municipality).toBeNull()
      })

      it('should exclude all other areas when the exclude prop is set to a specific area', () => {
        const { container } = render(
          <Municipalities
            filterAreas={(municipality) => municipality.region.name === 'nordjylland'}
          />
        )

        const municipality1 = container.querySelector('#koebenhavn')
        const municipality2 = container.querySelector('#odense')
        const municipality3 = container.querySelector('#faxe')
        expect(municipality1).toBeNull()
        expect(municipality2).toBeNull()
        expect(municipality3).toBeNull()
      })
    })

    describe('zoomable', () => {
      it('should not render zoom controls when zoomable prop is false', () => {
        const { container } = render(<Municipalities zoomable={false} />)

        const zoomControls = container.querySelector('.react-denmark-map-zoom-controls')
        expect(zoomControls).toBeFalsy()
      })
    })

    describe('CustomZoomControls', () => {
      it('should render custom zoom controls', () => {
        const CustomZoomControls = ({
          onZoomIn,
          onZoomOut
        }: {
          onZoomIn(): void
          onZoomOut(): void
        }) => (
          <div>
            <button id="zoom-in" onClick={onZoomIn}>
              Zoom in
            </button>
            <button id="zoom-out" onClick={onZoomOut}>
              Zoom out
            </button>
          </div>
        )

        const { container } = render(<Municipalities customZoomControls={CustomZoomControls} />)

        const zoomInButton = container.querySelector('#zoom-in')
        const zoomOutButton = container.querySelector('#zoom-out')

        if (!zoomInButton || !zoomOutButton) throw new Error('Zoom buttons not found')
      })
    })
  })
})
