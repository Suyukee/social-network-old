import { Component, Suspense, lazy } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import NavbarContainer from './components/Navbar/NavbarContainer';
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const Login = lazy(() => import('./components/Login/Login'));

function withRouter(Children) {
	return (props) => {
		const match = { params: useParams() };

		return <Children {...props} match={match} />;
	};
}

class App extends Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />;
		}
		return (
			<div className="app-wrapper">
				<div className="content">
					<NavbarContainer />
					<Suspense fallback={<Preloader />}>
						<Routes>
							<Route path="/profile/:userId?" element={<ProfileContainer />} />
							<Route path="/dialogs/*" element={<DialogsContainer />} />
							<Route path="/users" element={<UsersContainer />} />
							<Route path="/login" element={<Login />} />
						</Routes>
					</Suspense>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
});

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);
