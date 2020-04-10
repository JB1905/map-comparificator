import { useSelector, useDispatch } from 'react-redux';

import { SET_SYNC_TYPE } from '../actions';

export const useSettings = () => {
  const dispatch = useDispatch();

  const sync = useSelector((state: any) => state.settings.sync);

  const setSyncType = (syncType: any) => {
    dispatch({
      type: SET_SYNC_TYPE,
      payload: syncType,
    });
  };

  return { sync, setSyncType };
};
