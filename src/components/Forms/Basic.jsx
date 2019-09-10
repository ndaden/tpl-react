import React from 'react';
import axios from 'axios';
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
    } from 'formik';
import SignUpSchema from './ValidationSchemas/SignUpSchema';

const apiUri = process.env.API_URI;
const apiUsers = process.env.API_USERS;

const Basic = () => (
    <div>
        <Formik
          initialValues={{ username: '', email: '', password: '' }}
          validationSchema={SignUpSchema}
          onSubmit={
                (values, { setSubmitting }) => {
                    axios.post(`${apiUri}${apiUsers}`, values)
                    .then((response) => {
                        setSubmitting(false);
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
       }>
       {({ isSubmitting, errors, touched }) => (
        <Form>
            <div className="field">
            <label className="label">Nom d&apos;utilisateur<span> *</span></label>
            <div className="control">
            <Field type="text" className={`input ${errors.username && touched.username ? 'is-danger' : ''}`} name="username" />
            </div>
            <ErrorMessage name="username" className="help is-danger" component="p" />
            </div>

            <div className="field">
            <label className="label">E-mail</label>
            <div className="control">
            <Field type="text" className={`input ${errors.email && touched.email ? 'is-danger' : ''}`} name="email" />
            </div>
            <ErrorMessage name="email" className="help is-danger" component="p" />
            </div>

            <div className="field">
            <label className="label">Mot de passe</label>
            <div className="control">
            <Field type="password" className={`input ${errors.password && touched.password ? 'is-danger' : ''}`} name="password" />
            </div>
            <ErrorMessage name="password" className="help is-danger" component="p" />
            </div>

            <button type="submit" className="button is-success" disabled={isSubmitting}>
            Envoyer
            </button>
        </Form>
       )}
        </Formik>
    </div>
);

export default Basic;
