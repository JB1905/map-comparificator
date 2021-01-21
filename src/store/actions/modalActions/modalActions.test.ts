import * as Actions from '.';

describe('modalActions', () => {
  it('should create action openModal', () => {
    const expectedAction = {
      type: Actions.OPEN_MODAL,
    };

    expect(Actions.openModal()).toEqual(expectedAction);
  });

  it('should create action closeModal', () => {
    const expectedAction = {
      type: Actions.CLOSE_MODAL,
    };

    expect(Actions.closeModal()).toEqual(expectedAction);
  });
});
