import {
  ConstituencyType,
  constituencies
} from '@/components/areas/constituencies/constituencies.data'
import Map from '@/components/map'
import { MapProps } from '@/components/map/map.types'

/**
 * Component displaying a map of Denmark with the 10 constituencies (storkredse).
 */
export default function Constituencies(props: MapProps<ConstituencyType>) {
  return <Map areas={constituencies} {...props} />
}
