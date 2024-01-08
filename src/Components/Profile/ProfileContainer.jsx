import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profileReducer';
import { useParams } from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';

function withRouter(Children) {
	return (props) => {
		const match = { params: useParams() };

		return <Children {...props} match={match} />;
	};
}

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.autorizedUserId;
		}
		this.props.getUserProfile(userId);
		this.props.getUserStatus(userId);
	}
	render() {
		return (
			<>
				{this.props.isFetching && <Preloader />}
				<Profile
					{...this.props}
					profile={this.props.profile}
					status={this.props.status}
					updateStatus={this.props.updateUserStatus}
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
	connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
	withRouter,
)(ProfileContainer);
