import type { Layout } from 'types/Layout';

export const mosaicLayout: Layout = {
  first: 'Apple Maps',
  second: {
    first: 'Mapbox',
    second: {
      direction: 'column',
      first: {
        direction: 'row',
        first: 'Bing Maps',
        second: {
          first: 'Here Maps',
          second: 'Google Maps',
          direction: 'row',
        },
        splitPercentage: 33,
      },
      second: 'Open Street Map',
      splitPercentage: 50,
    },
    direction: 'row',
    splitPercentage: 25,
  },
  direction: 'row',
  splitPercentage: 20,
};
