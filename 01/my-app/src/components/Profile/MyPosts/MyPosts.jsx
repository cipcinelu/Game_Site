import Post from './Post/Post'
import s from './MyPosts.module.css'

const MyPosts = () => {

    let posts = [
        {id:1, post: 'Привет, как дела? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, deleniti qui molestiae reprehenderit, optio cumque consequatur blanditiis reiciendis molestias tenetur magnam totam delectus laborum similique recusandae. Corrupti assumenda temporibus reprehenderit!', likesCount: 12},
        {id:2, post: 'Это мой первый пост!', likesCount: 21}
    ]

    let postsElements = posts.map (p => <Post message = {p.post} likesCount = {p.likesCount}/>)

    return <div className = {s.postsBlock}>
       <h2> My post </h2>
        <div>
            New post
        </div>
            {postsElements}
        </div>
}

export default MyPosts