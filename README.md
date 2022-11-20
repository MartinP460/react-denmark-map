# react-denmark-map

Customizable map of Denmark with support for municipalities, regions, islands, and a full map with no borders or subsequent areas.

Try it for yourself - [demo](https://react-denmark-map-demo.vercel.app/).

## Installation

```
npm install react-denmark-map
```

```
yarn add react-denmark-map
```

## Usage

_Examples use the `Municipalities` component, although the props are the same for every component. See "API" for all available components._

### Basic usage

```jsx
import { Municipalities } from 'react-denmark-map'

const App = () => {
  return <Municipalities />
}
```

### With `onClick` prop

An event handler that is called when an area is clicked. It is called with a parameter containing information about the area clicked. See "API" for the full type.

```jsx
import { Municipalities } from 'react-denmark-map'

const App = () => {
  return (
    <Municipalities
      onClick={(municipality) => console.log(`Clicked: ${municipality.display_name}`)}
    />
  )
}
```

### With `onHover` prop

An event handler that is called when an area is hovered on.

```jsx
import { Municipalities } from 'react-denmark-map'

const App = () => {
  return (
    <Municipalities
      onHover={(municipality) => console.log(`Hovered: ${municipality.display_name}`)}
    />
  )
}
```

### With custom tooltip

`customTooltip` is a prop that takes a function and returns a JSX element. The tooltip is displayed when hovering an area.

```jsx
import { Municipalities } from 'react-denmark-map'

const App = () => {
  const customTooltip = (municipality) => {
    return (
      <div className="tooltip">
        <p>Name: {municipality.display_name}</p>
        <p>Municipality code: {municipality.code}</p>
      </div>
    )
  }

  return <Municipalities customTooltip={customTooltip} />
}
```

You can easily display external data about the area on the tooltip. E.g. an array consisting of objects with the type

```
{ id: string; population: number }
```

where `id` is the name of the municipality and `population` is data about the area, where we want to display data about the population of the area in the tooltip. This can be achieved as such:

```jsx
import { Municipalities } from 'react-denmark-map'

const data = [
  {
    id: 'assens',
    population: 40972
  }
  // ...
]

const App = () => {
  const customTooltip = (municipality) => {
    const result = data.find((item) => item.id === municipality.name)

    return (
      <div>
        <p>{municipality.display_name}</p>
        <p>Population: {result?.population ? result.population : 'N/A'}</p>
      </div>
    )
  }

  return <Municipalities customTooltip={customTooltip} />
}
```

The first parameter / the area parameter of the `customTooltip` function (here named `municipality`) contains several fields that can be used to identify the correct area. See "API" for full reference. Also, keep in mind that the tooltip won't move to the other side of the cursor when it goes beyond the length of the viewpor.

The tooltip is shown by default, but you can disable the tooltip by toggling `showTooltip`:

```jsx
import { Municipalities } from 'react-denmark-map'

const App = () => {
  return <Municipalities showTooltip={false} />
}
```

### With custom areas

`customizeAreas` is a prop that takes a function that returns an object containing a className and/or a style object. The className and style object are applied directly to the underlying `<path>` elements (i.e. the area) when the component is mounted. This allows you to easily style each area independently. For example, if you want to display an area with a higher population you might give that area a darker shade of blue and areas with a lower population you give a lighter shade of blue (see next example).

```jsx
import { Municipalities } from 'react-denmark-map'

const App = () => {
  const customizeMunicipalities = (municipality) => {
    if (municipality.name === 'københavn') {
      return {
        className: 'københavn',
        style: {
          fill: 'red'
        }
      }
    }
  }

  return <Municipalities customizeAreas={customizeMunicipalities} />
}
```

Similar to styling the tooltip, you can conditionally style each area with external data. E.g. an array consisting of objects with the type

```
{ id: string; population: number }
```

where `id` is the name of the municipality and `population` is data about the area, we can make municipalities with a population less than 40.000 people a light blue and municipalities with a higher population a darker blue:

```jsx
import { Municipalities } from 'react-denmark-map'

const data = [
  {
    id: 'assens',
    population: 40972
  }
  // ...
]

const App = () => {
  const customizeMunicipalities = (municipality) => {
    const result = data.find((item) => item.id === municipality.name)

    if (!result) return

    if (result.population < 40000) {
      return {
        style: {
          fill: 'skyblue'
        }
      }
    }
    return {
      style: {
        fill: 'royalblue'
      }
    }
  }

  return <Municipalities customizeAreas={customizeMunicipalities} />
}
```

Instead of municipalities, these areas could also be each region or island, depending on the component used. See "API" for full reference.

### Styling

The exported components also support a number of different ways of styling the map:

```jsx
import { Municipalities } from 'react-denmark-map'

const App = () => {
  return <Municipalities className="denmark" style={{ marginTop: '20px' }} color="lightgray" />
}
```

These props are:

- `className` is a string which is applied directly to the SVG element.
- `style` is an object of CSS properties which is applied directly to the SVG element.
- `color` is the default color applied to each area of the map. Essentially, this is the default color of the map. It's overwritten by styles returned by the `customizeAreas` function if the function returns a color for that area. Keep in mind that you can apply the `fill` style in the `style` object and it will have the same effect.

For positioning, it is, in many cases, easier to wrap the map in an element and position that according to your needs.

In addition to the props mentioned above, the `clickable` and `hoverable` props are booleans used to toggle hover styles on each `<path>` element / area. They are purely decorational.

```jsx
import { Municipalities } from 'react-denmark-map'

const App = () => {
  return <Municipalities clickable={false} hoverable={false} />
}
```

`clickable` is off (false) by default and is enabled by default if the `onClick` prop is provided, and when enabled slightly darkens the hovered area and sets the cursor to pointer. `hoverable` is on (true) by default and slightly darks the hovered area when enabled.

Alternatively, you can apply styles to some of the components' HTML tags. Some tags are available through their ID attribute.

- `svg` is the element which contains the paths of each area. It has the id `react-denmark-map-svg`.
- `figure` is the top-most element an the parent of `svg` and has the id `react-denmark-map`.
- The default tooltip is a `div` element and has the id `react-denmark-map-tooltip`.
- The parent element of the tooltip is a div that has the id `react-denmark-map-tooltip-wrapper`. It's recommended to _not_ use this to style the tooltip, since it is used solely for positioning and uses inline styles.

## Typescript

React Denmark Map is written in Typescript.

You may also want to apply types to function arguments i.e. when writing the function to be given to the `customizeAreas` prop. In that case, React Denmark Map exports the type used as an argument as `*Type`, e.g. for the `Municipalities` component:

```jsx
import { Municipalities, MunicipalityType } from 'react-denmark-map'

const App = () => {
  const customizeMunicipalities = (municipality: MunicipalityType) => {
    // ...
  }

  return <Municipalities customizeAreas={customizeMunicipalities} />
}
```

All props that accept a function as an argument have the same type in that component, so the same type can be applied to the parameter used in `customTooltip`, `onClick`, and `onHover`.

Different components have different types for the area parameter. The `Regions` component, for example, exports a `RegionsType` that can be used in the same way as shown above. See "API - Types" for the full reference of area types.

## API

### Components

React Denmark Map exports several components, each being a map of Denmark with different areas that all support the same props as those shown above:

| Component        | Description                                        |
| ---------------- | -------------------------------------------------- |
| `Municipalities` | All 98 municipalities of Denmark.                  |
| `Constituencies` | The 10 constituencies of Denmark.                  |
| `Regions`        | The five regions of Denmark.                       |
| `Islands`        | Zealand, Fyn and Jutland (Sjælland, Fyn, Jylland). |
| `Denmark`        | A map of Denmark with no subsequent areas.         |

### Props

| Prop             | Description                                                                        | Type                                                                          | Default |
| ---------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------- |
| `className`      | The `className` applied directly to the `<svg>` element.                           | string                                                                        | ""      |
| `style`          | The style object applied directly to the `<svg>` element.                          | CSSProperties<sup>\*</sup>                                                    | {}      |
| `color`          | The default color of each municipality.                                            | CSSProperties["fill"]                                                         | #ccc    |
| `clickable`      | Whether the clickable styles should be applied to the `<path>` element (the area). | boolean                                                                       | false   |
| `hoverable`      | Whether the hoverable styles should be applied to the `<path>` element (the area). | boolean                                                                       | true    |
| `showTooltip`    | Whether the tooltip should be shown.                                               | boolean                                                                       | true    |
| `customTooltip`  | A function that returns a custom tooltip.                                          | (area: AreaType<sup>\*\*</sup>) => ReactNode                                  |         |
| `customizeAreas` | A function that is invoked for every area and returns an object to style the area. | (area: AreaType) => { className?: string, style? CSSProperties } \| undefined |         |
| `onClick`        | A function that is invoked when an area is clicked.                                | (area: AreaType) => void                                                      |         |
| `onHover`        | A function that is invoked when an area is hovered.                                | (area: AreaType) => void                                                      |         |
| `onMouseEnter`   | A function that is invoked when the mouse enters an area.                          | (area: AreaType) => void                                                      |         |
| `onMouseLeave`   | A function that is invoked when the mouse leaves an area.                          | (area: AreaType) => void                                                      |         |

\*: CSSProperties refers to the object provided to the style attribute in React. Fields in this object are denoted as CSSProperties["property"].

\*\*: AreaType is one of the four types corresponding to the component used (see "Types" below).

### Types

Each area has at least the first 5 properties and potentially more.

```ts
type AreaType = {
  id: string // the name of the area with substitutes for Danish letters (e.g. 'fanoe')
  name: string // the name of the area with Danish letters (e.g. 'fanø')
  en_name: string // same as 'id'
  display_name: string // the local name of the area capitalized (e.g. 'Høje Taastrup')
  d: string // the path of the area applied to the <path> element
  code: string // the municipality or region code (e.g. 482 or 1083)
  en_term: string // the term used to describe the area in English (i.e. jyllland = jutland)
}
```

The types corresponding to each component are:

| Component                    | Name of exported type | Included in type                                |
| ---------------------------- | --------------------- | ----------------------------------------------- |
| `Municipalities`             | MunicipalityType      | { id, name, en_name, display_name, d, code }    |
| `Constituencies`<sup>\*<sup> | ConstituencyType      | { id, name, en_name, display_name, d }          |
| `Regions`                    | RegionType            | { id, name, en_name, display_name, d, code }    |
| `Islands`                    | IslandType            | { id, name, en_name, display_name, d, en_term } |
| `Denmark`                    | DenmarkType           | { id, name, en_name, display_name, d, en_term } |

\*: When filtering using any of the strings in the ConstituencyType be aware that the constituencies (danish: "storkredse"), e.g. "sydjyllands storkreds", have the word "storkreds" omitted in the properties `id`, `name` and `en_name`. Thus, "sydjyllands storkreds" is just "sydjyllands" and so on.

Using the `Denmark` component means that there's only one path element, so DenmarkType describes just that one area.

All entries for the areas can be found under 'src/components/_[area]_/data.ts'.

## License

React Denmark Map is licensed under the [MIT license](https://github.com/MartinP460/react-denmark-map/blob/main/LICENSE.md).

## Contributing

Contributing is always appreciated. Fork the project and open a pull request. Please provide a relevant description and I will try to accomodate your request as best as possible.
