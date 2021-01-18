import MyPosts from './MyPosts/MyPosts'
import './Profile'
import classes from './Profile.module.css'

const Profile = () => {
    return <div className="content">
        <div>
        <img src="https://im0-tub-ru.yandex.net/i?id=fc9576f57e6c1521a2494e07eb1e104f&n=13" alt=""/>
        </div>
        <div>
        ava + description
        </div>
        <MyPosts></MyPosts>
    </div>
}

export default Profile;