import { useSelector, useDispatch } from 'react-redux';

import { SET_THEME } from 'actions';

import { RootState } from 'reducers';

import { Theme } from 'enums/Theme';

export const useTheme = () => {
  const activeTheme = useSelector(
    (state: RootState) => state.theme.activeTheme
  );

  const isDark = activeTheme === Theme.Dark;

  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch({
      type: SET_THEME,
      payload: isDark ? Theme.Light : Theme.Dark,
    });
  };

  return { activeTheme, isDark, toggleTheme };
};
