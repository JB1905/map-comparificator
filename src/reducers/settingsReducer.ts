import { SET_CENTERING_MODE, TOGGLE_CUSTOMIZATION } from '../actions';

import { CenteringMode } from '../types/CenteringMode';

interface SettingsState {
  activeCenteringMode: CenteringMode;
  customizationEnabled: boolean;
}

interface SetCenteringModeAction {
  type: typeof SET_CENTERING_MODE;
  payload: CenteringMode;
}

interface ToggleCustomizationAction {
  type: typeof TOGGLE_CUSTOMIZATION;
}

type SettingsActionTypes = SetCenteringModeAction | ToggleCustomizationAction;

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
