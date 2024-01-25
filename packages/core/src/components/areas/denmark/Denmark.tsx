import Map, { MapProps } from '../../map/Map'
import { DenmarkType, full } from './data'

/**
 * Component displaying a full map of Denmark without any subsequent areas.
 */
export default function Denmark(props: MapProps<DenmarkType>) {
  return <Map areas={full} defaultViewBoxWidth={1000} defaultViewBoxHeight={1215} {...props} />
}
