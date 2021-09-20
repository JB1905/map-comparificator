import { OPEN_MODAL, CLOSE_MODAL } from 'store/actions';

import { modalReducer } from '.';

describe('modalReducer', () => {
  it('should match initial state values', () => {
    // TODO
      // TODO inline snapshot
    expect(modalReducer(undefined, {} as any)).toEqual({
      modalType: null,
      modalParams: null,
    });
  });

  // TODO
      // TODO inline snapshot
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

  // TODO
      // TODO inline snapshot
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
