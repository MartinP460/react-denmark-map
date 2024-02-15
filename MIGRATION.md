# Migration guide

This is a migration guide to walk you through the process of upgrading to react-denmark-map 2.0.

### New features

1. **Zooming**. Zoom controls now appear in the top-right hand corner of every rendition of the map which allows users to zoom in and out. You can disable this zooming or choose to customize it by passing a component as a prop.
2. **Memoization**. Memoized all map renditions, meaning that you may be able to get a slight performance boost if the component rerenders frequently and you memoize props.
3. **Better intellisense**. The fields in the type of areas in each rendition of the map are now explicit constants. For example, the `name` property on the `MunicipalityType` has the type `norddjurs | syddjurs | koebenhavn ...` instead of just `string`. Moreover, new JSDoc strings have been added for each prop.

Finally, all map SVG's are now ~30% smaller which should improve load times and rendering performance 🏎️

### Breaking changes

1. **Positioning**. If you used the `className` or `style` properties to adjust the position of the map, you should instead wrap `<Map />` in a seperate element and position that. This was always the recommended approach but the ability to zoom breaks positioning using this method.
2. **Viewbox**. All maps now have the same SVG viewbox dimensions of 1000 x 1215 so you should use these dimensions to customize the viewbox.
3. **Renamed area fields**. Some keys in the area object have been renamed. These are specifically:
   - `en_name` -> `asciiName`
   - `display_name` -> `displayName`
   - `enTerm` -> `enTerm`
4. **Alt positions**. Removed all `altPosition-` props. These props rendered some islands closer to the mainland.

You can find more information about the changes by reading the updated documentation. Thank you for using react-denmark-map! 🇩🇰
