import vk from '../../../../assets/images/vk-logo.png';
import github from '../../../../assets/images/github-logo.png';
import styles from './DetailedInfo.module.css';

const DetailedInfo = ({ profile, setOpened }) => {
	const deactivateEditMode = () => {
		setOpened(false);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h3>Подробная информация</h3>
				<button onClick={deactivateEditMode}>x</button>
				<div className={styles.aboutMe}>
					<span>О себе: </span>
					{profile.aboutMe}
				</div>
				<div className={styles.contacts}>
					{profile.contacts.vk && (
						<div className={styles.link}>
							<span>Ссылка на Вконтакте:</span>
							<a href={`${profile.contacts.vk}`}>
								<img src={vk} alt="" />
							</a>
						</div>
					)}
					{profile.contacts.github && (
						<div className={styles.link}>
							<span>Ссылка на github:</span>
							<a href={`${profile.contacts.github}`}>
								<img src={github} alt="" />
							</a>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default DetailedInfo;
