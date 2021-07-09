import Post from './Post/Post'
import s from './MyPosts.module.css'
import React from 'react'

const MyPosts = (props) => {
    let postsElements = props.posts.map (p => <Post message = {p.message} likesCount = {p.likesCount}/>)
    let newPostElement = React.createRef(); //ссылка на текущий рендер страницы
    let onAddPost = () => props.addPost();
    
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return <div className = {s.postsBlock}>
    <div>
        <div>
            <textarea onChange = {onPostChange} ref = {newPostElement} value = {props.newPostText}></textarea>
        </div>
        <div>
            <button onClick = {onAddPost}>Add Post</button>
        </div>
    </div>
        {postsElements}
    </div>
}
export default MyPosts