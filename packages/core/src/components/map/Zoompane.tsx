import { ComponentType, ReactNode } from 'react'
import { TransformComponent, TransformWrapper, useControls } from 'react-zoom-pan-pinch'

type CustomZoomControls = ComponentType<{ onZoomIn(): void; onZoomOut(): void }>

type ZoompaneProps = {
  zoomable: boolean
  customZoomControls?: CustomZoomControls
  children: ReactNode
}

export default function Zoompane({ zoomable, customZoomControls, children }: ZoompaneProps) {
  return (
    <TransformWrapper maxScale={zoomable ? 4 : 1}>
      {zoomable && <Controls CustomZoomControls={customZoomControls} />}
      <TransformComponent contentStyle={{ width: '100%' }} wrapperStyle={{ width: '100%' }}>
        {children}
      </TransformComponent>
    </TransformWrapper>
  )
}

function Controls({ CustomZoomControls }: { CustomZoomControls?: CustomZoomControls }) {
  const { zoomIn, zoomOut } = useControls()

  return (
    <div className="react-denmark-map-zoom-controls-wrapper">
      {CustomZoomControls ? (
        /* We use an empty callback to avoid accidently calling `zoomIn` or `zoomOut` with arguments. */
        <CustomZoomControls onZoomIn={() => zoomIn()} onZoomOut={() => zoomOut()} />
      ) : (
        <div id="react-denmark-map-zoom-controls" className="react-denmark-map-zoom-controls">
          <button onClick={() => zoomIn()}>+</button>
          <button onClick={() => zoomOut()}>–</button>
        </div>
      )}
    </div>
  )
}
