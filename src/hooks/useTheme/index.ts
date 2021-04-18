import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import { useTypedSelector } from 'hooks/useTypedSelector';

import * as Actions from 'store/actions';

import { Theme } from 'enums/Theme';

type DefaultThemes = {
  readonly Light: {
    readonly title: string;
    readonly icon: 'flash';
  };
  readonly Dark: {
    readonly title: string;
    readonly icon: 'moon';
  };
};

type AutoTheme = {
  readonly title: string;
  readonly icon: 'contrast';
};

type SupportedThemes =
  | DefaultThemes
  | (DefaultThemes & {
      readonly Auto: AutoTheme;
    });

// TODO
const useAutoTheme = () => {
  const [isAutoDark, setIsAutoDark] = useState(false);

  useEffect(() => {
    const handleChange = (e: MediaQueryListEvent) => {
      setIsAutoDark(e.matches);
    };

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    setIsAutoDark(prefersDark.matches);

    prefersDark.addEventListener('change', handleChange);

    return () => prefersDark.removeEventListener('change', handleChange);
  }, []);

  return isAutoDark;
};

// const useAvailableThemes = () => {}

// TODO refactor
export const useTheme = () => {
  const dispatch = useDispatch();

  // ------------------------------------------
  const { t } = useTranslation();

  const { activeTheme } = useTypedSelector((state) => state.theme);

  const [themes, setThemes] = useState<SupportedThemes>({
    [Theme.Light]: { title: t('theme.light'), icon: 'flash' },
    [Theme.Dark]: { title: t('theme.dark'), icon: 'moon' },
  } as const);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      setThemes(
        (prev) =>
          ({
            ...prev,
            [Theme.Auto]: { title: t('theme.auto'), icon: 'contrast' },
          } as const)
      );
    } else if (activeTheme === Theme.Auto) {
      setTheme(Theme.Light);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t, activeTheme]);
  // ------------------------------------------

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(activeTheme === Theme.Dark);
  }, [activeTheme]);

  const isAutoDark = useAutoTheme();

  const isDark = isDarkTheme || (activeTheme === Theme.Auto && isAutoDark);

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
