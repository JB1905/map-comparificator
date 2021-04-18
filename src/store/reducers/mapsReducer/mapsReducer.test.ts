import { UPDATE_COORDS, UPDATE_ZOOM_LEVEL } from 'store/actions';

import { mapsReducer } from '.';

describe('mapsReducer', () => {
  it('should match initial state values', () => {
    expect(mapsReducer(undefined, {} as any)).toEqual({
      coords: [37.7790262, -122.4199061],
      zoomLevel: 7,
    });
  });

  // TODO
  it.skip('should', () => {
    expect(
      mapsReducer(undefined, {
        type: UPDATE_COORDS,
        // payload:
      })
    ).toEqual({
      // activeTheme:
    });
  });

  // TODO
  it.skip('should', () => {
    expect(
      mapsReducer(undefined, {
        type: UPDATE_ZOOM_LEVEL,
        payload: 5,
      })
    ).toEqual({
      coords: [37.7790262, -122.4199061],
      zoomLevel: 5,
    });
  });
});
