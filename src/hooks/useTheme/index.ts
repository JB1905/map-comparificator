import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import * as Actions from 'store/actions';

import { RootState } from 'store/reducers';

import { Theme } from 'enums/Theme';

export const useTheme = () => {
  const { t } = useTranslation();
  
  const dispatch = useDispatch();

  const { activeTheme } = useSelector(
    (state: RootState) => state.theme
  );

  const [themes, setThemes] = useState<any>({
    [Theme.Light]: {title: t('theme.light'), icon: 'flash'},
    [Theme.Dark]: {title: t('theme.dark'), icon: 'moon'},
  })

  // useEffect(() => {
  //   if () {
  //     setThemes((prev) => {
  //       ...prev,
  //       [Theme.System]: {title: t('theme.system'), icon: 'desktop'},
  //     })
  //   }
  // }, [])

  /**
   * @deprecated use activeTheme instead
   */
  const isDark = activeTheme === Theme.Dark;

  const setTheme = (theme: Theme) => dispatch(Actions.setActiveTheme(theme));

  const toggleTheme = () => {
    dispatch(Actions.setActiveTheme(Object.keys(themes)[(Object.keys(themes).indexOf(activeTheme as any) + 1) % Object.keys(themes).length] as any)); 
  }

  return { themes, activeTheme, isDark, setTheme, toggleTheme };
};
