import styles from './Login.module.css';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { login } from '../../redux/authReducer';
import { Navigate } from 'react-router-dom';
import { usersLoginFormValidate } from '../../utils/validators/validators';

const Login = ({ login, isAuth, captchaUrl }) => {
	const submit = (formData, actions) => {
		login(
			formData.email,
			formData.password,
			formData.rememberMe,
			formData.captcha,
			actions.setStatus,
		);
		actions.setSubmitting(false);
		actions.resetForm({ values: { email: '', password: '', captcha: '' } });
	};

	if (isAuth) {
		return <Navigate to={'/profile'} />;
	}

	return (
		<div className={styles.wrapper}>
			<Formik
				initialValues={{ login: '', password: '', rememberMe: false, captcha: '' }}
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
							<label htmlFor="email">Email</label>
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
							<label htmlFor="password">Пароль</label>
							{errors.password && touched.password ? (
								<p className={styles.errorData}>{errors.password}</p>
							) : null}
						</div>

						{captchaUrl && (
							<div className={styles.captcha}>
								<img src={captchaUrl} alt="" />
								<Field
									type="text"
									name="captcha"
									placeholder="Введите символы с картинки"
									required
								/>
							</div>
						)}

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
		captchaUrl: state.auth.captchaUrl,
	};
};

export default connect(mapStateToProps, { login })(Login);
