import React, { useState } from 'react';
import {
    Formik,
    Form,
    Field,
} from 'formik';
import axios from 'axios';

import * as config from '../config';

const ImageReader = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [ocr, setOcr] = useState([]);

    const submitImageToOcr = (values) => {
        setIsLoading(true);
        const formData = new FormData();
        formData.append('image', values.image);
        axios.post(`${config.API_URI}${config.API_OCR}`, formData).then((result) => {
            setIsLoading(false);
            setOcr(result.data.result);
        });
    };

    return (
        <section className="section">
            <div>
                <Formik
                  initialValues={{ image: null }}
                  onSubmit={submitImageToOcr}>
                    {({ setFieldValue }) => (
                        <div>
                            <Form autoComplete="off">
                                <div className="field">
                                    <div className="file is-primary">
                                        <label className="file-label">
                                            <Field name="avatar">
                                                {() => (
                                                    <input
                                                      name="image"
                                                      className="file-input"
                                                      type="file"
                                                      onChange={(event) => {
                                                            setFieldValue('image', event.target.files[0]);
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
                                <div className="field">
                                    <button type="submit" className="button is-success">Envoyer</button>
                                </div>
                            </Form>
                        </div>
                    )}
                </Formik>
            </div>
            <div>
                {isLoading && <progress className="progress is-danger" max="100">30%</progress>}
                {ocr.length > 0
                    && (
                        <article className="message">
                            <div className="message-header">
                                <p>Resultat</p>
                            </div>
                            <div className="message-body">
                                {ocr.map((line, i) => (
                                    <p key={i.toString()}>{line}</p>
                                ))}
                            </div>
                        </article>
                    )}
            </div>
        </section>
    );
};

export default ImageReader;
