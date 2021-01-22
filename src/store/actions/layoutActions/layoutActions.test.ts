import * as Actions from '.';

describe('layoutActions', () => {
  it.skip('should create action createCustomLayout', () => {
    const expectedAction = {
      type: Actions.CREATE_CUSTOM_LAYOUT,
    };

    expect(Actions.createCustomLayout()).toEqual(expectedAction);
  });

  it.skip('should create action removeCustomLayout', () => {
    const expectedAction = {
      type: Actions.REMOVE_CUSTOM_LAYOUT,
    };

    expect(Actions.removeCustomLayout()).toEqual(expectedAction);
  });

  it.skip('should create action renameCustomLayout', () => {
    const expectedAction = {
      type: Actions.RENAME_CUSTOM_LAYOUT,
    };

    expect(Actions.renameCustomLayout()).toEqual(expectedAction);
  });

  it.skip('should create action setActiveLayout', () => {
    const expectedAction = {
      type: Actions.SET_ACTIVE_LAYOUT,
    };

    expect(Actions.setActiveLayout()).toEqual(expectedAction);
  });
});
