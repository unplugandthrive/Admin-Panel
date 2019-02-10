import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import menuReducer from './menuReducer';
import createReducer from './createReducer';

const rootReducer = combineReducers({
    login:loginReducer,
    menu:menuReducer,
    employee:createReducer
});

export default rootReducer;