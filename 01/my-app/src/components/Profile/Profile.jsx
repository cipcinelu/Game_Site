import MyPosts from './MyPosts/MyPosts'
import './Profile'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
    return <div>
        <ProfileInfo></ProfileInfo>
        <MyPosts></MyPosts>
    </div>
}

export default Profile;