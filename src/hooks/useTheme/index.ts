import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      setThemes((prev:any) => ({
        ...prev,
        [Theme.System]: {title: t('theme.system'), icon: 'desktop'},
      }))
    } else if (activeTheme === Theme.System) {
      setTheme(Theme.Light)
    }
  }, [t, activeTheme])

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)

  useEffect(() => {
    setIsDarkTheme(activeTheme === Theme.Dark)
  }, [activeTheme])

  const [systemDark, setSystemDark] = useState<any>(false)
  
  useEffect(() => {
    const fn = (e:any) => {      
      setSystemDark(e.matches)
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',fn )

    return () => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', fn)
  }, [])

  const setTheme = (theme: Theme) => dispatch(Actions.setActiveTheme(theme));

  const toggleTheme = () => {
    dispatch(Actions.setActiveTheme(Object.keys(themes)[(Object.keys(themes).indexOf(activeTheme as any) + 1) % Object.keys(themes).length] as any)); 
  }

  return { themes, activeTheme, isDark: isDarkTheme || (activeTheme === Theme.System && systemDark), setTheme, toggleTheme };
};
