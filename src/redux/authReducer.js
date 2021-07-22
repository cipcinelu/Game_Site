import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } })
export const getAuthUserData = () => async (dispatch) => { //это thunk (санки)
    let responce = await authAPI.me()

    if (responce.data.resultCode === 0) {
        let { id, login, email } = responce.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}
export const login = (email, password, rememberMe) => async (dispatch) => { //это thunk (санки)
    let responce = await authAPI.login(email, password, rememberMe)

    if (responce.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let message = responce.data.messages.length > 0 ? responce.data.messages[0] : 'Some error';
        let action = stopSubmit('login', { _error: message });
        dispatch(action);
    }
}

export const logout = () => (dispatch) => { //это thunk (санки)
    authAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
}
export default authReducer;