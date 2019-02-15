import { CREATE_EMPLOYEE, FETCH_EMPLOYEE } from './types';

import axios from 'axios';

export const createEmployee = (employeeInfo) => (dispatch) => {
    dispatch({
        type: CREATE_EMPLOYEE,
        payload: employeeInfo
    });
}

export const fetchEmployees = () => (dispatch) => {
    console.log('deploying action')
    axios.get(`http://3.85.253.50:8080/employees`)
        .then(resp => {
            console.log(resp.data);
            dispatch({
                type: FETCH_EMPLOYEE,
                data: resp.data
            });
        })
        .catch(error => {
            console.log(error);
        });
    
}