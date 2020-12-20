import { useSelector, useDispatch } from 'react-redux';

import * as Actions from 'store/actions';

import { RootState } from 'store/reducers';

import { CenteringMode } from 'enums/CenteringMode';
import { useTranslation } from 'react-i18next';

export const useSettings = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { activeCenteringMode, isCustomizationEnabled } = useSelector(
    (state: RootState) => state.settings
  );

  const centeringModes = [
    { name: t('settings.centeringMode.center'), value: CenteringMode.Center },
    { name: t('settings.centeringMode.fill'), value: CenteringMode.Fill },
    { name: t('settings.centeringMode.none'), value: CenteringMode.None },
  ];

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
    centeringModes,
  };
};
