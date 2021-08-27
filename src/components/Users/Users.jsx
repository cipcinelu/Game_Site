import React from 'react'
import styles from './Users.module.css'
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';
import Preloader from '../common/Preloader/Preloader';

const Users = (props) => {

    return <div className={styles.pageUser}>
        {props.isFetching ? <Preloader/>: null}
        <div>
            {
                props.users.map(u => <User key={u.id}
                    user={u}
                    followingInProgress={props.followingInProgress}
                    follow={props.follow}
                    unfollow={props.unfollow} />)
            }
        </div>
        <Paginator currentPage={props.currentPage}
            totalItemsCount={props.totalUsersCount}
            onPageChanged={props.onPageChanged}
            pageSize={props.pageSize} />
    </div>
}

export default Users;