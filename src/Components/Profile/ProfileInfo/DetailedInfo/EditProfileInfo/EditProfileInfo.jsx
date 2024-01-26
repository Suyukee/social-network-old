import styles from './EditProfileInfo.module.css';

const EditProfileInfo = (props) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h3>Профиль</h3>
				</div>

				<div className={styles.aboutMe}>
					<label for="aboutMe">О себе: </label>
					<input type="text" id="aboutMe" />
				</div>

				<div className={styles.lookingForAJob}>
					<label for="lookingForAJob">В поисках работы: </label>
					<input type="checkbox" id="lookingForAJob" />
				</div>
				<div className={styles.lookingForAJobDescription}>
					<label for="lookingForAJobDescription">Профессиональные умения: </label>
					<input type="text" id="lookingForAJobDescription" />
				</div>

				<div className={styles.contacts}>
					<div className={styles.link}>
						<label for="vk">Ссылка на Вконтакте:</label>
						<input type="text" id="vk" />
					</div>
					<div className={styles.link}>
						<label for="github">Ссылка на github:</label>
						<input type="text" id="github" />
					</div>
				</div>
				<button className={styles.saveButton}>Сохранить</button>
			</div>
		</div>
	);
};

export default EditProfileInfo;
