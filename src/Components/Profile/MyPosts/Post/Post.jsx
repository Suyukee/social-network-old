import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.wrapper}>
			<div className={s.item}>
				<p>{props.message}</p>
				<span>likes: {props.likesCount}</span>
			</div>
		</div>
	);
};

export default Post;
