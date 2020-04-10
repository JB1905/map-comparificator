import {
  SEARCH_HISTORY_ADD,
  SEARCH_HISTORY_REMOVE,
  SEARCH_HISTORY_CLEAR,
} from '../actions';

const initialState: any = {
  history: [],
};

export const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEARCH_HISTORY_ADD:
      return { ...state, history: state.history.push(action.payload) };

    case SEARCH_HISTORY_REMOVE:
      return {
        ...state,
        history: state.history.filter(
          (item: any) => item.id !== action.payload
        ),
      };

    case SEARCH_HISTORY_CLEAR:
      return { ...state, history: initialState.history };

    default:
      return state;
  }
};
