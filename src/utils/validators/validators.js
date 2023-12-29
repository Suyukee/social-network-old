export const textFormValidate = (values) => {
	const errors = {};
	if (!values.text) {
		errors.text = 'Required';
	} else if (values.text.length > 70) {
		errors.text = 'Max length 70 symbols';
	}
	return errors;
};
