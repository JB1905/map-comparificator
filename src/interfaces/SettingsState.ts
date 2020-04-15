import { SET_CENTERING_MODE, TOGGLE_CUSTOMIZATION } from '../actions';

import { CenteringMode } from '../types/CenteringMode';

export interface SettingsState {
  activeCenteringMode: CenteringMode;
  customizationEnabled: boolean;
}

export interface SetCenteringModeAction {
  type: typeof SET_CENTERING_MODE;
  payload: CenteringMode;
}

export interface ToggleCustomizationAction {
  type: typeof TOGGLE_CUSTOMIZATION;
}
