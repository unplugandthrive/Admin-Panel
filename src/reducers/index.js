import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
    login:loginReducer,
    menu:menuReducer
});

export default rootReducer;