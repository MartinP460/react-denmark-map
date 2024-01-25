import Map, { MapProps } from '../../map/Map'
import { MunicipalityType, municipalities } from './data'

/**
 * Component displaying a map of Denmark with all 98 municipalities.
 */
export default function Municipalities(props: MapProps<MunicipalityType>) {
  return (
    <Map areas={municipalities} defaultViewBoxWidth={1000} defaultViewBoxHeight={1215} {...props} />
  )
}
