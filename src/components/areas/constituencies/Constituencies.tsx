import Map, { MapProps } from '../../map/Map'
import { constituencies, ConstituencyType } from './data'

/**
 * Component displaying a map of Denmark with the 10 constituencies (storkredse).
 */
export default function Constituencies(props: MapProps<ConstituencyType>) {
  return (
    <Map
      areas={constituencies}
      defaultViewBoxWidth={12155}
      defaultViewBoxHeight={14763}
      {...props}
    />
  )
}
