import { Layout } from '../types/Layout';

export const gridLayout: Layout = {
  first: {
    direction: 'row',
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
    splitPercentage: 33,
  },
  direction: 'column',
  splitPercentage: 50,
};
