import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import vk from '../../../assets/images/vk-logo.png';
import github from '../../../assets/images/github-logo.png';
import userPhoto from '../../../assets/images/user.png';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({ profile, status, updateStatus }) => {
	if (!profile) {
		return <Preloader />;
	}

	return (
		<div className={styles.content}>
			{profile.photos.large ? (
				<img src={profile.photos.large} alt="" />
			) : (
				<img src={userPhoto} alt="" />
			)}
			<div className={styles.right}>
				<div className={styles.name}>
					<h3>{profile.fullName}</h3>
					<ProfileStatus status={status} updateStatus={updateStatus} />
				</div>
				<div className={styles.contacts}>
					{profile.contacts.vk && (
						<a href={`https://${profile.contacts.vk}`}>
							<img src={vk} alt="" />
						</a>
					)}
					{profile.contacts.github && (
						<a href={`https://${profile.contacts.github}`}>
							<img src={github} alt="" />
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
