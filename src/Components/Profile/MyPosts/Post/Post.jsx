import { useState } from 'react';
import LikePostIcon from '../../../common/Icons/LikePostIcon';
import styles from './Post.module.css';

const Post = (props) => {
	const [liked, setLiked] = useState(false);
	let likesCount = props.likesCount;

	const likePost = () => {
		setLiked(!liked);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.item}>
				<p>{props.message}</p>
				<button onClick={likePost} className={styles.likeContainer}>
					<LikePostIcon liked={liked} />
					<span className={liked ? styles.liked : undefined}>
						{liked ? likesCount + 1 : likesCount}
					</span>
				</button>
			</div>
		</div>
	);
};

export default Post;
