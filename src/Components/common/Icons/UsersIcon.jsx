const UsersIcon = ({ usersIsActive }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
			<rect x="0.5" y="0.5" width="79" height="79" stroke="black" />
			<mask id="mask0_19_2" maskUnits="userSpaceOnUse" x="23" y="23" width="35" height="35">
				<path d="M58 23H23V58H58V23Z" fill="white" />
			</mask>
			<g mask="url(#mask0_19_2)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M36.125 23C31.6952 23 28.1042 26.591 28.1042 31.0208C28.1042 35.4506 31.6952 39.0417 36.125 39.0417C40.5549 39.0417 44.1459 35.4506 44.1459 31.0208C44.1459 26.591 40.5549 23 36.125 23ZM30 31.0208C30 27.5 32.5 25 36.125 25C39.5 25 42 27.5 42 31C42 34.5 39.5 37 36.125 37C32.5 37 30 34.5417 30 31.0208Z"
					fill={usersIsActive ? '#8774e1' : '#666666'}
				/>
				<path
					d="M45.6041 23C44.7987 23 44.1458 23.1946 44.1458 24C44.1458 24.8054 44.7987 25 45.6041 25C48.4231 25 51.5 28.2019 51.5 31.0208C51.5 33.8398 48.4231 37 45.6041 37C44.7987 37 44.1458 37.1946 44.1458 38C44.1458 38.8054 44.7987 39.0417 45.6041 39.0417C50.034 39.0417 53.625 35.4506 53.625 31.0208C53.625 26.591 50.034 23 45.6041 23Z"
					fill={usersIsActive ? '#8774e1' : '#666666'}
				/>
				<path
					d="M51 43C51.3224 42.2619 52.0125 42.3646 52.7505 42.687C55.8378 44.0359 58 47.1179 58 50.7083V53.625C58 54.4304 57.8054 55 57 55C56.1945 55 56 54.4304 56 53.625V50.7083C56 48.3185 54.5634 45.4014 52.5 44.5C51.7619 44.1776 50.6774 43.7379 51 43Z"
					fill={usersIsActive ? '#8774e1' : '#666666'}
				/>
				<path
					d="M31.75 41.9583C26.9175 41.9583 23 45.8759 23 50.7083V53.625C23 54.4304 23.1946 55.0833 24 55.0833C24.8054 55.0833 25 54.4304 25 53.625V50.7083C25 47.4867 28.5283 44 31.75 44H40.5C43.7216 44 47 47.4867 47 50.7083V53.625C47 54.4304 47.1946 55 48 55C48.8054 55 49 54.4304 49 53.625V50.7083C49 45.8759 45.3325 41.9583 40.5 41.9583H31.75Z"
					fill={usersIsActive ? '#8774e1' : '#666666'}
				/>
			</g>
		</svg>
	);
};

export default UsersIcon;
