import { CenteringMode } from 'types/CenteringMode';

export const SET_ACTIVE_CENTERING_MODE = 'SET_ACTIVE_CENTERING_MODE';

export const setActiveCenteringMode = (payload: CenteringMode) => ({
  type: SET_ACTIVE_CENTERING_MODE,
  payload,
});
