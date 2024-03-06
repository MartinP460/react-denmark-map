import { DenmarkType, full } from '@/components/areas/denmark/data'
import Map, { MapProps } from '@/components/map/Map'

/**
 * Component displaying a full map of Denmark without any subsequent areas.
 */
export default function Denmark(props: MapProps<DenmarkType>) {
  return <Map areas={full} {...props} />
}
