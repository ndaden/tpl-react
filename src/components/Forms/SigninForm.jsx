import React, { useState } from 'react';
import axios from 'axios';
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
} from 'formik';
import * as config from '../../config';
import SignInSchema from './ValidationSchemas/SignInSchema';
import NotificationCard from './NotificationCard';

const SignupForm = () => {
    const [result, setresult] = useState(undefined);

    return (
    <section className="section">
        <div className="container">
            <div className="columns">
            <div className="column">
                <Formik
                  initialValues={{ username: '', password: '' }}
                  validationSchema={SignInSchema}
                  onSubmit={
                        (values, { setSubmitting }) => {
                            axios.post(`${config.API_URI}${config.API_AUTH}`, values)
                                .then((response) => {
                                    setSubmitting(false);
                                    localStorage.setItem('token', response.data.token);
                                    setresult(response.data);
                                    setTimeout(() => { window.location = '/'; }, 2000);
                                })
                                .catch((error) => {
                                    setSubmitting(false);
                                    setresult(error.response.data);
                                });
                        }
                    }>
                    {({ isSubmitting, errors, touched }) => (
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

                            <button type="submit" className="button is-success" disabled={isSubmitting}>
                                Se connecter
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
            <div className="column">
            {result
            && (
                <NotificationCard type={`${result.success ? 'success' : 'error'}`} title={`${result.success ? 'Felicitations' : 'Attention'}`} body={result.message} />
                )}
            </div>
            </div>
        </div>
    </section>
    );
};

export default SignupForm;
