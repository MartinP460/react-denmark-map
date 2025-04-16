import { CSSProperties, ReactNode } from 'react'
import { RegionType } from '@/components/areas/regions/regions.data'

export type Area = {
  id: string
  name: string
  asciiName: string
  displayName: string
  d: string
  enTerm?: string
  region?: Omit<RegionType, 'd'>
  code?: string
}

export type AreaType<T extends readonly Area[]> = {
  [K in keyof T[number]]: T[number][K]
}

type ViewBox = {
  top?: number
  left?: number
  width?: number
  height?: number
}

export interface PrivateMapProps<Type extends Area> extends MapProps<Type> {
  areas: readonly Type[]
}

export interface MapProps<Type extends Area> {
  /** Applies a custom SVG viewbox to the element. Useful for fixed zooming.
   * @default
   * { top: 0, left: 0, width: 1000, height: 1215 }
   *
   * @example
   * ```jsx
   * <Municipalities viewBox={{ top: 0, left: 0, width: 1000, height: 1215 }} />
   * ```
   */
  viewBox?: ViewBox
  /** Applies a className to the underlying SVG element. */
  className?: string
  /** Applies custom style to the underlying SVG element. */
  style?: CSSProperties
  /** Applies a default color to each area.
   * @default #ccc
   */
  color?: CSSProperties['fill']
  /** Controls whether the tooltip should be shown. True by default. */
  showTooltip?: boolean
  /** Controls whether "clickable" styles should be applied to each area, namely "cursor: pointer;". */
  clickable?: boolean
  /** Controls whether "hoverable" styles should be applied to each area, namely the opacity. */
  hoverable?: boolean
  /** Controls whether the ability to zoom in and out should be enabled. */
  zoomable?: boolean
  /** Custom zoom control component for controlling zooming in and out.
   *
   * @param onZoomIn Callback for zooming in.
   * @param onZoomOut Callback for zooming out.
   * @example
   * ```jsx
   * const CustomZoomControls = ({ onZoomIn, onZoomOut }) => (
   *   <div>
   *     <button onClick={onZoomIn}>+</button>
   *     <button onClick={onZoomOut}>-</button>
   *   </div>
   * )
   *
   * const App = () => (
   *   <Municipalities customZoomControls={CustomZoomControls} />
   * )
   * ```
   */
  customZoomControls?: (props: { onZoomIn(): void; onZoomOut(): void }) => ReactNode
  /** Component for displaying a custom tooltip.
   *
   * @param area The area that the tooltip is being displayed for.
   * @example
   * ```jsx
   * const CustomTooltip = ({ area }) => (
   *   <div>
   *     <p>{area.displayName}</p>
   *   </div>
   * )
   *
   * const App = () => <Municipalities customTooltip={CustomTooltip} />
   * ```
   */
  customTooltip?: (props: { area: Type }) => ReactNode
  /** Custom event handler for handling clicks on a particular area.
   *
   * @param area The area that was clicked.
   * @returns JSX to be rendered as the tooltip.
   * @example
   * ```jsx
   * const App = () => {
   *   const onClick = (area) => {
   *     console.log(area)
   *   }
   *
   *   return (
   *    <Municipalities onClick={onClick} />
   *   )
   * }
   * ```
   */
  onClick?: (area: Type) => void
  /** Custom event handler for handling hover events on a particular area.
   *
   * @param area The area that was hovered.
   * @example
   * ```jsx
   * const App = () => {
   *   const onHover = (area) => {
   *     console.log(area)
   *   }
   *
   *   return (
   *    <Municipalities onHover={onHover} />
   *   )
   * }
   * ```
   */
  onHover?: (area: Type) => void
  /** Custom event handler for mouse-enter events on a particular area. Same as `onHover`.
   *
   * @param area The area that the mouse entered.
   */
  onMouseEnter?: (area: Type) => void
  /** Custom event handler for mouse-leave events on a particular area.
   *
   * @param area The area that the mouse entered.
   */
  onMouseLeave?: (area: Type) => void
  /** Function used to style each area.
   *
   * @param area The area to be customized.
   * @returns An object containing the `className` and/or `style` to be applied to the area.
   * @example
   * ```jsx
   * const App = () => {
   *   const customizeAreas = (area) => {
   *     if (area.region.name === 'hovedstaden') {
   *       return {
   *         className: 'fill-red-500',
   *       }
   *     }
   *   }
   *
   *   return (
   *    <Municipalities customizeAreas={customizeAreas} />
   *   )
   * }
   * ```
   */
  customizeAreas?: (area: Type) => { className?: string; style?: CSSProperties } | undefined
  /** Function used to filter areas and thus not render them.
   *
   * @param area The area to be filtered (or preserved).
   * @returns A boolean indicating whether the area should be rendered or not. Avoids rendering the area if the function returns false.
   * @example
   * ```jsx
   * const App = () => {
   *   const filterAreas = (area) => {
   *     if (area.region.name === 'hovedstaden') {
   *       return false
   *     }
   *   }
   *
   *   return (
   *    <Municipalities filterAreas={filterAreas} />
   *   )
   * }
   * ```
   */
  filterAreas?: (area: Type) => boolean
}
