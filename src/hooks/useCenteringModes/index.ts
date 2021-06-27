import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useTypedSelector } from 'hooks/useTypedSelector';

import * as Actions from 'store/actions';

import { CenteringMode } from 'types/CenteringMode';

type SetCenteringModeCallback = (centeringMode: CenteringMode) => void;

export const useCenteringModes = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { activeCenteringMode } = useTypedSelector(
    (state) => state.centeringModes
  );

  const centeringModes = useMemo(
    () => [
      { name: t('settings.centeringMode.center'), value: CenteringMode.Center },
      { name: t('settings.centeringMode.fill'), value: CenteringMode.Fill },
      { name: t('settings.centeringMode.none'), value: CenteringMode.None },
    ],
    [t]
  );

  const setCenteringMode = useCallback<SetCenteringModeCallback>(
    (centeringMode) => {
      dispatch(Actions.setActiveCenteringMode(centeringMode));
    },
    [dispatch]
  );

  return {
    centeringModes,
    activeCenteringMode,
    setCenteringMode,
  };
};
