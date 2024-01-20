import { useState } from 'react';
import LikePostIcon from '../../../common/Icons/LikePostIcon';
import styles from './Post.module.css';

const Post = (props) => {
	const [isLike, setIsLike] = useState(false);
	return (
		<div className={styles.wrapper}>
			<div className={styles.item}>
				<p>{props.message}</p>
				<button onClick={() => setIsLike(!isLike)} className={styles.likeContainer}>
					<LikePostIcon isLike={isLike} />
					<span className={isLike ? styles.liked : undefined}>
						{isLike ? props.likesCount + 1 : props.likesCount}
					</span>
				</button>
			</div>
		</div>
	);
};

export default Post;
