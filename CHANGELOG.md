# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.3] - 2025-04-16

### Added

- Added React 19 as a peer dependency.

### Changed

- Slightly optimized click, hover, and mouse enter event handlers, as well as the tooltip, to be less computionally expensive.

## [2.0.2] - 2024-03-11

### Fixed

- Fixed a bug that made the underlying SVG not render in some environments (On Safari and some iOS devices).

## [2.0.1] - 2024-03-07

### Changed

- Changed the URL in the documentation to refer to the new URL of the demo website.

## [2.0.0] - 2024-03-07

### Added

- Zoom functionality. Added the ability to zoom in and out of the map. Zoom buttons appear in the top-right hand corner by default.
- Prop: `customZoomControls`. Pass a functional React component to render your own zoom-in and zoom-out buttons.
- Prop: `zoomable`. Whether to have the map be zoomable and subsequently if zoom controls should be rendered.
- Added JSDoc comments to all props.
- Added English terms for regions.
- Added accessibility attribute to the tooltip.
- Added a new logo.
- Added the demo Next.js project to the same repository as the package.
- Added a homepage to the demo.

### Changed

- Changed path definitions for each area in all renditions of the map, resulting in a ~30% decrease in the overall SVG size.
- Changed the definition of the `customTooltip` prop to allow passing a React component by having the first and only parameter by an object (props) containing `area`.
- Changed the name of fields in the area types as follows:
  - `en_name` -> `asciiName`
  - `display_name` -> `displayName`
  - `en_term` -> `enTerm`
- Improved typing by providing explicit constant values for fields in each area.
- Removed several `data-` attributes from the individual path elements and replaced it with a single one called `data-area-id` which is the `id` property on the rendered area object.
- Updated the documentation to account for the new changes.
- Updated dev dependencies.
- Started using Turborepo for seperation of packages and apps.

### Removed

- Removed all `-altPosition` props.
- Removed the use of React default props.

## [1.3.1] - 2023-09-21

### Added

- A `laesoeAltPosition` that positions Læsø slightly closer to Jutland.
- A `anholtAltPosition` that positions Anholt closer to Jutland.

### Fixed

- Removed a duplicated `color` prop in the API section of the documentation.

## [1.3.0] - 2023-09-18

### Added

- A `viewbox` prop to modify the viewbox of the underlying SVG
- A `filterAreas` prop to visually remove areas from a map
- A `bornholmAltPosition` that positions Bornholm differently in the municipalities map
- A new `region` property on municipalities data to easily identify the region of the municipality

### Fixed

- Tiny mistakes in the documentation.
