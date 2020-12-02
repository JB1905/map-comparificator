import { SET_ACTIVE_CENTERING_MODE, TOGGLE_CUSTOMIZATION } from 'store/actions';

import { CenteringMode } from 'enums/CenteringMode';

export interface SettingsState {
  readonly activeCenteringMode: CenteringMode;
  readonly isCustomizationEnabled: boolean;
}

export interface SetActiveCenteringModeAction {
  readonly type: typeof SET_ACTIVE_CENTERING_MODE;
  readonly payload: CenteringMode;
}

export interface ToggleCustomizationAction {
  readonly type: typeof TOGGLE_CUSTOMIZATION;
}
