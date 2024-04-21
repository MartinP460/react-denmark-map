import { Denmark } from 'react-denmark-map'

export default function DenmarkExample() {
  return (
    <div className="max-w-2xl mx-auto">
      <Denmark color="#c00" hoverable={false} showTooltip={false} className="p-2 sm:p-8" />
    </div>
  )
}
