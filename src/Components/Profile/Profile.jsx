import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';

const Profile = (props) => {
	return (
		<div className={s.content}>
			<ProfileInfo profile={props.profile} />
			<MyPostsContainer store={props.store} />
		</div>
	);
};

export default Profile;
