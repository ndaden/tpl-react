import React, { useContext } from 'react';
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
} from 'formik';

import ActivationSchema from './ValidationSchemas/ActivationSchema';
import NotificationCard from './NotificationCard';

import { UserContext } from '../../providers/UserContextProvider';

const ActivationForm = () => {
    const userContext = useContext(UserContext);

    const { isLoading, user } = userContext;

    const submitActivationCode = (values) => {
        user.activate(values);
        console.log(user);
    };

    return (
    <section className="section">
    <div className="container">
        <div className="columns">
        <div className="column">
            <Formik
              initialValues={{ email: user.data.email, activationCode: '' }}
              validationSchema={ActivationSchema}
              onSubmit={submitActivationCode}>
                {({ errors, touched }) => (
                    <Form autoComplete="off">
                        <div className="field">
                            <label className="label">Code d&acute;activation</label>
                            <div className="control">
                                <Field type="text" className={`input ${errors.activationCode && touched.activationCode ? 'is-danger' : ''}`} name="activationCode" />
                            </div>
                            <ErrorMessage name="activationCode" className="help is-danger" component="p" />
                        </div>

                        <button type="submit" className="button is-success" disabled={isLoading}>
                            Activer mon compte
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
        <div className="column">
        {user.activationData && user.activationData.message !== undefined
        && (
            <NotificationCard type={`${user.activationData.success ? 'success' : 'error'}`} title={`${user.activationData.success ? 'Felicitations' : 'Attention'}`} body={user.activationData.message} />
            )}
        </div>
        </div>
    </div>
    </section>
);
};

export default ActivationForm;
