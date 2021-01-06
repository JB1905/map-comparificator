import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import * as Actions from 'store/actions';

import { RootState } from 'store/reducers';

import { Theme } from 'enums/Theme';

export const useTheme = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { activeTheme } = useSelector((state: RootState) => state.theme);

  const [themes, setThemes] = useState({
    [Theme.Light]: { title: t('theme.light'), icon: 'flash' },
    [Theme.Dark]: { title: t('theme.dark'), icon: 'moon' },
  });

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      setThemes((prev) => ({
        ...prev,
        [Theme.System]: { title: t('theme.system'), icon: 'desktop' },
      }));
    } else if (activeTheme === Theme.System) {
      setTheme(Theme.Light);
    }
  }, [t, activeTheme]);

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(activeTheme === Theme.Dark);
  }, [activeTheme]);

  const [systemDark, setSystemDark] = useState(false);

  useEffect(() => {
    const fn = (e: MediaQueryListEvent) => {
      setSystemDark(e.matches);
    };

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')

    prefersDark.addEventListener('change', fn);

    return () => prefersDark.removeEventListener('change', fn);
  }, []);

  const setTheme = (theme: Theme) => dispatch(Actions.setActiveTheme(theme));

  const toggleTheme = () => {
    const availableThemes = Object.keys(themes);

    const nextThemeIndex = availableThemes.indexOf(activeTheme) + 1;
    const themeIndexInLoop = nextThemeIndex % availableThemes.length;

    dispatch(Actions.setActiveTheme(availableThemes[themeIndexInLoop]));
  };

  return {
    themes,
    activeTheme,
    isDark: isDarkTheme || (activeTheme === Theme.System && systemDark),
    setTheme,
    toggleTheme,
  };
};
