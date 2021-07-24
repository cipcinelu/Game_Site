import Post from './Post/Post'
import s from './MyPosts.module.css'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {required, maxLengthCreator} from '../../../utils/validators/validators'
import {Textarea} from '../../common/FormsControls/FormsControls'

let maxLength10 = maxLengthCreator (10);

const MyPosts = React.memo ((props) => {
    let postsElements = props.posts.map (p => <Post key = {p.id} message = {p.message} likesCount = {p.likesCount}/>)
    let onAddPost = (values) => props.addPost(values.newPostText);

    return <div className = {s.postsBlock}>
        <AddNewPostFormResux onSubmit={onAddPost}/>
        {postsElements}
    </div>
})

const AddNewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field  name ='newPostText' 
                    component = {Textarea}
                    validate={[required, maxLength10]}></Field>
        </div>
        <div>
            <button>Add Post</button>
        </div>
    </form>
    )
}
const AddNewPostFormResux = reduxForm({form:'ProfileAddNewPostForm'}) (AddNewPostForm)

export default MyPosts