import { UPDATE_COORDS, UPDATE_ZOOM_LEVEL } from 'store/actions';

import { mapsReducer } from '.';

describe('mapsReducer', () => {
  it('should', () => {
    expect(mapsReducer(undefined, {} as any)).toEqual({
      coords: [37.7790262, -122.4199061],
      zoomLevel: 7,
    });
  });

  it('should', () => {
    expect(
      mapsReducer(undefined, {
        type: UPDATE_COORDS,
        // payload:
      })
    ).toEqual({
      // activeTheme:
    });
  });

  it('should', () => {
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
