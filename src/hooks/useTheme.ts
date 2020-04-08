import { useSelector, useDispatch } from 'react-redux';

import { SET_THEME } from '../actions';

import { Theme } from '../enums/Theme';

export const useTheme = () => {
  const appearance = useSelector((state: any) => state.theme.appearance);

  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch({
      type: SET_THEME,
      payload: appearance === Theme.Dark ? Theme.Light : Theme.Dark,
    });
  };

  return { appearance, toggleTheme };
};
