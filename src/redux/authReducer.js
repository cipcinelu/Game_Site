import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'
 
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } })
export const getCapchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl }})
export const getError = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl }})

export const getAuthUserData = () => async (dispatch) => { //это thunk (санки)
    let responce = await authAPI.me()

    if (responce.data.resultCode === 0) {
        let { id, login, email } = responce.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => { //это thunk (санки)
    let responce = await authAPI.login(email, password, rememberMe, captcha)

    if (responce.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let message = responce.data.messages.length > 0 ? responce.data.messages[0] : 'Some error';
        //dispatch (getErrorMessage(message))
        //dispatch(stopSubmit('login', { _error: message }));
        if (responce.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        return Promise.reject(message) // передаём в промис ошибку, теперь промис не вернётся
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch (getCapchaUrlSuccess(captchaUrl))
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