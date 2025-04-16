import { MouseEvent, MouseEventHandler, ReactNode } from 'react'

export interface TooltipProps<Type> {
  show: boolean
  areaMap: Map<string, Type>
  customTooltip?: (props: { area: Type }) => ReactNode
}

export type TooltipMethods = {
  handleMouseEnter: (event: MouseEvent<SVGPathElement>) => void
  handleMouseLeave: () => void
  handleMouseMove: MouseEventHandler
}
