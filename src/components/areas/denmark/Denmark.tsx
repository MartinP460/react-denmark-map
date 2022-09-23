import Map, { MapProps } from '../../map/Map'
import { full, DenmarkFull } from './data'

export default function Denmark(props: MapProps<DenmarkFull>) {
  return <Map areas={full} viewBoxWidth="15556" viewBoxHeight="18900" {...props} />
}
