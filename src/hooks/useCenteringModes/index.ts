import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useTypedSelector } from 'hooks/useTypedSelector';

import * as Actions from 'store/actions';

import { CenteringMode } from 'enums/CenteringMode';

export const useCenteringModes = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { activeCenteringMode } = useTypedSelector(
    (state) => state.centeringModes
  );

  const centeringModes = [
    { name: t('settings.centeringMode.center'), value: CenteringMode.Center },
    { name: t('settings.centeringMode.fill'), value: CenteringMode.Fill },
    { name: t('settings.centeringMode.none'), value: CenteringMode.None },
  ];

  const setCenteringMode = (centeringMode: CenteringMode) => {
    dispatch(Actions.setActiveCenteringMode(centeringMode));
  };

  return {
    centeringModes,
    activeCenteringMode,
    setCenteringMode,
  };
};
