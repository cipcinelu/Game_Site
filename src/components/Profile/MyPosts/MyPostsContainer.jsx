import MyPosts from './MyPosts'
import { addPostAction } from '../../../redux/profileReducer'
import {connect} from 'react-redux'

const mapStateToProps = (state) => { //отвечает за данные
        return{
            posts: state.profilePage.posts,
            newPostText: state.profilePage.newPostText
        }
    }
    
const mapDispatchToProps = (dispatch) => { //отвечает за отправление данных через коллбеки
        return {
            addPost: (newPostText) => {
                dispatch(addPostAction(newPostText));
            }
        }
}  

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer