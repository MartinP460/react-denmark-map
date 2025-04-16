import {
  MunicipalityType,
  municipalities
} from '@/components/areas/municipalities/municipalities.data'
import Map from '@/components/map'
import { MapProps } from '@/components/map/map.types'

/**
 * Component displaying a map of Denmark with all 98 municipalities.
 */
export default function Municipalities(props: MapProps<MunicipalityType>) {
  return <Map areas={municipalities} {...props} />
}
