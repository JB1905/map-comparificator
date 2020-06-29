import type { Layout } from 'types/Layout';

export const columnLayout: Layout = {
  first: {
    first: 'Apple Maps',
    second: {
      first: 'Bing Maps',
      second: 'Google Maps',
      direction: 'row',
      splitPercentage: 50,
    },
    direction: 'row',
    splitPercentage: 33,
  },
  second: {
    direction: 'row',
    first: 'Here Maps',
    second: {
      direction: 'row',
      first: 'Mapbox',
      second: 'Open Street Map',
    },
    splitPercentage: 33,
  },
  direction: 'row',
  splitPercentage: 50,
};
