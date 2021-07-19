import { profileApi } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = { //выставление стандартного значения
    posts: [
        {id:1, message: 'Привет, как дела? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, deleniti qui molestiae reprehenderit, optio cumque consequatur blanditiis reiciendis molestias tenetur magnam totam delectus laborum similique recusandae. Corrupti assumenda temporibus reprehenderit!', likesCount: 12},
        {id:2, message: 'Это мой первый пост!', likesCount: 21}
    ],
    profile: null,
    status:'',
}

const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST:{  //это action, а action это объект
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 1
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText : ''
            };
        }
        case SET_USER_PROFILE:
            return {...state, profile:action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
}

export const addPostAction = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type:SET_STATUS, status})

export const getUserProfile = (userId) => (dispatch) => {
    profileApi.getProfile(userId).then(data => {
       dispatch(setUserProfile(data))
    });
}
export const getStatus = (userId) => (dispatch) => { // это санкки (thunk)
    profileApi.getStatus(userId).then(data => {
       dispatch(setStatus(data))
    });
}
export const updateStatus = (status) => (dispatch) => { // это санкки (thunk)
    profileApi.updateStatus(status).then(data => {
        if (data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    });
}

export default profileReducer;