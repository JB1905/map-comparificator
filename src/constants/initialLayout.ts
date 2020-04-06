export const initialLayout = {
  direction: 'column',
  first: {
    direction: 'column',
    first: 'Apple Maps',
    second: {
      direction: 'row',
      first: 'Bing Maps',
      second: 'Google Maps',
    },
    splitPercentage: 33,
  },
  second: {
    direction: 'row',
    first: 'Here Maps',
    second: {
      direction: 'row',
      first: 'MapBox',
      second: 'Open Street Map',
    },
  },
  splitPercentage: 60,
  currentTheme: 'mosaic-blueprint-theme',
};
