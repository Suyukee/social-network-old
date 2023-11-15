import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <p>{props.message}</p>
            <span>likes: {props.likes}</span>
        </div>
    );
}

export default Post;