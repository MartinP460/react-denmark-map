import { ReactNode } from 'react'

export type CustomZoomControls = (props: { onZoomIn(): void; onZoomOut(): void }) => ReactNode

export type ZoompaneProps = {
  zoomable: boolean
  customZoomControls?: CustomZoomControls
  children: ReactNode
}
