import Map, { MapProps } from '../../map/Map'
import { full, DenmarkType } from './data'

/**
 * Component displaying a full map of Denmark without any subsequent areas.
 */
export default function Denmark(props: MapProps<DenmarkType>) {
  return <Map areas={full} viewBoxWidth="15556" viewBoxHeight="18900" {...props} />
}
