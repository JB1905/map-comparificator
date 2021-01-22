import * as Actions from '.';

describe('customizationActions', () => {
  it('should create action toggleCustomization', () => {
    const expectedAction = {
      type: Actions.TOGGLE_CUSTOMIZATION,
    };

    expect(Actions.toggleCustomization()).toEqual(expectedAction);
  });
});
