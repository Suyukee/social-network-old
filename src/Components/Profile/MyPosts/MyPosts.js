import s from './MyPosts.module.css'

let postsData = [];

const MyPosts = (props) => {
    return (
        <div className={s.content}>
            <div className={s.post}>
                <h3>New post</h3>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <h3>My posts</h3>
            <div className={s.item}>
                <p>It's my project 👍</p>
            </div>
            <div className={s.item}>
                <p>I make his with React 😎</p>
            </div>
            
        </div>
    );
}
 
export default MyPosts;