import { TOGGLE_CUSTOMIZATION } from 'store/actions';

import { customizationReducer } from '.';

describe('customizationReducer', () => {
  it('should match initial state values', () => {
    expect(customizationReducer(undefined, {} as any)).toEqual({
      isCustomizationEnabled: true,
    });
  });

  it('should update isCustomizationEnabled', () => {
    expect(
      customizationReducer(undefined, {
        type: TOGGLE_CUSTOMIZATION,
      })
    ).toEqual({
      isCustomizationEnabled: false,
    });

    expect(
      customizationReducer(undefined, {
        type: TOGGLE_CUSTOMIZATION,
      })
    ).toEqual({
      isCustomizationEnabled: true,
    });
  });
});
