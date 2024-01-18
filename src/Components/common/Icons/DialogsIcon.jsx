const DialogsIcon = (props) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
			<path
				d="M51 44.018H52.4C53.1355 44.018 53.8637 43.8731 54.543 43.5915C55.2224 43.3098 55.8398 42.8968 56.3597 42.3763C56.8798 41.8559 57.2925 41.2382 57.5739 40.5582C57.8553 39.8781 58 39.1493 58 38.4132V28.6049C58 27.8689 57.8553 27.14 57.5739 26.46C57.2925 25.78 56.8798 25.162 56.3597 24.6416C55.8398 24.1212 55.2224 23.7084 54.543 23.4268C53.8637 23.1451 53.1355 23 52.4 23H35.6C34.8646 23 34.1364 23.1451 33.457 23.4268C32.7776 23.7084 32.1602 24.1212 31.6403 24.6416C31.1202 25.162 30.7077 25.78 30.4262 26.46C30.1448 27.14 29.9999 27.8689 29.9999 28.6049V32.8086"
				stroke={props.dialogsIsActive ? '#8774e1' : '#666666'}
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M31.4001 53.8265L34.6025 57.0493C35.2516 57.66 36.1091 58 37 58C37.891 58 38.7485 57.66 39.3977 57.0493L42.6 53.8265H45.4C46.8853 53.8265 48.3096 53.2361 49.3598 52.1849C50.4101 51.1338 51 49.7081 51 48.2216V38.4132C51 36.9268 50.4101 35.5013 49.3598 34.4502C48.3096 33.3991 46.8853 32.8086 45.4 32.8086H28.6C27.1148 32.8086 25.6905 33.3991 24.6403 34.4502C23.5901 35.5013 23 36.9268 23 38.4132V48.2216C23 49.7081 23.5901 51.1338 24.6403 52.1849C25.6905 53.2361 27.1148 53.8265 28.6 53.8265H31.4001Z"
				stroke={props.dialogsIsActive ? '#8774e1' : '#666666'}
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export default DialogsIcon;
