import { connect } from 'react-redux';
import { addPost, updateNewPostText } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPost());
		},
		updateNewPostText: (text) => {
			let action = updateNewPostText(text);
			dispatch(action);
		},
	};
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
