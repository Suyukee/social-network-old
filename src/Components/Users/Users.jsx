import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	// const onFollow = (props) => {};

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
										axios
											.delete('https://social-network.samuraijs.com/api/1.0/follow/' + u.id, {
												withCredentials: true,
												headers: {
													'API-KEY': '45aa9eca-58a5-4f86-a0db-b271e8e90049',
												},
											})
											.then((response) => {
												if (response.data.resultCode === 0) {
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
										axios
											.post(
												'https://social-network.samuraijs.com/api/1.0/follow/' + u.id,
												{},
												{
													withCredentials: true,
													headers: {
														'API-KEY': '45aa9eca-58a5-4f86-a0db-b271e8e90049',
													},
												},
											)
											.then((response) => {
												if (response.data.resultCode === 0) {
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
