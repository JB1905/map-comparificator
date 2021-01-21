import { CenteringMode } from 'enums/CenteringMode';

import * as Actions from '.';

describe('centeringModesActions', () => {
  it('should create action setActiveCenteringMode', () => {
    const expectedAction = {
      type: Actions.SET_ACTIVE_CENTERING_MODE,
      payload: CenteringMode.Center,
    };

    expect(Actions.setActiveCenteringMode(CenteringMode.Center)).toEqual(
      expectedAction
    );
  });
});
