import { useSelector, useDispatch } from 'react-redux';

import { SET_SYNC_TYPE, TOGGLE_DRAG_LOCK } from '../actions';

export const useSettings = () => {
  const dispatch = useDispatch();

  const { sync, dragEnabled } = useSelector((state: any) => state.settings);

  const setSyncType = (syncType: any) => {
    dispatch({
      type: SET_SYNC_TYPE,
      payload: syncType,
    });
  };

  const toggleDragLock = () => {
    dispatch({ type: TOGGLE_DRAG_LOCK });
  };

  return { sync, setSyncType, dragEnabled, toggleDragLock };
};
