import { LOGIN_USER } from './types';
import { USER_FILTERS } from './userFilters';

export const loginUser = (loginInfo) => dispatch => {
    console.log('trying to dispatch')
    if (loginInfo.user === 'admin' && loginInfo.pass === "admin123") {
        dispatch({
            type: LOGIN_USER,
            payload: {
                login_status:true,
                permission:USER_FILTERS.PERMISSIONS.ADMIN,
                userName: 'Amanda'
            }
        });
    }
}