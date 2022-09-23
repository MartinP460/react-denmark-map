import Map, { MapProps } from '../../map/Map'
import { full, Full } from './data'

export default function Denmark(props: MapProps<Full>) {
  return <Map areas={full} viewBoxWidth="15556" viewBoxHeight="18900" {...props} />
}
