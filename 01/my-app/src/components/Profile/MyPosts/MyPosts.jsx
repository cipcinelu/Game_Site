import Post from './Post/Post'
import s from './MyPosts.module.css'

const MyPosts = (posts) => {

    let postsElements = posts.posts.map (p => <Post message = {p.post} likesCount = {p.likesCount}/>)

    return <div className = {s.postsBlock}>
       <h2> My post </h2>
        <div>
            New post
        </div>
            {postsElements}
        </div>
}

export default MyPosts