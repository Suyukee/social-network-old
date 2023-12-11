import axios from 'axios';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';

import React from 'react';

// const Users = (props) => {
// 	let getUsers = () => {
// 		if (props.users.length === 0) {
// 			axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
// 				props.setUsers(response.data.items);
// 			});
// 		}
// 	};
// 	return (
// 		<div className={styles.content}>
// 			{props.users.map((u) => (
// 				<div key={u.id} className={styles.item}>
// 					<div className={styles.left}>
// 						<img
// 							src={u.photos.small != null ? u.photos.small : userPhoto}
// 							className={styles.userPhoto}
// 							alt=""
// 						/>
// 						<div className={styles.button}>
// 							{u.followed ? (
// 								<button
// 									className={styles.unfollow}
// 									onClick={() => {
// 										props.unfollow(u.id);
// 									}}
// 								>
// 									Unfollow
// 								</button>
// 							) : (
// 								<button
// 									onClick={() => {
// 										props.follow(u.id);
// 									}}
// 								>
// 									Follow
// 								</button>
// 							)}
// 						</div>
// 					</div>
// 					<div className={styles.right}>
// 						<div className={styles.user_info}>
// 							<p className={styles.fullname}>{u.name}</p>
// 							<p>{u.status}</p>
// 						</div>
// 					</div>
// 				</div>
// 			))}
// 		</div>
// 	);
// };

class Users extends React.Component {
	getUsers = () => {
		if (this.props.users.length === 0) {
			axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
				this.props.setUsers(response.data.items);
			});
		}
	};
	render() {
		return (
			<div className={styles.content}>
				{this.props.users.map((u) => (
					<div key={u.id} className={styles.item}>
						<div className={styles.left}>
							<img
								src={u.photos.small != null ? u.photos.small : userPhoto}
								className={styles.userPhoto}
								alt=""
							/>
							<div className={styles.button}>
								{u.followed ? (
									<button
										className={styles.unfollow}
										onClick={() => {
											this.props.unfollow(u.id);
										}}
									>
										Unfollow
									</button>
								) : (
									<button
										onClick={() => {
											this.props.follow(u.id);
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
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default Users;
