import EditProfileIcon from '../../../common/Icons/EditProfileIcon';
import styles from './ProfileEdit.module.css';

const ProfileEdit = (props) => {
	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			props.savePhoto(e.target.files[0]);
		}
	};

	return (
		<div className={styles.content}>
			<div className={styles.fileInput}>
				<label for="file-input">
					<EditProfileIcon />
					<input onChange={onMainPhotoSelected} type={'file'} id="file-input" />
				</label>
			</div>
		</div>
	);
};

export default ProfileEdit;
