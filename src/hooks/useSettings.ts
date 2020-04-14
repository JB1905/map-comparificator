import { useSelector, useDispatch } from 'react-redux';

import { SET_CENTERING_MODE, TOGGLE_CUSTOMIZATION } from '../actions';

import { RootState } from '../reducers';

export const useSettings = () => {
  const dispatch = useDispatch();

  const { activeCenteringMode, customizationEnabled } = useSelector(
    (state: RootState) => state.settings
  );

  const setCenteringMode = (centeringMode: 'center' | 'fill' | 'none') => {
    dispatch({
      type: SET_CENTERING_MODE,
      payload: centeringMode,
    });
  };

  const toggleCustomization = () => {
    dispatch({ type: TOGGLE_CUSTOMIZATION });
  };

  return {
    activeCenteringMode,
    setCenteringMode,
    customizationEnabled,
    toggleCustomization,
  };
};
