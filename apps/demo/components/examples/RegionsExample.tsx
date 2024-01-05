import { RegionType, Regions } from 'react-denmark-map'

export default function RegionsExample() {
  const handleClick = (municipality: RegionType) => {
    console.log(`You clicked region ${municipality.display_name}.`)
  }

  const handleHover = (municipality: RegionType) => {
    console.log(`You hovered region ${municipality.display_name}.`)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Regions
        onClick={handleClick}
        onHover={handleHover}
        className="p-2 sm:p-8 md:w-[750px] mx-auto"
      />
    </div>
  )
}
