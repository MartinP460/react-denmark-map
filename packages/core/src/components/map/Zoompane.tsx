import { ComponentType, ReactNode } from 'react'
import { TransformComponent, TransformWrapper, useControls } from 'react-zoom-pan-pinch'

type CustomZoomControls = ComponentType<{ onZoomIn(): void; onZoomOut(): void }>

type ZoompaneProps = {
  zoomable: boolean
  CustomZoomControls?: CustomZoomControls
  children: ReactNode
}

export default function Zoompane({ zoomable, CustomZoomControls, children }: ZoompaneProps) {
  return (
    <TransformWrapper maxScale={zoomable ? 4 : 1}>
      {zoomable && <Controls CustomZoomControls={CustomZoomControls} />}
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
        <CustomZoomControls onZoomIn={() => zoomIn()} onZoomOut={() => zoomOut()} />
      ) : (
        <div className="react-denmark-map-zoom-controls">
          <button onClick={() => zoomIn()}>+</button>
          <button onClick={() => zoomOut()}>–</button>
        </div>
      )}
    </div>
  )
}
