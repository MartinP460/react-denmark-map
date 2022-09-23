import Map, { MapProps } from '../../map/Map'
import { islands, Island } from './data'

export default function Islands(props: MapProps<Island>) {
  return <Map areas={islands} viewBoxWidth="15556" viewBoxHeight="18900" {...props} />
}
