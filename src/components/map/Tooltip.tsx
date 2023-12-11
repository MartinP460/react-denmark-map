import {
  useState,
  useImperativeHandle,
  forwardRef,
  ReactNode,
  CSSProperties,
  MouseEvent,
  MouseEventHandler,
  Ref
} from 'react'
import { Area } from './Map'

interface TooltipProps<Type> {
  show: boolean
  areas: Type[]
  customTooltip?: (area: Type) => ReactNode
}

export type TooltipMethods = {
  handleMouseEnter: (event: MouseEvent<SVGPathElement>) => void
  handleMouseLeave: () => void
  handleMouseMove: MouseEventHandler
}

function Tooltip<Type extends Area>(
  { show, areas, customTooltip }: TooltipProps<Type>,
  ref: Ref<TooltipMethods | undefined>
) {
  const [hoveredArea, setHoveredArea] = useState<Type | null>(null)
  const [tooltipStyle, setTooltipStyle] = useState<CSSProperties>({
    position: 'fixed',
    display: 'block',
    top: 0,
    left: 0
  })

  useImperativeHandle(ref, () => ({
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove
  }))

  const handleMouseMove: MouseEventHandler = (event) => {
    if (!show) return

    const scrollTop = document.documentElement.scrollTop

    /* this code calculates whether the tooltip is overflowing the window
    without measuring the width of the tooltip, but instead using a fixed
    width of 120px. Measuring the width causes major performance issues
    due to excessive amounts of rerenders and this is therefore an intentional
    feature. */
    const isXOverflowing = event.pageX + 20 + 120 > window.innerWidth

    setTooltipStyle((prevState) => ({
      ...prevState,
      top: event.pageY - 35 - scrollTop,
      left: event.pageX,
      transform: isXOverflowing ? 'translateX(calc(-100% - 20px))' : 'translateX(20px)'
    }))
  }

  const handleMouseEnter = (event: MouseEvent<SVGPathElement>) => {
    if (!show) return

    const area = areas.find((area) => area.id === event.currentTarget.id)

    setHoveredArea(area || null)
    setTooltipStyle((prevState) => ({
      ...prevState,
      display: 'block'
    }))
  }

  const handleMouseLeave = () => {
    if (!show) return

    setHoveredArea(null)
    setTooltipStyle((prevState) => ({
      ...prevState,
      display: 'none'
    }))
  }

  const defaultTooltip = (area: Area) => {
    return (
      <div id="react-denmark-map-tooltip" className="react-denmark-map-tooltip">
        <p>{area.display_name}</p>
      </div>
    )
  }

  const tooltip = customTooltip ? customTooltip : defaultTooltip

  return (
    <div id="react-denmark-map-tooltip-wrapper" style={tooltipStyle}>
      {hoveredArea && tooltip(hoveredArea)}
    </div>
  )
}

export default forwardRef(Tooltip)
