import React from 'react'
import styles from './Users.module.css'
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';

const Users = (props) => {

    return <div className={styles.pageUser}>
        <Paginator currentPage = {props.currentPage}
                totalUsersCount = {props.totalUsersCount}
                onPageChanged = {props.onPageChanged}
                pageSize = {props.pageSize}/> 
        <div>
        {
        props.users.map(u => <User key={u.id}
                            user = {u}
                            followingInProgress = {props.followingInProgress}
                            follow = {props.follow}
                            unfollow = {props.unfollow}/>)
        }
        </div>
    </div>
}

export default Users;