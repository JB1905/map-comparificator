import { useSelector, useDispatch } from 'react-redux';

import { SET_THEME } from '../actions';

import { RootState } from '../reducers';

import { Theme } from '../enums/Theme';

export const useTheme = () => {
  const activeTheme = useSelector(
    (state: RootState) => state.theme.activeTheme
  );

  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch({
      type: SET_THEME,
      payload: activeTheme === Theme.Dark ? Theme.Light : Theme.Dark,
    });
  };

  return { activeTheme, toggleTheme };
};
