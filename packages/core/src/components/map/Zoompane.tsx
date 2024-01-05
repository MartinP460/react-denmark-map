import { ReactNode } from 'react'
import { TransformComponent, TransformWrapper, useControls } from 'react-zoom-pan-pinch'

type ZoompaneProps = {
  children: ReactNode
}

export default function Zoompane({ children }: ZoompaneProps) {
  return (
    <TransformWrapper maxScale={4}>
      <Controls />
      <TransformComponent contentStyle={{ width: '100%' }} wrapperStyle={{ width: '100%' }}>
        {children}
      </TransformComponent>
    </TransformWrapper>
  )
}

function Controls() {
  const { zoomIn, zoomOut } = useControls()

  return (
    <div className="react-denmark-map-zoom-controls">
      <button onClick={() => zoomIn()}>+</button>
      <button onClick={() => zoomOut()}>–</button>
    </div>
  )
}
