import Map, { MapProps } from '../../map/Map'
import { regions, RegionType } from './data'

/**
 * Component displaying a map of Denmark with five regions.
 */
export default function Regions(props: MapProps<RegionType>) {
  return <Map areas={regions} viewBoxWidth="13489" viewBoxHeight="16389" {...props} />
}
