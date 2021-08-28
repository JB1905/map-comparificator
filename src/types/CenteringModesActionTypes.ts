import { SET_ACTIVE_CENTERING_MODE } from 'store/actions';

import { CenteringMode } from 'constants/CenteringMode';

export interface CenteringModesState {
  readonly activeCenteringMode: CenteringMode;
}

interface SetActiveCenteringModeAction {
  readonly type: typeof SET_ACTIVE_CENTERING_MODE;
  readonly payload: CenteringMode;
}

export type CenteringModesActionTypes = SetActiveCenteringModeAction;
