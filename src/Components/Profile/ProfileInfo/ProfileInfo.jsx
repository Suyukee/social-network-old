import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import vk from '../../../assets/images/vk-logo.png';
import github from '../../../assets/images/github-logo.png';
import userPhoto from '../../../assets/images/user.png';
import ProfileStatus from './ProfileStatus';
import ProfileEdit from './ProfileEdit/ProfileEdit';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
	if (!profile) {
		return <Preloader />;
	}

	return (
		<div className={styles.content}>
			<div className={styles.userPhoto}>
				<img src={profile.photos.large || userPhoto} alt="" />
				{isOwner && (
					<div className={styles.editButton}>
						<ProfileEdit isOwner={isOwner} savePhoto={savePhoto} />
					</div>
				)}
			</div>
			<div className={styles.userInfo}>
				<div className={styles.name}>
					<h3>{profile.fullName}</h3>
					<ProfileStatus isOwner={isOwner} status={status} updateStatus={updateStatus} />
				</div>
				<div className={styles.contacts}>
					{profile.contacts.vk && (
						<a href={`${profile.contacts.vk}`}>
							<img src={vk} alt="" />
						</a>
					)}
					{profile.contacts.github && (
						<a href={`${profile.contacts.github}`}>
							<img src={github} alt="" />
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
