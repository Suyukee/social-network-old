export const textFormValidate = (values) => {
	const errors = {};
	if (!values.text) {
		errors.text = 'Required';
	} else if (values.text.length > 70) {
		errors.text = 'Max length 70 symbols';
	}
	return errors;
};

export const usersLoginFormValidate = (values) => {
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
