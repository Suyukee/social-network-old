import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Messages from "./Components/Messages/Messages";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";

function App() {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<div className="content">
					<Navbar />
					<Routes>
						<Route path="/profile" element={<Profile/>} />
						<Route path="/messages" element={<Messages/>} />
						<Route path="/news" element={<News/>} />
						<Route path="/music" element={<Music/>} />
						<Route path="/settings" element={<Settings/>} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;