import Map, { MapProps } from '../../map/Map'
import { IslandType, islands } from './data'

/**
 * Component displaying a map of Denmark including the three main islands.
 */
export default function Islands(props: MapProps<IslandType>) {
  return <Map areas={islands} {...props} />
}
