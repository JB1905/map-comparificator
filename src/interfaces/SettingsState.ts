import { SET_ACTIVE_CENTERING_MODE, TOGGLE_CUSTOMIZATION } from 'actions';

import { CenteringMode } from 'enums/CenteringMode';

export interface SettingsState {
  activeCenteringMode: CenteringMode;
  isCustomizationEnabled: boolean;
}

export interface SetActiveCenteringModeAction {
  type: typeof SET_ACTIVE_CENTERING_MODE;
  payload: CenteringMode;
}

export interface ToggleCustomizationAction {
  type: typeof TOGGLE_CUSTOMIZATION;
}
