import Map, { MapProps } from '../../map/Map'
import { islands, IslandType } from './data'

/**
 * Component displaying a map of Denmark including the three main islands.
 */
export default function Islands(props: MapProps<IslandType>) {
  return <Map areas={islands} defaultViewBoxWidth={15556} defaultViewBoxHeight={18900} {...props} />
}
