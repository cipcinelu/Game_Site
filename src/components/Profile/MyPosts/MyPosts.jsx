import Post from './Post/Post'
import s from './MyPosts.module.css'
import React from 'react'
import FormikTextArea from '../../common/FormikControls/FormikTextArea'


const MyPosts = React.memo((props) => { // блягодаря memo компонента перерисовывается, только если измнилась   
    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

    return <div className={s.postsBlock}>
        <FormikTextArea submit={props.addPost} />
        {postsElements}
    </div>
})

export default MyPosts