import styles from './Login.module.css';
import { Formik, Form, Field, connect } from 'formik';
import { login } from '../../redux/authReducer';

const usersLoginFormValidate = (values) => {
	const errors = {};
	return errors;
};

const Login = (props) => {
	const submit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.form}>
				<Formik
					initialValues={{ login: '', password: '', rememberMe: false }}
					validate={usersLoginFormValidate}
					onSubmit={submit}
				>
					<Form>
						<legend>LOGIN</legend>
						<Field type="text" name="email" placeholder="login" />
						<Field type="text" name="password" placeholder="password" />
						<label className={styles.checkbox}>
							<Field type="checkbox" name="rememberMe" />
							remember me
						</label>
						<button type="submit">Login</button>
					</Form>
				</Formik>
			</div>
		</div>
	);
};

export default connect(null, { login })(Login);
