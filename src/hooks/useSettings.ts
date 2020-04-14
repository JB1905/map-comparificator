import { useSelector, useDispatch } from 'react-redux';

import { SET_CENTERING_MODE, TOGGLE_CUSTOMIZATION } from '../actions';

export const useSettings = () => {
  const dispatch = useDispatch();

  const { activeCenteringMode, customizationEnabled } = useSelector(
    (state: any) => state.settings
  );

  const setCenteringMode = (centeringMode: any) => {
    dispatch({
      type: SET_CENTERING_MODE,
      payload: centeringMode,
    });
  };

  const toggleDragLock = () => {
    dispatch({ type: TOGGLE_CUSTOMIZATION });
  };

  return {
    activeCenteringMode,
    setCenteringMode,
    customizationEnabled,
    toggleDragLock,
  };
};
