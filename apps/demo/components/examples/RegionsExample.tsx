import { RegionType, Regions } from 'react-denmark-map'

export default function RegionsExample() {
  const handleClick = (municipality: RegionType) => {
    console.log(`You clicked region ${municipality.display_name}.`)
  }

  const handleHover = (municipality: RegionType) => {
    console.log(`You hovered region ${municipality.display_name}.`)
  }

  return (
    <Regions
      onClick={handleClick}
      onHover={handleHover}
      className="mt-4 md:mt-20 p-2 sm:p-8 md:w-[750px] mx-auto"
    />
  )
}
