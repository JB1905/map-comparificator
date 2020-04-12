import { SET_SYNC_TYPE, TOGGLE_DRAG_LOCK } from '../actions';

const initialState = {
  sync: 'center',
  dragEnabled: true,
};

export const settingsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SYNC_TYPE:
      return { ...state, sync: action.payload };

    case TOGGLE_DRAG_LOCK:
      return { ...state, dragEnabled: !state.dragEnabled };

    default:
      return state;
  }
};
