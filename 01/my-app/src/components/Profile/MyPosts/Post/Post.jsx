import classes from './Post.module.css'

const Post = (props) => {
    return <div className ={classes.item}>
                <div>
                    <img src="https://trikky.ru/wp-content/blogs.dir/1/files/2020/05/29/2facb44ee57306645faedea7a5f94d25.jpg" alt="AVA"/>
                </div>
                {props.message}
                <div className = "button">
                    <button>{props.likesCount} like</button>
                </div>               
            </div>
}

export default Post