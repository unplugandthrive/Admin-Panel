import { LOGIN_USER } from '../actions/types';

const initialState = {
    login_status:false,
    permission:'',
    userName: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        login_status:action.payload.login_status,
        permission:action.payload.permission,
        userName:action.payload.userName
      };
    default:
      return state;
  }
}