import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div className={s.content}>
			<img
				src="https://sun59-1.userapi.com/s/v1/if2/SKDQfyY1NFSQrjgFJMrXfF3hjdv5rOAQ_aJTXI7EPN7G6fzGyXu8wmCAsgAy3FE5O6DncfQiR4eUhOvdv74n9z7H.jpg?quality=95&crop=65,56,703,703&as=50x50,100x100,200x200,400x400&ava=1&u=pYyra2gbPNUJtPhJw-YJKUV8V0EZwL5uJHo3ubWIswY&cs=200x200"
				alt=""
			/>
			<div className={s.name}>
				<h3>Kozyrev Vladimir</h3>
			</div>
		</div>
	);
};

export default ProfileInfo;
