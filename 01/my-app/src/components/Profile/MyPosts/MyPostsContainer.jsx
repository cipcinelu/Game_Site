import MyPosts from './MyPosts'
import React from 'react'
import { addPostAction, updateNewPostTextAction } from '../../../redux/profileReducer'
import StoreContext from '../../../StoreContext'

const MyPostsContainer = () => {

    //let state = props.store.getState();
    //let dispatch = props.store.dispatch ();

    return <StoreContext.Consumer> 
        { (store) => {
            let state = store.getState();
            let addPost = () => store.dispatch(addPostAction());
            let onPostChange = (text) => {
                let action = updateNewPostTextAction(text);
                store.dispatch(action);
            }

            return <MyPosts updateNewPostText={onPostChange}
                addPost={addPost}
                posts={state.profilePage.posts}
                newPostText={state.profilePage.newPostText}></MyPosts>
        }}
    </StoreContext.Consumer>
}

export default MyPostsContainer