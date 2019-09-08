import React from 'react';
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
    } from 'formik';
import SignUpSchema from './ValidationSchemas/SignUpSchema';

const Basic = () => (
    <div>
        <Formik
          initialValues={{ firstname: '', lastname: '', email: '', phonenumber: '06 ' }}
          validationSchema={SignUpSchema}
          onSubmit={
                (values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values));
                        setSubmitting(false);
                    }, 400);
            }
       }>
       {({ isSubmitting, errors, touched }) => (
        <Form>
            <div className="field">
            <label className="label">Prénom <span> *</span></label>
            <div className="control">
            <Field type="text" className={`input ${errors.firstname && touched.firstname ? 'is-danger' : ''}`} name="firstname" />
            </div>
            <ErrorMessage name="firstname" className="help is-danger" component="p" />
            </div>
            <div className="field">
            <label className="label">Nom</label>
            <div className="control">
            <Field type="text" className={`input ${errors.lastname && touched.lastname ? 'is-danger' : ''}`} name="lastname" />
            </div>
            <ErrorMessage name="lastname" className="help is-danger" component="p" />
            </div>

            <div className="field">
            <label className="label">E-mail</label>
            <div className="control">
            <Field type="text" className={`input ${errors.email && touched.email ? 'is-danger' : ''}`} name="email" />
            </div>
            <ErrorMessage name="email" className="help is-danger" component="p" />
            </div>

            <div className="field">
            <label className="label">Téléphone</label>
            <div className="control">
            <Field type="text" className={`input ${errors.phonenumber && touched.phonenumber ? 'is-danger' : ''}`} name="phonenumber" />
            </div>
            <ErrorMessage name="phonenumber" className="help is-danger" component="p" />
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
