import { TOGGLE_MENU } from './types';

export const toggleSideMenu = () => dispatch => {
    dispatch({
        type: TOGGLE_MENU,
    });
}