import React from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { logout } from '../../redux/authReducer';

class NavbarContainer extends React.Component {
	render() {
		return <Navbar {...this.props} />;
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
	profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { logout })(NavbarContainer);
