import { SET_ACTIVE_CENTERING_MODE, TOGGLE_CUSTOMIZATION } from '../actions';

import { SettingsState } from 'interfaces/SettingsState';

import type { SettingsActionTypes } from 'types/SettingsActionTypes';

import { CenteringMode } from 'enums/CenteringMode';

const initialState: SettingsState = {
  activeCenteringMode: CenteringMode.Center,
  isCustomizationEnabled: true,
};

export const settingsReducer = (
  state = initialState,
  action: SettingsActionTypes
) => {
  switch (action.type) {
    case SET_ACTIVE_CENTERING_MODE:
      return { ...state, activeCenteringMode: action.payload };

    case TOGGLE_CUSTOMIZATION:
      return {
        ...state,
        isCustomizationEnabled: !state.isCustomizationEnabled,
      };

    default:
      return state;
  }
};
