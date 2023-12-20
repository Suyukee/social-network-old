import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, getUsers, follow, unfollow } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.getUsers(pageNumber, this.props.pageSize);
	};
	render() {
		return (
			<>
				{this.props.isFetching && <Preloader />}
				<Users
					users={this.props.users}
					pageSize={this.props.pageSize}
					totalUsersCount={this.props.totalUsersCount}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
					followingInProgress={this.props.followingInProgress}
				/>
			</>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
	};
};

let mapDispatchToProps = {
	setCurrentPage,
	getUsers,
	follow,
	unfollow,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
