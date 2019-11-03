import React from 'react';
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
} from 'formik';

import SignInSchema from './ValidationSchemas/SignInSchema';
import NotificationCard from './NotificationCard';

const SignupForm = (props) => {
    const {
        isLogingIn,
        handleLogin,
        loginData,
        checkAuth,
     } = props;

    const submitSignInForm = (values) => {
        handleLogin(values);
    };

    checkAuth(loginData);
    return (
    <section className="section">
    {console.log(loginData)}
        <div className="container">
            <div className="columns">
            <div className="column">
                <Formik
                  initialValues={{ username: '', password: '' }}
                  validationSchema={SignInSchema}
                  onSubmit={submitSignInForm}>
                    {({ errors, touched }) => (
                        <Form autoComplete="off">
                            <div className="field">
                                <label className="label">Nom d&apos;utilisateur<span> *</span></label>
                                <div className="control">
                                    <Field type="text" className={`input ${errors.username && touched.username ? 'is-danger' : ''}`} name="username" />
                                </div>
                                <ErrorMessage name="username" className="help is-danger" component="p" />
                            </div>

                            <div className="field">
                                <label className="label">Mot de passe</label>
                                <div className="control">
                                    <Field type="password" className={`input ${errors.password && touched.password ? 'is-danger' : ''}`} name="password" />
                                </div>
                                <ErrorMessage name="password" className="help is-danger" component="p" />
                            </div>

                            <button type="submit" className="button is-success" disabled={isLogingIn}>
                                Se connecter
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
            <div className="column">
            {loginData && loginData.data.message !== undefined
            && (
                <NotificationCard type={`${loginData.data.success ? 'success' : 'error'}`} title={`${loginData.data.success ? 'Felicitations' : 'Attention'}`} body={loginData.data.message} />
                )}
            </div>
            </div>
        </div>
    </section>
    );
};

export default SignupForm;
