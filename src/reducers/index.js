import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import menuReducer from './menuReducer';
import employeeReducer from './employeeReducer';

const rootReducer = combineReducers({
    employee:employeeReducer,
    login:loginReducer,
    menu:menuReducer,
    
});

export default rootReducer;