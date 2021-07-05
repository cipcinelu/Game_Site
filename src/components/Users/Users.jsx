import React from 'react'
import styles from './Users.module.css'
import * as axios from 'axios' //экспортиуем всё и упаковываем в axios
import userPhoto from '../../img/withoutPhoto.png'


class Users extends React.Component { //наследую реакт компаненту

    componentDidMount() {   //аякс запрос
                            //вызывается один раз при отрисовки этой страницы
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }


    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { this.props.unfollow(u.id) }}>Follow</button>
                                : <button onClick={() => { this.props.follow(u.id) }}>Unfollow</button>
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
}


export default Users;