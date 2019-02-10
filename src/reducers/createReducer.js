import { CREATE_EMPLOYEE } from '../actions/types';

const initialState = {
    empID:0
};

export default function(state = initialState, action) {
    switch (action.type) {
        case CREATE_EMPLOYEE:
            console.log('POSTING EMPLOYEE TO DB')
            // INSERT AXIOS/FETCH IN HERE
            return {
                ...state,
                empID:state.empID +1
            }
        default:
            return state
    }
}