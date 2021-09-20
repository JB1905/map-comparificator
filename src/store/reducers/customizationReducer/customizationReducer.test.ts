import { TOGGLE_CUSTOMIZATION } from 'store/actions';

import { customizationReducer } from '.';

describe('customizationReducer', () => {
  it('should match initial state values', () => {
    // TODO
      // TODO inline snapshot
    expect(customizationReducer(undefined, {} as any)).toEqual({
      isCustomizationEnabled: true,
    });
  });

  it('should update isCustomizationEnabled', () => {
    // TODO
    // TODO inline snapshot
    expect(
      customizationReducer(undefined, {
        type: TOGGLE_CUSTOMIZATION,
      })
    ).toEqual({
      isCustomizationEnabled: false,
    });

    // TODO
      // TODO inline snapshot
    // expect(
    //   customizationReducer(undefined, {
    //     type: TOGGLE_CUSTOMIZATION,
    //   })
    // ).toEqual({
    //   isCustomizationEnabled: true,
    // });
  });
});
