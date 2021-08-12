import MyPostsContainer from './MyPosts/MyPostsContainer'
import './Profile'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Preloader from '../common/Preloader/Preloader';


const Profile = (props) => {
    
    if (!props.profile) {//если profile null или undefinded
        return <Preloader/>
    }
    
    return <div>
    <ProfileInfo profile = {props.profile}
                    status = {props.status}
                    updateStatus = {props.updateStatus}
                    isOwner = {props.owner}
                    savePhoto = {props.savePhoto}
                    saveProfile = {props.saveProfile}/>
    {/* <MyPostsContainer store = {props.store}/> */}
    </div>
}

export default Profile;