import { useSelector, useDispatch } from 'react-redux';

import { SET_LAYOUT, RESET_LAYOUT } from '../actions';
import { initialLayout } from '../constants/initialLayout';
import { compareObjects } from '../helpers/compareObjects';

export const useLayout = () => {
  const dispatch = useDispatch();

  const layout = useSelector((state: any) => state.layout);

  const isInitialLayout = compareObjects(layout, initialLayout);

  const setLayout = (layout: object) => {
    dispatch({ type: SET_LAYOUT, payload: layout });
  };

  const resetLayout = () => dispatch({ type: RESET_LAYOUT });

  return {
    layout,
    setLayout,
    resetLayout,
    isInitialLayout,
  };
};
