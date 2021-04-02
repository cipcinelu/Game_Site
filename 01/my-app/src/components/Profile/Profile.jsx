import MyPosts from './MyPosts/MyPosts'
import './Profile'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return <div>
        <ProfileInfo></ProfileInfo>
        <MyPosts posts = {props.posts}></MyPosts>
    </div>
}

export default Profile;