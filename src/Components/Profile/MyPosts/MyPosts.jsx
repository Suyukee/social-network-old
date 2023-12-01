import { useRef } from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profileReducer';

const MyPosts = (props) => {
	
	let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

	const newPostElement = useRef();

	const addPost = () => {
		props.dispatch(addPostActionCreator());
	};

	const onPostChange = () => {
		let text = newPostElement.current.value;
		props.dispatch(onPostChangeActionCreator(text));
	};

	return (
		<div className={s.content}>
			<div className={s.post}>
				<textarea
					ref={newPostElement}
					value={props.newPostText}
					onChange={onPostChange}
					placeholder='Start typing...'
				/>
				<div className={s.button}>
					<button onClick={addPost}>Add post</button>
				</div>
			</div>
			{postsElements}
		</div>
	);
}

export default MyPosts;