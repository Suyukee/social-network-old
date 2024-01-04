import styles from './Login.module.css';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { login } from '../../redux/authReducer';
import { Navigate } from 'react-router-dom';

const Login = (props) => {
	const usersLoginFormValidate = (values) => {
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

	const submit = (formData, actions) => {
		props.login(formData.email, formData.password, formData.rememberMe, actions.setStatus);
		actions.setSubmitting(false);
		actions.resetForm({ values: { email: '', password: '' } });
	};

	if (props.isAuth) {
		return <Navigate to={'/profile'} />;
	}

	return (
		<div className={styles.wrapper}>
			<Formik
				initialValues={{ login: '', password: '', rememberMe: false }}
				validate={usersLoginFormValidate}
				onSubmit={submit}
			>
				{({ errors, touched, status }) => (
					<Form>
						<h1 className={styles.title}>Вход</h1>
						{status && <h4>{status}</h4>}
						<div
							className={styles.group + ' ' + (errors.email && touched.email ? styles.error : '')}
						>
							<Field type="text" name="email" id="email" placeholder=" " required />
							<label for="email">Email</label>
							{errors.email && touched.email ? (
								<p className={styles.errorData}>{errors.email}</p>
							) : null}
						</div>

						<div
							className={
								styles.group + ' ' + (errors.password && touched.password ? styles.error : '')
							}
						>
							<Field type="password" name="password" id="password" placeholder=" " required />
							<label for="password">Пароль</label>
							{errors.password && touched.password ? (
								<p className={styles.errorData}>{errors.password}</p>
							) : null}
						</div>
						<button type="submit">Войти</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
	};
};

export default connect(mapStateToProps, { login })(Login);
