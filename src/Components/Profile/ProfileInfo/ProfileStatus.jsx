import React from 'react';
import styles from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
	};

	activateEditMode = () => {
		this.setState({
			editMode: true,
		});
	};

	deactivateEditMode = () => {
		this.setState({
			editMode: false,
		});
	};

	render() {
		return (
			<div className={styles.wrapper}>
				{!this.state.editMode && <span onClick={this.activateEditMode}>{this.props.aboutMe}</span>}

				{this.state.editMode && (
					<input value={this.props.aboutMe} onBlur={this.deactivateEditMode} autoFocus />
				)}
			</div>
		);
	}
}

export default ProfileStatus;
