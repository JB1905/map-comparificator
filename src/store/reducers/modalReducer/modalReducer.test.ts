import { OPEN_MODAL, CLOSE_MODAL } from 'store/actions';

import { modalReducer } from '.';

describe('modalReducer', () => {
  it('should match initial state values', () => {
    expect(modalReducer(undefined, {} as any)).toEqual({
      modalType: null,
      modalParams: null,
    });
  });

  it.skip('should', () => {
    expect(
      modalReducer(undefined, {
        type: OPEN_MODAL,
        // payload:
      })
    ).toEqual({
      // activeTheme:
    });
  });

  it.skip('should', () => {
    expect(
      modalReducer(undefined, {
        type: CLOSE_MODAL,
        // payload:
      })
    ).toEqual({
      // activeTheme:
    });
  });
});
