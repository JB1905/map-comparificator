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

type SystemTheme = {
  readonly title: string;
  readonly icon: 'desktop';
};

type SupportedThemes =
  | DefaultThemes
  | (DefaultThemes & {
      readonly System: SystemTheme;
    });

// TODO
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
            [Theme.System]: { title: t('theme.system'), icon: 'desktop' },
          } as const)
      );
    } else if (activeTheme === Theme.System) {
      // TODO return
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

  // TODO
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setTheme = (theme: Theme) => dispatch(Actions.setActiveTheme(theme));

  const toggleTheme = () => {
    const availableThemes = Object.keys(themes) as Theme[];

    const nextThemeIndex = availableThemes.indexOf(activeTheme) + 1;
    const themeIndexInRange = nextThemeIndex % availableThemes.length;

    dispatch(Actions.setActiveTheme(availableThemes[themeIndexInRange]));
  };

  // TODO
  // useEffect(() => {
  //   console.log(activeTheme)
  //   if (!activeTheme || !Object.keys(themes).includes(activeTheme)) {
  //     setTheme(Theme.Light)
  //   }
  // }, [activeTheme, setTheme, themes])

  return {
    themes,
    activeTheme,
    isDark,
    setTheme,
    toggleTheme,
  };
};
