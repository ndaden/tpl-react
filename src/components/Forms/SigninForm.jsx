import React from 'react';
import { connect } from 'react-redux';
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
} from 'formik';

import {
    login,
} from '../../actions/authActions';

import SignInSchema from './ValidationSchemas/SignInSchema';
import NotificationCard from './NotificationCard';

const SignupForm = (props) => {
    const {
        dispatch,
        isLogingIn,
        toto,
        auth: { data: { message, success, token } = {} } = {},
     } = props;
    const submitSignInForm = (values) => {
        dispatch(login(values));
    };

    return (
    <section className="section">
        {success && localStorage.setItem('token', token)}
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
            {message !== undefined
            && (
                <NotificationCard type={`${success ? 'success' : 'error'}`} title={`${success ? 'Felicitations' : 'Attention'}`} body={message} />
                )}
            </div>
            </div>
        </div>
        {console.log(toto)}
    </section>
    );
};

const mapStateToProps = state => ({
    isLogingIn: state.auth.isLogingIn,
    auth: state.auth.result,
    toto: state.auth.result,
});

export default connect(mapStateToProps)(SignupForm);
