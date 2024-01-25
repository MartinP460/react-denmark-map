import Map, { MapProps } from '../../map/Map'
import { RegionType, regions } from './data'

/**
 * Component displaying a map of Denmark with five regions.
 */
export default function Regions(props: MapProps<RegionType>) {
  return <Map areas={regions} {...props} />
}
