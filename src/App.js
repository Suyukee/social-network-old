import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
	return (
		<div className="app-wrapper">
			<div className="content">
				<Navbar />
				<Routes>
					<Route path="/profile" element={<ProfileContainer store={props.store} />} />
					<Route path="/dialogs/*" element={<DialogsContainer store={props.store} />} />
					<Route path="/users" element={<UsersContainer />} />
					<Route path="/news" element={<News />} />
					<Route path="/music" element={<Music />} />
					<Route path="/settings" element={<Settings />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
