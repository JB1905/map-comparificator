import { useSelector, useDispatch } from 'react-redux';

import { setActiveCenteringMode, toggleCustomization } from 'actions';

import { RootState } from 'reducers';

import { CenteringMode } from 'enums/CenteringMode';

export const useSettings = () => {
  const dispatch = useDispatch();

  const { activeCenteringMode, isCustomizationEnabled } = useSelector(
    (state: RootState) => state.settings
  );

  const setCM = (centeringMode: CenteringMode) => {
    dispatch(setActiveCenteringMode(centeringMode));
  };

  const tgC = () => {
    dispatch(toggleCustomization());
  };

  return {
    activeCenteringMode,
    setCenteringMode: setCM, // TODO
    isCustomizationEnabled,
    toggleCustomization: tgC, // TODO
  };
};
