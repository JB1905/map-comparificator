import { Layout } from 'types/Layout';

export const columnLayout: Layout = {
  first: {
    first: 'Apple Maps',
    second: {
      first: 'Bing Maps',
      second: 'Google Maps',
      direction: 'row',
      splitPercentage: 48.80694143167029,
    },
    direction: 'row',
    splitPercentage: 35.70432357043236,
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
  direction: 'row',
  splitPercentage: 50,
};
