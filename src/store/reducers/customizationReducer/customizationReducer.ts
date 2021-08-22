import { TOGGLE_CUSTOMIZATION } from '../../actions';

import { CustomizationState } from 'types/CustomizationState';

import type { CustomizationActionTypes } from 'types/CustomizationActionTypes';

const initialState: CustomizationState = {
  isCustomizationEnabled: true,
};

export const customizationReducer = (
  state = initialState,
  action: CustomizationActionTypes
) => {
  switch (action.type) {
    case TOGGLE_CUSTOMIZATION:
      return {
        ...state,
        isCustomizationEnabled: !state.isCustomizationEnabled,
      };

    default:
      return state;
  }
};
