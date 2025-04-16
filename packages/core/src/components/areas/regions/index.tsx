import { RegionType, regions } from '@/components/areas/regions/regions.data'
import Map from '@/components/map'
import { MapProps } from '@/components/map/map.types'

/**
 * Component displaying a map of Denmark with five regions.
 */
export default function Regions(props: MapProps<RegionType>) {
  return <Map areas={regions} {...props} />
}
