import s from './MyPosts.module.css'
import Post from './Post/Post';

let postData = [
    {id: 1, message: 'It\'s my project 👍', likesCount: 12},
    {id: 2, message: 'I make his with React 😎', likesCount: 34}
];

const MyPosts = (props) => {
    return (
        <div className={s.content}>
            <h3>My posts</h3>
            <div className={s.post}>
                <textarea placeholder='Start typing...'></textarea>
                <div className={s.button}>
                    <button>Add post</button>
                </div>
            </div>
            <Post message={postData[0].message} likes={postData[0].likesCount}/>
            <Post message={postData[1].message} likes={postData[1].likesCount}/>
        </div>
    );
}

export default MyPosts;