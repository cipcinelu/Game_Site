import MyPosts from './MyPosts'
import React from 'react'
import {addPostAction, updateNewPostTextAction} from '../../../redux/store.js'

const MyPostsContainer = (props) => {
    
    let state = props.store.getState();
    //let dispatch = props.store.dispatch ();

    let addPost = () => props.store.dispatch(addPostAction());
    let onPostChange = (text) => {
        let action = updateNewPostTextAction(text);
        props.store.dispatch(action);
    }
    
    return <MyPosts updateNewPostText = {onPostChange} 
                    addPost = {addPost} 
                    posts = {state.profilePage.posts}
                    newPostText = {state.profilePage.newPostText}></MyPosts>
}

export default MyPostsContainer