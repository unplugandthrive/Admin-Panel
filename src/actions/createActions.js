import { CREATE_EMPLOYEE } from './types';

const validateEmployee = (data) => {
    var msg = '';
    var valid = true;
    if (data.fname === ''){
        msg += "Missing Employee's First Name \n";
        valid = false;
    }

    if (data.lname === ''){
        msg += "Missing Employee's Last Name \n";
        valid = false;
    }

    if (data.email === '') {
        msg += "Missing Email"
    }
}


export const createEmployee = (employeeInfo) => dispatch => {
    console.log('trying to dispatch')
    dispatch({
        type: LOGIN_USER,
        payload: {
            login_status:true,
            permission:USER_FILTERS.PERMISSIONS.ADMIN,
            userName: 'Amanda'
        }
}