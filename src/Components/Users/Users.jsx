import axios from 'axios';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';

import React from 'react';

class Users extends React.Component {
	componentDidMount() {
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
			)
			.then((response) => {
				this.props.setUsers(response.data.items);
			});
	}
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
			)
			.then((response) => {
				this.props.setUsers(response.data.items);
			});
	};
	render() {
		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}

		return (
			<div className={styles.content}>
				<div className={styles.pagesList}>
					{pages.map((p) => {
						return (
							<span
								className={this.props.currentPage === p && styles.selectedPage}
								onClick={(e) => {
									this.onPageChanged(p);
								}}
							>
								{p}
							</span>
						);
					})}
				</div>
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
							<div className={styles.location}>
								<p>{`u.location.country`}</p>
								<p>{`u.location.city`}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default Users;
