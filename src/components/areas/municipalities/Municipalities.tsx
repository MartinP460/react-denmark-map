import Map, { MapProps } from '../../map/Map'
import { municipalities, Municipality } from './data'

export default function Municipalities(props: MapProps<Municipality>) {
  return <Map areas={municipalities} viewBoxWidth="10116" viewBoxHeight="12289" {...props} />
}
