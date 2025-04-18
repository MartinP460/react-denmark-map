import { MouseEvent, ReactNode, memo, useMemo, useRef } from 'react'
import { Area, PrivateMapProps } from '@/components/map/map.types'
import { test } from '@/utils'
import { TooltipMethods } from '@/components/tooltip/tooltip.types'
import { TOOLTIP_REF_INITIAL_VALUE } from '@/components/tooltip/tooltip.consts'
import { DEFAULT_VIEWBOX_HEIGHT, DEFAULT_VIEWBOX_WIDTH } from '@/components/map/map.consts'
import Tooltip from '@/components/tooltip'
import Zoompane from '@/components/zoompane'
import '@/styles.css'

const MapComponent = <Type extends Area>(props: PrivateMapProps<Type>) => {
  test.rerenders()

  const {
    viewBox,
    className,
    style = {},
    color = '#ccc',
    showTooltip = true,
    clickable,
    hoverable = true,
    zoomable = true,
    areas,
    customZoomControls,
    customTooltip,
    onClick,
    onHover,
    onMouseEnter,
    onMouseLeave,
    customizeAreas,
    filterAreas
  } = props

  const areaMap = useMemo(() => new Map(areas.map((area) => [area.id, area])), [areas])

  const tooltip = useRef<TooltipMethods>(TOOLTIP_REF_INITIAL_VALUE)

  const handleClick = (event: MouseEvent<SVGPathElement>) => {
    if (!onClick) return

    const area = areaMap.get(event.currentTarget.dataset['areaId'] ?? '')
    if (area) onClick(area)
  }

  const handleHover = (event: MouseEvent<SVGPathElement>) => {
    if (!onHover) return

    const area = areaMap.get(event.currentTarget.dataset['areaId'] ?? '')
    if (area) onHover(area)
  }

  const handleMouseEnter = (event: MouseEvent<SVGPathElement>) => {
    tooltip?.current?.handleMouseEnter(event)

    if (!onMouseEnter) return

    const area = areaMap.get(event.currentTarget.dataset['areaId'] ?? '')
    if (area) onMouseEnter(area)
  }

  const handleMouseLeave = (event: MouseEvent<SVGPathElement>) => {
    tooltip?.current?.handleMouseLeave()

    if (!onMouseLeave) return

    const area = areaMap.get(event.currentTarget.dataset['areaId'] ?? '')
    if (area) onMouseLeave(area)
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
      return (
        <path
          key={area.id}
          aria-describedby="react-denmark-map-tooltip-wrapper"
          data-area-id={area.id}
          d={area.d}
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
        areaMap={areaMap}
        customTooltip={customTooltip as (props: { area: Area }) => ReactNode}
        ref={tooltip}
      />
      <Zoompane zoomable={zoomable as boolean} customZoomControls={customZoomControls}>
        <svg
          id="react-denmark-map-svg"
          viewBox={
            `${Math.round(viewBox?.left ?? 0)} ` +
            `${Math.round(viewBox?.top ?? 0)} ` +
            `${Math.round(viewBox?.width ?? DEFAULT_VIEWBOX_WIDTH)} ` +
            `${Math.round(viewBox?.height ?? DEFAULT_VIEWBOX_HEIGHT)}`
          }
          width={viewBox?.width ?? DEFAULT_VIEWBOX_WIDTH}
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

export default memo(MapComponent) as typeof MapComponent
