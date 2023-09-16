import Map, { MapProps } from '../../map/Map'
import { municipalities, MunicipalityType } from './data'

/**
 * Component displaying a map of Denmark with all 98 municipalities.
 */
export default function Municipalities(props: MapProps<MunicipalityType>) {
  return (
    <Map
      areas={municipalities}
      defaultViewBoxWidth={10116}
      defaultViewBoxHeight={12289}
      {...props}
    />
  )
}
