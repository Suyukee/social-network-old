import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profileReducer';
import { useParams } from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

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
			userId = 30523;
		}
		this.props.getUserProfile(userId);
	}
	render() {
		return (
			<>
				{this.props.isFetching && <Preloader />}
				<Profile {...this.props} profile={this.props.profile} />
			</>
		);
	}
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	isFetching: state.profilePage.isFetching,
});

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserProfile })(withUrlDataContainerComponent);
