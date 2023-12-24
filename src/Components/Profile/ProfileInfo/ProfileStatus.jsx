import React from 'react';
import styles from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status,
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
		this.props.updateStatus(this.state.status);
	};

	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value,
		});
	};

	componentDidUpdate(prevProps) {
		if (prevProps.status !== this.props.status) {
			this.setState({ status: this.props.status });
		}
	}

	render() {
		return (
			<div className={styles.wrapper}>
				{!this.state.editMode && (
					<span onClick={this.activateEditMode}>{this.props.status || 'No status'}</span>
				)}

				{this.state.editMode && (
					<input
						value={this.state.status}
						onChange={this.onStatusChange}
						onBlur={this.deactivateEditMode}
						autoFocus
					/>
				)}
			</div>
		);
	}
}

export default ProfileStatus;
