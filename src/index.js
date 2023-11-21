import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state, { subscribe, updateNewPostText } from './redux/state';
import { addPost } from './redux/state';

let rerenderEntireTree = (state) => {
	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
		<React.StrictMode>
			<App
				state={state}
				addPost={addPost}
				updateNewPostText={updateNewPostText}
			/>
		</React.StrictMode>
	);
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);