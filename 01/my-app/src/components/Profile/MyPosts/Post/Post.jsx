import classes from './Post.module.css'

const Post = () => {
    return <div className ={classes.item}>
                <img src="https://trikky.ru/wp-content/blogs.dir/1/files/2020/05/29/2facb44ee57306645faedea7a5f94d25.jpg" alt="AVA"/>
                post 1
                <div>
                    <button>like</button>
                </div>
            </div>
}

export default Post