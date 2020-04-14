import { useSelector, useDispatch } from 'react-redux';

import { SET_THEME } from '../actions';

import { Theme } from '../enums/Theme';

export const useTheme = () => {
  const activeTheme = useSelector((state: any) => state.theme.activeTheme);

  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch({
      type: SET_THEME,
      payload: activeTheme === Theme.Dark ? Theme.Light : Theme.Dark,
    });
  };

  return { activeTheme, toggleTheme };
};
