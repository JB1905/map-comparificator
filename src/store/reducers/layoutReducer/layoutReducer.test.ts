import { columnLayout, gridLayout } from 'constants/layouts';

import {
  SET_ACTIVE_LAYOUT,
  CREATE_CUSTOM_LAYOUT,
  RENAME_CUSTOM_LAYOUT,
  REMOVE_CUSTOM_LAYOUT,
} from 'store/actions';

import { layoutReducer } from '.';

describe('layoutReducer', () => {
  it('should match initial state values', () => {
    expect(layoutReducer(undefined, {} as any)).toEqual({
      activeLayout: gridLayout,
      customLayouts: [],
    });
  });

  it.skip('should', () => {
    expect(
      layoutReducer(undefined, {
        type: SET_ACTIVE_LAYOUT,
        payload: columnLayout,
      })
    ).toEqual({
      activeLayout: columnLayout,
      customLayouts: [],
    });
  });

  it.skip('should', () => {
    expect(
      layoutReducer(undefined, {
        type: CREATE_CUSTOM_LAYOUT,
        // payload: {}
      })
    ).toEqual({
      activeLayout: gridLayout,
      customLayouts: [],
    });
  });

  it.skip('should', () => {
    expect(
      layoutReducer(undefined, {
        type: RENAME_CUSTOM_LAYOUT,
        // payload: {}
      })
    ).toEqual({
      activeLayout: gridLayout,
      customLayouts: [],
    });
  });

  it.skip('should', () => {
    expect(
      layoutReducer(undefined, {
        type: REMOVE_CUSTOM_LAYOUT,
        // payload: {}
      })
    ).toEqual({
      activeLayout: gridLayout,
      customLayouts: [],
    });
  });
});
