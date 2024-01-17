import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

let mapStateToPropsForRedirect = (state) => ({
	isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component) => {
	class RedirectComponent extends React.Component {
		render() {
			if (this.props.router) {
				if (!this.props.isAuth && !this.props.router.params.userId)
					return <Navigate to={'/login'} />;
				return <Component {...this.props} />;
			}
			return <Navigate to={'/login'} />;
		}
	}

	return connect(mapStateToPropsForRedirect)(RedirectComponent);
};
