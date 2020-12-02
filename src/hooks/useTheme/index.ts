import { useSelector, useDispatch } from 'react-redux';

import * as Actions from 'store/actions';

import { RootState } from 'store/reducers';

import { Theme } from 'enums/Theme';

export const useTheme = () => {
  const dispatch = useDispatch();

  const activeTheme = useSelector(
    (state: RootState) => state.theme.activeTheme
  );

  const isDark = activeTheme === Theme.Dark;

  const toggleTheme = () => {
    dispatch(Actions.setActiveTheme(isDark ? Theme.Light : Theme.Dark));
  };

  return { activeTheme, isDark, toggleTheme };
};
