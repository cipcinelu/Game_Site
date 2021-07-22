import React from 'react'
import styles from '../Users.module.css'
import userPhoto from '../../../img/withoutPhoto.png'
import { NavLink } from 'react-router-dom';

const User = ({user,followingInProgress, follow, unfollow, ...props}) => {

    let pagesCount = Math.ceil((props.totalUsersCount - 13100) / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <span>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='' className={styles.userPhoto} />
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => unfollow(user.id)}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => follow(user.id)}>Follow</button>
                }
            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>

        </span>
    </div>
}



export default User;