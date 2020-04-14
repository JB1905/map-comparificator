import { Layout } from '../reducers/layoutReducer';

export const mosaicLayout: Layout = {
  first: 'Apple Maps',
  second: {
    first: 'MapBox',
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
        splitPercentage: 35.07917174177832,
      },
      second: 'Open Street Map',
      splitPercentage: 59.885386819484246,
    },
    direction: 'row',
    splitPercentage: 27.996500437445317,
  },
  direction: 'row',
  splitPercentage: 20.292887029288703,
};
