export const textFormValidate = (values) => {
	const errors = {};
	if (!values.text) {
		errors.text = 'Поле не может быть пустым';
	} else if (values.text.length > 70) {
		errors.text = 'Максимальное количество символов 70';
	}
	return errors;
};

export const usersLoginFormValidate = (values, captchaUrl) => {
	const errors = {};
	if (!values.email) {
		errors.email = 'Введите email';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Некорректный email';
	}
	if (!values.password) {
		errors.password = 'Введите пароль';
	}
	return errors;
};

export const ProfileEditFormValidate = (values) => {
	const errors = {};
	if (!values.fullName) {
		errors.fullName = 'Поле не может быть пустым';
	} else if (values.fullName.length > 20) {
		errors.text = 'Максимальное количество символов 20';
	}
	if (!values.aboutMe) {
		errors.aboutMe = 'Поле не может быть пустым';
	} else if (values.aboutMe.length > 50) {
		errors.text = 'Максимальное количество символов 50';
	}
	if (!values.lookingForAJobDescription) {
		errors.lookingForAJobDescription = 'Поле не может быть пустым';
	} else if (values.lookingForAJobDescription.length > 50) {
		errors.text = 'Максимальное количество символов 50';
	}
	return errors;
};
