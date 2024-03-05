import { ConstituencyType, constituencies } from '@/components/areas/constituencies/data'
import Map, { MapProps } from '@/components/map/Map'

/**
 * Component displaying a map of Denmark with the 10 constituencies (storkredse).
 */
export default function Constituencies(props: MapProps<ConstituencyType>) {
  return <Map areas={constituencies} {...props} />
}
