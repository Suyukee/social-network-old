import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import vk from '../../../assets/images/vk-logo.png';
import github from '../../../assets/images/github-logo.png';
import userPhoto from '../../../assets/images/user.png';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />;
	}

	return (
		<div className={styles.content}>
			{props.profile.photos.large ? (
				<img src={props.profile.photos.large} alt="" />
			) : (
				<img src={userPhoto} alt="" />
			)}
			<div className={styles.right}>
				<div className={styles.name}>
					<h3>{props.profile.fullName}</h3>
					<p>{props.profile.aboutMe}</p>
				</div>
				<div className={styles.contacts}>
					{props.profile.contacts.vk && (
						<a href={`https://${props.profile.contacts.vk}`}>
							<img src={vk} alt="" />
						</a>
					)}
					{props.profile.contacts.github && (
						<a href={`https://${props.profile.contacts.github}`}>
							<img src={github} alt="" />
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
