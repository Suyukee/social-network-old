import { Routes, Route } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Login from './components/Login/Login';

function App(props) {
	return (
		<div className="app-wrapper">
			<div className="content">
				<NavbarContainer />
				<Routes>
					<Route path="/profile/:userId?" element={<ProfileContainer store={props.store} />} />
					<Route path="/dialogs/*" element={<DialogsContainer store={props.store} />} />
					<Route path="/users" element={<UsersContainer />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
