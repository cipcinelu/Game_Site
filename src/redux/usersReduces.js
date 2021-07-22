import { usersAPI } from "../api/api";
import { updateObjectArray } from "../utils/objectHelper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectArray (state.users, action.userId, 'id', {followed: true}),
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectArray (state.users, action.userId, 'id', {followed: false}),
            }

        case SET_USERS: {
            return {
                ...state,
                users: action.users //к массиву старых юзеров дописываем новых
            }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId] // если загрузка, то мы дописываем id 
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users }) //это всё action creator
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const reqestUsers = (currentPage, pageSize) => { // это thunk Creator
    return async (dispatch) => {                        // а это уже сам thunk
        dispatch(toggleIsFetching(true));

        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setUsersTotalCount(data.totalCount))
    }
}

export const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
        dispatch(toggleFollowingProgress(true, userId))
        let data = await apiMethod(userId)
        if (data.resultCode === 0) {
            dispatch(actionCreator(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.follow.bind(userId)
        let actionCreator = followSuccess
        followUnfollowFlow (dispatch, userId, apiMethod, actionCreator)
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.unfollow.bind(userId)
        let actionCreator = unfollowSuccess
        followUnfollowFlow (dispatch, userId, apiMethod, actionCreator)
    }
}

export default usersReducer;