import { DenmarkType, full } from '@/components/areas/denmark/denmark.data'
import Map from '@/components/map'
import { MapProps } from '@/components/map/map.types'

/**
 * Component displaying a full map of Denmark without any subsequent areas.
 */
export default function Denmark(props: MapProps<DenmarkType>) {
  return <Map areas={full} {...props} />
}
