import { SET_CENTERING_MODE, TOGGLE_CUSTOMIZATION } from '../actions';

const initialState = {
  activeCenteringMode: 'center',
  customizationEnabled: true,
};

export const settingsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CENTERING_MODE:
      return { ...state, activeCenteringMode: action.payload };

    case TOGGLE_CUSTOMIZATION:
      return { ...state, customizationEnabled: !state.customizationEnabled };

    default:
      return state;
  }
};
