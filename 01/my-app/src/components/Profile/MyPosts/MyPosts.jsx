import Post from './Post/Post'
import s from './MyPosts.module.css'
import React from 'react'

const MyPosts = (props) => {
    let postsElements = props.posts.map (p => <Post message = {p.message} likesCount = {p.likesCount}/>)

    let newPostElement = React.createRef(); 

    let addPost = () => props.dispatch({type:'ADD-POST'});
    
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type:'UPDATE-NEW-POST-TEXT', newText:text};
        props.dispatch (action);
    }

    return <div className = {s.postsBlock}>
        <div>
            <div>
                <textarea onChange = {onPostChange} ref = {newPostElement} value = {props.newPostText}></textarea>
            </div>
            <div>
                <button onClick = {addPost}>Add Post</button>
            </div>
        </div>
            {postsElements}
        </div>
}

export default MyPosts