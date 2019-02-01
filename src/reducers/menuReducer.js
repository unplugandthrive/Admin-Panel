import { TOGGLE_MENU } from '../actions/types';

const initialState = {
    sideMenuVisibility:false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        sideMenuVisibility:!state.sideMenuVisibility
      };
    default:
      return state;
  }
}