import vk from '../../../../assets/images/vk-logo.png';
import github from '../../../../assets/images/github-logo.png';
import styles from './DetailedInfo.module.css';
import { useState } from 'react';
import EditProfileInfo from './EditProfileInfo/EditProfileInfo';
import CloseIcon from '../../../common/Icons/CloseIcon';

const DetailedInfo = ({ profile, setOpened, isOwner, saveProfile }) => {
	const exitDetailedInfo = () => {
		setOpened(false);
	};

	const [editedMode, setEditedMode] = useState(false);

	if (editedMode)
		return (
			<EditProfileInfo
				exitDetailedInfo={exitDetailedInfo}
				saveProfile={saveProfile}
				profile={profile}
			/>
		);

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h3>Подробная информация</h3>
					{isOwner && (
						<button onClick={() => setEditedMode(!editedMode)} className={styles.editInfoButton}>
							Редактировать профиль
						</button>
					)}
					<button onClick={exitDetailedInfo} className={styles.closeButton}>
						<CloseIcon />
					</button>
				</div>

				{profile.fullName && (
					<div className={styles.fullName}>
						<b>Имя:</b>
						{profile.fullName}
					</div>
				)}

				{profile.aboutMe && (
					<div className={styles.aboutMe}>
						<b>О себе:</b>
						{profile.aboutMe}
					</div>
				)}

				<div className={styles.lookingForAJob}>
					<b>В поисках работы:</b>
					{profile.lookingForAJob ? 'yes' : 'no'}
				</div>

				{profile.lookingForAJobDescription && (
					<div className={styles.lookingForAJobDescription}>
						<b>Профессиональные умения:</b>
						{profile.lookingForAJobDescription}
					</div>
				)}

				{(profile.contacts.vk || profile.contacts.github) && (
					<div className={styles.contacts}>
						<div className={styles.link}>
							<b>Ссылка на Вконтакте:</b>
							<a href={`${profile.contacts.vk}`}>
								<img src={vk} alt="" />
							</a>
						</div>
						<div className={styles.link}>
							<b>Ссылка на github:</b>
							<a href={`${profile.contacts.github}`}>
								<img src={github} alt="" />
							</a>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default DetailedInfo;
