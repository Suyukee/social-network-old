import React, { useEffect, useState } from 'react';
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

	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);

	return (
		<div className={styles.wrapper}>
			{props.isOwner && !editMode && (
				<span onClick={activateEditMode}>{props.status || 'No status'}</span>
			)}
			{props.isOwner && editMode && (
				<input value={status} onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus />
			)}

			{!props.isOwner && <span>{props.status || 'No status'}</span>}
		</div>
	);
};

export default ProfileStatusWithHooks;
