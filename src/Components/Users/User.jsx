import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/user.png';
import styles from './Users.module.css';

const User = ({ user, followingInProgress, unfollow, follow }) => {
	return (
		<div className={styles.item}>
			<div className={styles.left}>
				<NavLink to={`/profile/${user.id}`}>
					<img
						src={user.photos.small != null ? user.photos.small : userPhoto}
						className={styles.userPhoto}
						alt=""
					/>
				</NavLink>
				<div className={styles.button}>
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
			<div className={styles.right}>
				<div className={styles.user_info}>
					<p className={styles.fullname}>{user.name}</p>
					<p>{user.status}</p>
				</div>
				<div className={styles.location}>
					<p>{`user.location.country`}</p>
					<p>{`user.location.city`}</p>
				</div>
			</div>
		</div>
	);
};

export default User;
