import React from 'react'
import {connect} from 'react-redux'
import { followAC, unfollowAC, setUsersAC } from '../../redux/usersReduces'
import Users from './Users'

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users, //в компаненту придут юзеры, значениями которого будут юзеры из стейта
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId)); //мы диспатчим результат работы AC, а не его самого
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Users);