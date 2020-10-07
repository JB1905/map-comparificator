import { useSelector, useDispatch } from 'react-redux';

import * as Actions from 'actions';

import { RootState } from 'reducers';

import { CenteringMode } from 'enums/CenteringMode';

export const useSettings = () => {
  const dispatch = useDispatch();

  const { activeCenteringMode, isCustomizationEnabled } = useSelector(
    (state: RootState) => state.settings
  );

  const setCenteringMode = (centeringMode: CenteringMode) => {
    dispatch(Actions.setActiveCenteringMode(centeringMode));
  };

  const toggleCustomization = () => {
    dispatch(Actions.toggleCustomization());
  };

  return {
    activeCenteringMode,
    setCenteringMode,
    isCustomizationEnabled,
    toggleCustomization,
  };
};
