import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import vk from '../../../assets/images/vk-logo.png';
import github from '../../../assets/images/github-logo.png';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />;
	}

	return (
		<div className={styles.content}>
			<img
				// src="https://sun59-1.userapi.com/s/v1/if2/SKDQfyY1NFSQrjgFJMrXfF3hjdv5rOAQ_aJTXI7EPN7G6fzGyXu8wmCAsgAy3FE5O6DncfQiR4eUhOvdv74n9z7H.jpg?quality=95&crop=65,56,703,703&as=50x50,100x100,200x200,400x400&ava=1&u=pYyra2gbPNUJtPhJw-YJKUV8V0EZwL5uJHo3ubWIswY&cs=200x200"
				src={props.profile.photos.large}
				alt=""
			/>
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
