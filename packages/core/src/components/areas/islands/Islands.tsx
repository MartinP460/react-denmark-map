import { IslandType, islands } from '@/components/areas/islands/data'
import Map, { MapProps } from '@/components/map/Map'

/**
 * Component displaying a map of Denmark including the three main islands.
 */
export default function Islands(props: MapProps<IslandType>) {
  return <Map areas={islands} {...props} />
}
