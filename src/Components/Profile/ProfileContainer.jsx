import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
	getUserProfile,
	getUserStatus,
	updateUserStatus,
	savePhoto,
} from '../../redux/profileReducer';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { withRouter } from '../../hoc/withRouter';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
	refreshProfile() {
		let userId = this.props.router.params.userId;
		if (!userId) {
			userId = this.props.autorizedUserId;
		}
		this.props.getUserProfile(userId);
		this.props.getUserStatus(userId);
	}

	componentDidMount() {
		this.refreshProfile();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.router.params.userId !== prevProps.router.params.userId) {
			this.refreshProfile();
		}
	}

	render() {
		return (
			<>
				{this.props.isFetching && <Preloader />}
				<Profile
					{...this.props}
					isOwner={!this.props.router.params.userId}
					profile={this.props.profile}
					status={this.props.status}
					updateStatus={this.props.updateUserStatus}
					savePhoto={this.props.savePhoto}
				/>
			</>
		);
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	isFetching: state.profilePage.isFetching,
	status: state.profilePage.status,
	autorizedUserId: state.auth.userId,
	isAuth: state.auth.isAuth,
});

export default compose(
	connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, savePhoto }),
	withRouter,
	withAuthRedirect,
)(ProfileContainer);
