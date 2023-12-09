import { useRef } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	let postsElements = props.posts.map((p) => (
		<Post message={p.message} likesCount={p.likesCount} />
	));

	const newPostElement = useRef();

	const onAddPost = () => {
		props.addPost();
	};

	const onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	};

	return (
		<div className={s.content}>
			{postsElements}
			<div className={s.post}>
				<textarea
					ref={newPostElement}
					value={props.newPostText}
					onChange={onPostChange}
					placeholder="Start typing..."
				/>
				<div className={s.button}>
					<button onClick={onAddPost}>Add post</button>
				</div>
			</div>
		</div>
	);
};

export default MyPosts;
