import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../img/withoutPhoto.png'
import { NavLink } from 'react-router-dom';

const Users = (props) => { 
      
    let pagesCount = Math.ceil((props.totalUsersCount-13100) / props.pageSize);
    
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
       

        return <div className = {styles.pageUser}>
            <div>
                {pages.map (p => {
                    return <button
                        className={props.currentPage === p && styles.selectedPage}
                        onClick={(e)=> {props.onPageChanged(p)}}>{p}</button> //это обработчик событий
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to = {'/profile/'+ u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='' className={styles.userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>Follow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Unfollow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>

                    </span>
                </div>
                )}
        </div>
    }



export default Users;