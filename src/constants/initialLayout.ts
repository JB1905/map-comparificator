export const gridLayout = {
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

export const columnLayout = {
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

export const mosaicLayout = {
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
      currentTheme: 'mosaic-blueprint-theme',
    },
    direction: 'row',
    splitPercentage: 27.996500437445317,
  },
  direction: 'row',
  splitPercentage: 20.292887029288703,
};
