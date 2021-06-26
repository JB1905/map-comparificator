import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect, useMemo, useState } from 'react';
import mobile from 'is-mobile';

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

type SystemTheme = {
  readonly title: string;
  readonly icon: 'desktop' | 'mobile-phone';
};

type SupportedThemes =
  | DefaultThemes
  | (DefaultThemes & {
      readonly System: SystemTheme;
    });

type SetThemeCallback = (theme: Theme) => void;

// TODO refactor
const useSystemTheme = () => {
  const [isSystemDark, setIsSystemDark] = useState(false);

  useEffect(() => {
    const handleChange = (e: MediaQueryListEvent) => {
      setIsSystemDark(e.matches);
    };

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    setIsSystemDark(prefersDark.matches);

    prefersDark.addEventListener('change', handleChange);

    return () => prefersDark.removeEventListener('change', handleChange);
  }, []);

  return isSystemDark;
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
            [Theme.System]: {
              title: t('theme.system'),
              icon: mobile() ? 'mobile-phone' : 'desktop',
            },
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

  const isDark = useMemo(
    () => isDarkTheme || (activeTheme === Theme.System && isSystemDark),
    [activeTheme, isDarkTheme, isSystemDark]
  );

  const setTheme = useCallback<SetThemeCallback>(
    (theme) => dispatch(Actions.setActiveTheme(theme)),
    [dispatch]
  );

  const toggleTheme = useCallback(() => {
    const availableThemes = Object.keys(themes) as Theme[];

    const nextThemeIndex = availableThemes.indexOf(activeTheme) + 1;
    const themeIndexInRange = nextThemeIndex % availableThemes.length;

    dispatch(Actions.setActiveTheme(availableThemes[themeIndexInRange]));
  }, [activeTheme, dispatch, themes]);

  return {
    themes,
    activeTheme,
    isDark,
    setTheme,
    toggleTheme,
  };
};
