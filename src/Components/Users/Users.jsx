import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

const Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	// const onFollow = (userId) => {
	// 	followUser(userId).then((data) => {
	// 		if (data.resultCode === 0) {
	// 			props.follow(userId);
	// 		}
	// 	});
	// };

	return (
		<div className={styles.content}>
			<div className={styles.pagesList}>
				{pages.map((p) => {
					return (
						<span
							className={props.currentPage === p && styles.selectedPage}
							onClick={(e) => {
								props.onPageChanged(p);
							}}
						>
							{p}
						</span>
					);
				})}
			</div>
			{props.users.map((u) => (
				<div key={u.id} className={styles.item}>
					<div className={styles.left}>
						<NavLink to={`/profile/${u.id}`}>
							<img
								src={u.photos.small != null ? u.photos.small : userPhoto}
								className={styles.userPhoto}
								alt=""
							/>
						</NavLink>
						<div className={styles.button}>
							{u.followed ? (
								<button
									className={styles.unfollow}
									onClick={() => {
										usersAPI.unfollowUser(u.id).then((data) => {
											if (data.resultCode === 0) {
												props.unfollow(u.id);
											}
										});
									}}
								>
									Unfollow
								</button>
							) : (
								<button
									onClick={() => {
										usersAPI.followUser(u.id).then((data) => {
											if (data.resultCode === 0) {
												props.follow(u.id);
											}
										});
									}}
								>
									Follow
								</button>
							)}
						</div>
					</div>
					<div className={styles.right}>
						<div className={styles.user_info}>
							<p className={styles.fullname}>{u.name}</p>
							<p>{u.status}</p>
						</div>
						<div className={styles.location}>
							<p>{`u.location.country`}</p>
							<p>{`u.location.city`}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Users;
