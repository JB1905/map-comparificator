import * as Actions from '.';

describe('mapActions', () => {
  it('should create action updateCoords', () => {
    const expectedAction = {
      type: Actions.UPDATE_COORDS,
      payload: [50, 20],
    };

    expect(Actions.updateCoords([50, 20])).toEqual(expectedAction);
  });

  it('should create action updateZoomLevel', () => {
    const expectedAction = {
      type: Actions.UPDATE_ZOOM_LEVEL,
      payload: 6,
    };

    expect(Actions.updateZoomLevel(6)).toEqual(expectedAction);
  });
});
