import { CREATE_EMPLOYEE, FETCH_EMPLOYEE } from '../actions/types';

import axios from 'axios'

const initialState = {
    empID: 0,
    employees: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_EMPLOYEE:
            console.log('POSTING EMPLOYEE TO DB')
            // INSERT AXIOS/FETCH IN HERE
            return {
                ...state,
                empID: state.empID + 1
            }

        case FETCH_EMPLOYEE:
            return {
                ...state,
                employees: action.data
            }


        default:
            return state
    }
}