import { MunicipalityType, municipalities } from '@/components/areas/municipalities/data'
import Map, { MapProps } from '@/components/map/Map'

/**
 * Component displaying a map of Denmark with all 98 municipalities.
 */
export default function Municipalities(props: MapProps<MunicipalityType>) {
  return <Map areas={municipalities} {...props} />
}
