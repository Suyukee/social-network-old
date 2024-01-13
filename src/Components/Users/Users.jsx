import styles from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = (props) => {
	return (
		<div className={styles.content}>
			<Paginator
				totalUsersCount={props.totalUsersCount}
				pageSize={props.pageSize}
				currentPage={props.currentPage}
				onPageChanged={props.onPageChanged}
			/>
			{props.users.map((u) => (
				<User
					user={u}
					followingInProgress={props.followingInProgress}
					unfollow={props.unfollow}
					follow={props.follow}
					key={u.id}
				/>
			))}
		</div>
	);
};

export default Users;
