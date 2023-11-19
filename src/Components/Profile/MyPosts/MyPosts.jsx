import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

	let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

	return (
		<div className={s.content}>
			<h3>My posts</h3>
			<div className={s.post}>
				<textarea placeholder='Start typing...'></textarea>
				<div className={s.button}>
					<button>Add post</button>
				</div>
			</div>
			{postsElements}
		</div>
	);
}

export default MyPosts;