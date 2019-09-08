import React from 'react';
import Basic from './Forms/Basic';

const SignIn = () => {
    console.log('begin');
    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <div className="field">
                            <p className="control has-icons-left">
                                <input className="input" type="email" placeholder="Email" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope" />
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control has-icons-left">
                                <input className="input" type="password" placeholder="Mot de passe" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-lock" />
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control">
                                <button className="button is-success">Créer mon compte</button>
                            </p>
                        </div>
                    </div>
                    <div className="column">
                        <Basic />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SignIn;
