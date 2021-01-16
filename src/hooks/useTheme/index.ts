import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import { useTypedSelector } from 'hooks/useTypedSelector';

import * as Actions from 'store/actions';

import { Theme } from 'enums/Theme';

// TODO
const useSystemTheme = () => {
  const [isSystemDark, setIsSystemDark] = useState(false);

  useEffect(() => {
    const handleChange = (e: MediaQueryListEvent) => {
      setIsSystemDark(e.matches);
    };

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    prefersDark.addEventListener('change', handleChange);

    return () => prefersDark.removeEventListener('change', handleChange);
  }, []);

  return isSystemDark;
};

// const useAvailableThemes = () => {}

export const useTheme = () => {
  const dispatch = useDispatch();

  // ------------------------------------------
  const { t } = useTranslation();

  const { activeTheme } = useTypedSelector((state) => state.theme);

  const [themes, setThemes] = useState({
    [Theme.Light]: { title: t('theme.light'), icon: 'flash' },
    [Theme.Dark]: { title: t('theme.dark'), icon: 'moon' },
  } as const);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      setThemes(
        (prev) =>
          ({
            ...prev,
            [Theme.System]: { title: t('theme.system'), icon: 'desktop' },
          } as const)
      );
    } else if (activeTheme === Theme.System) {
      setTheme(Theme.Light);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t, activeTheme]);
  // ------------------------------------------

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(activeTheme === Theme.Dark);
  }, [activeTheme]);

  const isSystemDark = useSystemTheme();

  const isDark = isDarkTheme || (activeTheme === Theme.System && isSystemDark);

  const setTheme = (theme: Theme) => dispatch(Actions.setActiveTheme(theme));

  const toggleTheme = () => {
    const availableThemes = Object.keys(themes) as Theme[];

    const nextThemeIndex = availableThemes.indexOf(activeTheme) + 1;
    const themeIndexInRange = nextThemeIndex % availableThemes.length;

    dispatch(Actions.setActiveTheme(availableThemes[themeIndexInRange]));
  };

  return {
    themes,
    activeTheme,
    isDark,
    setTheme,
    toggleTheme,
  };
};
