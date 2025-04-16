import {
  CSSProperties,
  MouseEvent,
  MouseEventHandler,
  Ref,
  forwardRef,
  useImperativeHandle,
  useState
} from 'react'
import { Area } from '@/components/map/map.types'
import { TooltipMethods, TooltipProps } from '@/components/tooltip/tooltip.types'

function Tooltip<Type extends Area>(
  { show, areas, customTooltip }: TooltipProps<Type>,
  ref: Ref<TooltipMethods | undefined>
) {
  const [hoveredArea, setHoveredArea] = useState<Type | null>(null)
  const [tooltipStyle, setTooltipStyle] = useState<CSSProperties>({
    position: 'fixed',
    display: 'block',
    top: 0,
    left: 0,
    zIndex: 1
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

    const area = areas.find((area) => area.id === event.currentTarget.dataset['areaId'])

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

  const defaultTooltip = ({ area }: { area: Area }) => {
    return (
      <div id="react-denmark-map-tooltip" className="react-denmark-map-tooltip">
        <p>{area.displayName}</p>
      </div>
    )
  }

  const tooltip = customTooltip ? customTooltip : defaultTooltip

  return (
    <div role="tooltip" id="react-denmark-map-tooltip-wrapper" style={tooltipStyle}>
      {hoveredArea && tooltip({ area: hoveredArea })}
    </div>
  )
}

export default forwardRef(Tooltip)
