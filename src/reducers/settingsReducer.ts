import { SET_CENTERING_MODE, TOGGLE_CUSTOMIZATION } from '../actions';

import { SettingsState } from '../interfaces/SettingsState';

import { SettingsActionTypes } from '../types/SettingsActionTypes';

const initialState: SettingsState = {
  activeCenteringMode: 'center',
  customizationEnabled: true,
};

export const settingsReducer = (
  state = initialState,
  action: SettingsActionTypes
) => {
  switch (action.type) {
    case SET_CENTERING_MODE:
      return { ...state, activeCenteringMode: action.payload };

    case TOGGLE_CUSTOMIZATION:
      return { ...state, customizationEnabled: !state.customizationEnabled };

    default:
      return state;
  }
};
