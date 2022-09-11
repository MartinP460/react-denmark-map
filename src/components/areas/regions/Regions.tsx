import Map, { MapProps } from '../../map/Map'
import { regions, Region } from './data'

export default function Regions(props: MapProps<Region>) {
  return <Map areas={regions} viewBoxWidth="13489" viewBoxHeight="16389" {...props} />
}
