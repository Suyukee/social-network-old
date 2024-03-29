import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/user.png';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import PhotoProfileEdit from './PhotoProfileEdit/PhotoProfileEdit';
import { useState } from 'react';
import DetailedInfo from './DetailedInfo/DetailedInfo';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
	const [opened, setOpened] = useState(false);

	if (!profile) {
		return <Preloader />;
	}
	return (
		<div className={styles.content}>
			<div className={styles.userPhoto}>
				<img src={profile.photos.large || userPhoto} alt="" />
				{isOwner && (
					<div className={styles.editButton}>
						<PhotoProfileEdit isOwner={isOwner} savePhoto={savePhoto} />
					</div>
				)}
			</div>
			<div className={styles.userInfo}>
				<div className={styles.name}>
					<h3>{profile.fullName}</h3>
					<ProfileStatus isOwner={isOwner} status={status} updateStatus={updateStatus} />
				</div>

				{profile && (
					<div className={styles.moreInfo}>
						{opened ? (
							<DetailedInfo
								profile={profile}
								setOpened={setOpened}
								isOwner={isOwner}
								saveProfile={saveProfile}
							/>
						) : (
							<button onClick={() => setOpened(true)} className={styles.moreInfoButton}>
								Подробнее
							</button>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default ProfileInfo;
