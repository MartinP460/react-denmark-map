import Map, { MapProps } from '../../map/Map'
import { full, DenmarkType } from './data'

/**
 * Component displaying a full map of Denmark without any subsequent areas.
 */
export default function Denmark(props: MapProps<DenmarkType>) {
  return <Map areas={full} defaultViewBoxWidth={15556} defaultViewBoxHeight={18900} {...props} />
}
