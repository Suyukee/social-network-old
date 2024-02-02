import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/user.png';
import styles from './Users.module.css';

const User = ({ user, followingInProgress, unfollow, follow }) => {
	return (
		<div className={styles.item}>
			<NavLink to={`/profile/${user.id}`}>
				<img
					src={user.photos.small != null ? user.photos.small : userPhoto}
					className={styles.userPhoto}
					alt=""
				/>
			</NavLink>
			<div className={styles.right}>
				<div className={styles.userInfo}>
					<p className={styles.fullname}>{user.name}</p>
					<p>
						{user.status && user.status.length > 35
							? user.status.slice(0, 35) + '...'
							: user.status}
					</p>
				</div>
				<div>
					{user.followed ? (
						<button
							className={styles.unfollow}
							disabled={followingInProgress.some((id) => id === user.id)}
							onClick={() => {
								unfollow(user.id);
							}}
						>
							Unfollow
						</button>
					) : (
						<button
							disabled={followingInProgress.some((id) => id === user.id)}
							onClick={() => {
								follow(user.id);
							}}
						>
							Follow
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default User;
