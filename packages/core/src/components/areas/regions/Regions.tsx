import { RegionType, regions } from '@/components/areas/regions/data'
import Map, { MapProps } from '@/components/map/Map'

/**
 * Component displaying a map of Denmark with five regions.
 */
export default function Regions(props: MapProps<RegionType>) {
  return <Map areas={regions} {...props} />
}
