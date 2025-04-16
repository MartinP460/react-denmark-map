import { IslandType, islands } from '@/components/areas/islands/islands.data'
import Map from '@/components/map'
import { MapProps } from '@/components/map/map.types'

/**
 * Component displaying a map of Denmark including the three main islands.
 */
export default function Islands(props: MapProps<IslandType>) {
  return <Map areas={islands} {...props} />
}
