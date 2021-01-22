import { OPEN_MODAL, CLOSE_MODAL } from 'store/actions';

import { modalReducer } from '.';

describe('modalReducer', () => {
  it('should', () => {
    expect(modalReducer(undefined, {} as any)).toEqual({
      modalType: null,
      modalParams: null,
    });
  });

  it('should', () => {
    expect(
      modalReducer(undefined, {
        type: OPEN_MODAL,
        // payload:
      })
    ).toEqual({
      // activeTheme:
    });
  });

  it('should', () => {
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
