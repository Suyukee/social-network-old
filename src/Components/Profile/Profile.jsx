import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';

const Profile = (props) => {
	return (
		<div className={s.content}>
			<ProfileInfo
				isOwner={props.isOwner}
				profile={props.profile}
				status={props.status}
				updateStatus={props.updateStatus}
				savePhoto={props.savePhoto}
			/>
			<MyPostsContainer store={props.store} />
		</div>
	);
};

export default Profile;
