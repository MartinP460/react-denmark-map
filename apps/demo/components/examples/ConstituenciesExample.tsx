import { Constituencies, ConstituencyType } from 'react-denmark-map'

export default function ConstituenciesExample() {
  const customizeAreas = (constituency: ConstituencyType) => {
    if (constituency.id === 'fyns') {
      return {
        style: { fill: 'darkred' }
      }
    }
  }

  return (
    <Constituencies
      customizeAreas={customizeAreas}
      className="mt-4 md:mt-20 p-2 sm:p-8 md:w-[750px] mx-auto"
    />
  )
}
