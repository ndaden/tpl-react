import React, { useContext, useEffect } from 'react';
import {
    Formik,
    Form,
    Field,
} from 'formik';

import { UserContext } from '../providers/UserContextProvider';

const Profile = () => {
    const userContext = useContext(UserContext);
    const { user } = userContext;

    const submitProfilePicture = (values) => {
        const formData = new FormData();
        formData.append('avatar', values.avatar);
        user.uploadProfilePicture(localStorage.getItem('token'), formData);
    };

    const AutoSubmitForm = ({ values, submitForm }) => {
        useEffect(() => {
            submitForm();
        }, [values, submitForm]);

        return null;
    };

    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-one-third">
                        <div className="content">
                            <figure className="image is-128x128">
                                <img className="is-rounded" alt="profile" src="" />
                            </figure>
                            <Formik
                              initialValues={{ avatar: null }}
                              onSubmit={submitProfilePicture}>
                                {({ setFieldValue, values, submitForm }) => (
                                    <div>
                                    <Form autoComplete="off">
                                        <div className="field">
                                            <div className="file is-primary">
                                                <label className="file-label">

                                                    <Field name="avatar">
                                                        {() => (
                                                            <input
                                                              name="avatar"
                                                              className="file-input"
                                                              type="file"
                                                              onChange={(event) => {
                                                                setFieldValue('avatar', event.target.files[0]);
                                                              }} />
                                                        )}
                                                    </Field>
                                                    <span className="file-cta">
                                                        <span className="file-icon">
                                                            <i className="fas fa-upload"> </i>
                                                        </span>
                                                        <span className="file-label">
                                                            Choisir une image…
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </Form>
                                    <AutoSubmitForm values={values} submitForm={submitForm} />
                                    </div>
                                )}
                            </Formik>
                        </div>
                    </div>
                    <div className="column">
                        <div className="content">
                            <p>Nom d&apos;utilisateur : {`${user.data.username}`}</p>
                            <p>Adresse e-mail : {`${user.data.email}`}</p>
                            <p>Mot de passe : <a href="/">Modifier</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
