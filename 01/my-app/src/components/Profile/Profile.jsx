import MyPosts from './MyPosts/MyPosts'
import './Profile'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    
    return <div>
        <ProfileInfo></ProfileInfo>
        <MyPosts posts = {props.profilePage.posts} 
                          addPost = {props.addPost}
                          newPostText = {props.profilePage.newPostText}
                          updateNewPostText = {props.updateNewPostText}
                          ></MyPosts>
    </div>
}

export default Profile;