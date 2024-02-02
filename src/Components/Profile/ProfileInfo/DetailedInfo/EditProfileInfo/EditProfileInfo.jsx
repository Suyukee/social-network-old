import { ErrorMessage, Field, Form, Formik } from 'formik';
import styles from './EditProfileInfo.module.css';
import { ProfileEditFormValidate } from '../../../../../utils/validators/validators';
import CloseIcon from '../../../../common/Icons/CloseIcon';

const EditProfileInfo = ({ exitDetailedInfo, saveProfile, profile }) => {
	const saveChange = async (formData, actions) => {
		const result = await saveProfile(formData, actions.setStatus);
		if (result === undefined) {
			exitDetailedInfo(false);
		}
		actions.setSubmitting(false);
	};

	return (
		<div className={styles.wrapper}>
			<Formik
				initialValues={{
					fullName: profile.fullName,
					aboutMe: profile.aboutMe,
					lookingForAJob: profile.lookingForAJob,
					lookingForAJobDescription: profile.lookingForAJobDescription,
					contacts: { vk: profile.contacts.vk, github: profile.contacts.github },
				}}
				validate={ProfileEditFormValidate}
				onSubmit={saveChange}
			>
				{({ errors, touched, status }) => (
					<Form className={styles.container}>
						<div className={styles.header}>
							<legend>
								<h3>Профиль</h3>
							</legend>
							{status && status.map((error, index) => <h4 key={index}>{error}</h4>)}
							<button onClick={exitDetailedInfo} className={styles.closeButton}>
								<CloseIcon />
							</button>
						</div>

						<div className={styles.fullName}>
							<ErrorMessage name="fullName">
								{(msg) => <p className={styles.errorData}>{msg}</p>}
							</ErrorMessage>
							<label htmlFor="fullName">Имя:</label>
							<Field
								type="text"
								name="fullName"
								id="fullName"
								required
								className={errors.fullName && touched.fullName ? styles.error : null}
							/>
						</div>

						<div className={styles.aboutMe}>
							<ErrorMessage name="aboutMe">
								{(msg) => <p className={styles.errorData}>{msg}</p>}
							</ErrorMessage>
							<label htmlFor="aboutMe">О себе:</label>
							<Field
								type="text"
								name="aboutMe"
								id="aboutMe"
								required
								className={errors.aboutMe && touched.aboutMe ? styles.error : null}
							/>
						</div>

						<div className={styles.lookingForAJob}>
							<label htmlFor="lookingForAJob">В поисках работы:</label>
							<Field type="checkbox" name="lookingForAJob" id="lookingForAJob" />
						</div>
						<div className={styles.lookingForAJobDescription}>
							<ErrorMessage name="lookingForAJobDescription">
								{(msg) => <p className={styles.errorData}>{msg}</p>}
							</ErrorMessage>
							<label htmlFor="lookingForAJobDescription">Профессиональные умения:</label>
							<Field
								type="text"
								name="lookingForAJobDescription"
								id="lookingForAJobDescription"
								required
								className={
									errors.lookingForAJobDescription && touched.lookingForAJobDescription
										? styles.error
										: null
								}
							/>
						</div>

						<div className={styles.contacts}>
							<div className={styles.link}>
								<label htmlFor="vk">Ссылка на Вконтакте:</label>
								<Field type="text" name="contacts.vk" id="vk" />
							</div>
							<div className={styles.link}>
								<label htmlFor="github">Ссылка на github:</label>
								<Field type="text" name="contacts.github" id="github" />
							</div>
						</div>
						<div className={styles.saveButtonContainer}>
							<button type="submit" className={styles.saveButton}>
								Сохранить
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default EditProfileInfo;
