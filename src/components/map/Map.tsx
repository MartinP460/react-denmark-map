import { MouseEvent, CSSProperties, ReactNode, useRef } from 'react'
import Tooltip from './Tooltip'
import '../../styles.css'

export type Area = {
  id: string
  name: string
  en_name: string
  display_name: string
  d: string
}

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
  customTooltip?: (area: Type) => ReactNode
  onClick?: (area: Type) => void
  onHover?: (area: Type) => void
  onMouseEnter?: (area: Type) => void
  onMouseLeave?: (area: Type) => void
  customizeAreas?: (area: Type) => { className?: string; style?: CSSProperties } | undefined
}

interface PrivateMapProps<Type extends Area> extends MapProps<Type> {
  areas: Type[]
  defaultViewBoxWidth: number
  defaultViewBoxHeight: number
}

const defaultProps: MapProps<Area> = {
  style: {},
  color: '#ccc',
  showTooltip: true,
  hoverable: true
}

export default function Map<Type extends Area>(props: PrivateMapProps<Type>) {
  const tooltip = useRef<any>()

  const handleClick = (event: MouseEvent<SVGPathElement>) => {
    const { onClick } = props
    if (!onClick) return

    const area = props.areas.find((area) => area.id === event.currentTarget.id)
    area && onClick(area)
  }

  const handleHover = (event: MouseEvent<SVGPathElement>) => {
    const { onHover } = props
    if (!onHover) return

    const area = props.areas.find((area) => area.id === event.currentTarget.id)
    area && onHover(area)
  }

  const handleMouseEnter = (event: MouseEvent<SVGPathElement>) => {
    tooltip.current.handleMouseEnter(event)

    const { onMouseEnter } = props
    if (!onMouseEnter) return

    const area = props.areas.find((area) => area.id === event.currentTarget.id)
    area && onMouseEnter(area)
  }

  const handleMouseLeave = (event: MouseEvent<SVGPathElement>) => {
    tooltip.current.handleMouseLeave(event)

    const { onMouseLeave } = props
    if (!onMouseLeave) return

    const area = props.areas.find((area) => area.id === event.currentTarget.id)
    area && onMouseLeave(area)
  }

  const getAreas = () => {
    const { areas, clickable, hoverable, customizeAreas, onClick, onHover } = props

    return areas.map((area) => {
      const attributes = customizeAreas ? customizeAreas(area) : null

      /* if the clickable prop is not explicitly set to false and the onCLick prop is set, 
      we set the clickable prop to true */
      const isClickable: boolean =
        (typeof clickable === 'undefined' && onClick) || clickable === true ? true : false

      const className = `
        ${isClickable ? 'react-denmark-map-clickable ' : ''}
        ${hoverable ? 'react-denmark-map-hoverable ' : ''}
      `

      return (
        <path
          key={area.id}
          id={area.id}
          data-name={area.name}
          data-en_name={area.en_name}
          data-display_name={area.display_name}
          d={area.d}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={onClick && handleClick}
          onMouseOver={onHover && handleHover}
          onMouseMove={(event) => tooltip.current.handleMouseMove(event)}
          style={attributes?.style}
          className={attributes?.className ? `${className}${attributes.className}` : className}
        />
      )
    })
  }

  return (
    <figure id="react-denmark-map">
      <Tooltip
        show={typeof props.showTooltip === 'undefined' ? true : props.showTooltip}
        areas={props.areas}
        customTooltip={props.customTooltip as (area: Area) => ReactNode}
        ref={tooltip}
      />
      <svg
        id="react-denmark-map-svg"
        version="1.1"
        viewBox={
          `${Math.round(props.viewBox?.left ?? 0)} ` +
          `${Math.round(props.viewBox?.top ?? 0)} ` +
          `${Math.round(props.viewBox?.width ?? props.defaultViewBoxWidth)} ` +
          `${Math.round(props.viewBox?.height ?? props.defaultViewBoxHeight)}`
        }
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        className={props.className}
        style={{
          fill: props.color,
          display: 'block',
          maxWidth: '1180px',
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          strokeLinejoin: 'round',
          strokeMiterlimit: 2,
          ...props.style
        }}
      >
        <g>{getAreas()}</g>
      </svg>
    </figure>
  )
}

Map.defaultProps = defaultProps
