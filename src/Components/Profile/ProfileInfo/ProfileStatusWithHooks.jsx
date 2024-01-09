import React, { useState } from 'react';
import styles from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {
	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.status);

	const activateEditMode = () => {
		setEditMode(true);
	};

	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	};

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	};

	return (
		<div className={styles.wrapper}>
			{!editMode && <span onClick={activateEditMode}>{props.status || 'No status'}</span>}

			{editMode && (
				<input value={status} onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus />
			)}
		</div>
	);
};

export default ProfileStatusWithHooks;
