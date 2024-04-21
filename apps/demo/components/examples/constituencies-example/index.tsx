import { Constituencies, ConstituencyType } from 'react-denmark-map'

export default function ConstituenciesExample() {
  const customizeAreas = (constituency: ConstituencyType) => {
    if (constituency.id === 'fyns') {
      return {
        style: { fill: '#c00' }
      }
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Constituencies customizeAreas={customizeAreas} className="p-2 sm:p-8" />
    </div>
  )
}
