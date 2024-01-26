import { CSSProperties, ComponentType, MouseEvent, ReactNode, memo, useRef } from 'react'
import Tooltip, { TooltipMethods } from './Tooltip'
import Zoompane from './Zoompane'
import { RegionType } from '../areas/regions'
import { test } from '../../utils'
import '../../styles.css'

export type Area = {
  id: string
  name: string
  en_name: string
  display_name: string
  d: string
  en_term?: string
  region?: Omit<RegionType, 'd'>
  code?: string
  altD?: string
}

export type AreaType<T extends readonly Area[]> = {
  [K in keyof T[number]]: T[number][K]
}

const DEFAULT_VIEWBOX_WIDTH = 1000
const DEFAULT_VIEWBOX_HEIGHT = 1215

type ViewBox = {
  top?: number
  left?: number
  width?: number
  height?: number
}

export interface MapProps<Type extends Area> {
  viewBox?: ViewBox
  className?: string
  style?: CSSProperties
  color?: CSSProperties['fill']
  showTooltip?: boolean
  clickable?: boolean
  hoverable?: boolean
  bornholmAltPostition?: boolean
  laesoeAltPosition?: boolean
  anholtAltPosition?: boolean
  /** Controls whether the ability to zoom in and out should be enabled. */
  zoomable?: boolean
  /** Custom zoom control component for controlling zooming in and out.
   *
   * @param onZoomIn Callback for zooming in.
   * @param onZoomOut Callback for zooming out.
   */
  CustomZoomControls?: ComponentType<{ onZoomIn(): void; onZoomOut(): void }>
  customTooltip?: (area: Type) => ReactNode
  onClick?: (area: Type) => void
  onHover?: (area: Type) => void
  onMouseEnter?: (area: Type) => void
  onMouseLeave?: (area: Type) => void
  customizeAreas?: (area: Type) => { className?: string; style?: CSSProperties } | undefined
  filterAreas?: (area: Type) => boolean
}

interface PrivateMapProps<Type extends Area> extends MapProps<Type> {
  areas: readonly Type[]
}

const Map = <Type extends Area>({
  style = {},
  color = '#ccc',
  showTooltip = true,
  hoverable = true,
  zoomable = true,
  ...props
}: PrivateMapProps<Type>) => {
  test.rerenders()
  const {
    areas,
    clickable,
    bornholmAltPostition,
    laesoeAltPosition,
    anholtAltPosition,
    viewBox,
    CustomZoomControls,
    className,
    onMouseEnter,
    onMouseLeave,
    customTooltip,
    customizeAreas,
    onClick,
    onHover,
    filterAreas
  } = props

  const tooltip = useRef<TooltipMethods>()

  const handleClick = (event: MouseEvent<SVGPathElement>) => {
    if (!onClick) return

    const area = areas.find((area) => area.id === event.currentTarget.dataset['areaId'])
    area && onClick(area)
  }

  const handleHover = (event: MouseEvent<SVGPathElement>) => {
    if (!onHover) return

    const area = areas.find((area) => area.id === event.currentTarget.dataset['areaId'])
    area && onHover(area)
  }

  const handleMouseEnter = (event: MouseEvent<SVGPathElement>) => {
    tooltip?.current?.handleMouseEnter(event)

    if (!onMouseEnter) return

    const area = areas.find((area) => area.id === event.currentTarget.dataset['areaId'])
    area && onMouseEnter(area)
  }

  const handleMouseLeave = (event: MouseEvent<SVGPathElement>) => {
    tooltip?.current?.handleMouseLeave()

    if (!onMouseLeave) return

    const area = areas.find((area) => area.id === event.currentTarget.dataset['areaId'])
    area && onMouseLeave(area)
  }

  const getAreas = () => {
    return areas.map((area) => {
      if (filterAreas && !filterAreas(area)) return null

      const attributes = customizeAreas ? customizeAreas(area) : null

      /* if the clickable prop is not explicitly set to false and the onCLick prop is set, 
      we set the clickable prop to true */
      const isClickable: boolean =
        (typeof clickable === 'undefined' && onClick) || clickable === true ? true : false

      const className = `
        ${isClickable ? 'react-denmark-map-clickable ' : ''}
        ${hoverable ? 'react-denmark-map-hoverable ' : ''}
      `

      const shouldUseAltPosition =
        (area.name === 'bornholm' && bornholmAltPostition) ||
        (area.name === 'læsø' && laesoeAltPosition) ||
        (area.name === 'norddjurs' && anholtAltPosition)

      const draw = shouldUseAltPosition && area.altD ? area.altD : area.d

      return (
        <path
          key={area.id}
          aria-describedby="react-denmark-map-tooltip-wrapper"
          data-area-id={area.id}
          d={draw}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={onClick && handleClick}
          onMouseOver={onHover && handleHover}
          onMouseMove={(event) => tooltip?.current?.handleMouseMove(event)}
          style={attributes?.style}
          className={attributes?.className ? `${className}${attributes.className}` : className}
        />
      )
    })
  }

  return (
    <figure
      id="react-denmark-map"
      className="react-denmark-map"
      style={{
        position: 'relative',
        maxWidth: '1180px',
        margin: 0
      }}
    >
      <Tooltip
        show={typeof showTooltip === 'undefined' ? true : showTooltip}
        areas={areas}
        customTooltip={customTooltip as (area: Area) => ReactNode}
        ref={tooltip}
      />
      <Zoompane zoomable={zoomable as boolean} CustomZoomControls={CustomZoomControls}>
        <svg
          id="react-denmark-map-svg"
          viewBox={
            `${Math.round(viewBox?.left ?? 0)} ` +
            `${Math.round(viewBox?.top ?? 0)} ` +
            `${Math.round(viewBox?.width ?? DEFAULT_VIEWBOX_WIDTH)} ` +
            `${Math.round(viewBox?.height ?? DEFAULT_VIEWBOX_HEIGHT)}`
          }
          className={className}
          style={{
            fill: color,
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            strokeLinejoin: 'round',
            strokeMiterlimit: 2,
            ...style
          }}
        >
          <g>{getAreas()}</g>
        </svg>
      </Zoompane>
    </figure>
  )
}

export default memo(Map) as typeof Map
