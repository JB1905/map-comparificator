import { CenteringMode } from 'enums/CenteringMode';

export const SET_ACTIVE_CENTERING_MODE = 'SET_ACTIVE_CENTERING_MODE';
export const TOGGLE_CUSTOMIZATION = 'TOGGLE_CUSTOMIZATION';

export const setActiveCenteringMode = (payload: CenteringMode) => ({
  type: SET_ACTIVE_CENTERING_MODE,
  payload,
});

export const toggleCustomization = () => ({
  type: TOGGLE_CUSTOMIZATION,
});
