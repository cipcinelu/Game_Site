import MyPosts from './MyPosts'
import { addPostAction, updateNewPostTextAction } from '../../../redux/profileReducer'
import {connect} from 'react-redux'

const mapStateToProps = (state) => { //отвечает за данные
        return{
            posts: state.profilePage.posts,
            newPostText: state.profilePage.newPostText
        }
    }
    
const mapDispatchToProps = (dispatch) => { //отвечает за отправление данных через коллбеки
        return {
            updateNewPostText: (text) => {
                let action = updateNewPostTextAction(text);
                dispatch(action);
            },
            addPost: () => {
                dispatch(addPostAction());
            }
        }
}  

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer