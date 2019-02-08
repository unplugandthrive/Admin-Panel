import { CREATE_EMPLOYEE } from './types';

export const createEmployee = (employeeInfo) => (dispatch) => {
    dispatch({
        type:CREATE_EMPLOYEE,
        payload: employeeInfo
    });
}