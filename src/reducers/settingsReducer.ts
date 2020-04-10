import { SET_SYNC_TYPE } from '../actions';

const initialState = {
  sync: 'center',
};

export const settingsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SYNC_TYPE:
      return { ...state, sync: action.payload };

    default:
      return state;
  }
};
