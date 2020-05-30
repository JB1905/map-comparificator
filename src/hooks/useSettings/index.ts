import { useSelector, useDispatch } from 'react-redux';

import { SET_ACTIVE_CENTERING_MODE, TOGGLE_CUSTOMIZATION } from 'actions';

import { RootState } from 'reducers';

import { CenteringMode } from 'enums/CenteringMode';

export const useSettings = () => {
  const dispatch = useDispatch();

  const { activeCenteringMode, isCustomizationEnabled } = useSelector(
    (state: RootState) => state.settings
  );

  const setCenteringMode = (centeringMode: CenteringMode) => {
    dispatch({
      type: SET_ACTIVE_CENTERING_MODE,
      payload: centeringMode,
    });
  };

  const toggleCustomization = () => {
    dispatch({ type: TOGGLE_CUSTOMIZATION });
  };

  return {
    activeCenteringMode,
    setCenteringMode,
    isCustomizationEnabled,
    toggleCustomization,
  };
};
