import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.item}>
			<p>{props.message}</p>
			<span>likes: {props.likesCount}</span>
		</div>
	);
};

export default Post;
