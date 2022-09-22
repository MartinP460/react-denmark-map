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

function Tooltip<Type extends Area>(
  { show, areas, customTooltip }: TooltipProps<Type>,
  ref: Ref<any>
) {
  const [hoveredArea, setHoveredArea] = useState<Type | null>(null)
  const [tooltipStyle, setTooltipStyle] = useState<CSSProperties>({
    position: 'absolute',
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

    const textLength = event.currentTarget.id.length * 11

    const left = event.pageX + 20 + 120 > window.innerWidth ? event.pageX - textLength : event.pageX

    setTooltipStyle((prevState) => ({
      ...prevState,
      top: event.pageY - 35,
      left: left + 20
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
    const tooltipStyle = {
      fontWeight: '500',
      background: 'white',
      borderRadius: '4px',
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
      padding: '6px 12px'
    }

    return (
      <div id="react-denmark-map-tooltip" style={tooltipStyle}>
        <p style={{ margin: '0px' }}>{area.display_name}</p>
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
