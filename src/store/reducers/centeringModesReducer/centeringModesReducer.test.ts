import { CenteringMode } from 'enums/CenteringMode';

import { SET_ACTIVE_CENTERING_MODE } from 'store/actions';

import { centeringModesReducer } from '.';

describe('centeringModesReducer', () => {
  it('should match initial state values', () => {
    expect(centeringModesReducer(undefined, {} as any)).toEqual({
      activeCenteringMode: CenteringMode.Center,
    });
  });

  it('should update activeCenteringMode', () => {
    expect(
      centeringModesReducer(undefined, {
        type: SET_ACTIVE_CENTERING_MODE,
        payload: CenteringMode.Fill,
      })
    ).toEqual({
      activeCenteringMode: CenteringMode.Fill,
    });
  });
});
