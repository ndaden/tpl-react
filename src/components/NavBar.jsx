import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthentication } from '../auth.utils';

const NavBar = () => {
    const [active, setActive] = useState(false);
    const toggleBurger = () => setActive(!active);
    const user = useAuthentication();

    return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <Link className="navbar-item" to="/">
                ReactJS Template
            </Link>
        <a role="button" className={`navbar-burger burger ${active ? 'is-active' : ''}`} aria-label="menu" aria-expanded="true" data-target="nvmenu" onClick={toggleBurger}>
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
        </a>
        </div>

        <div className={`navbar-menu ${active ? 'is-active' : ''}`} id="nvmenu">
            <div className="navbar-start">
                <Link className="navbar-item" to="/">
                    Home
                </Link>
                <Link className="navbar-item" to="/toto">
                    Toto
                </Link>

                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">Autres</a>
                    <div className="navbar-dropdown">
                        <Link className="navbar-item" to="">Truc</Link>
                        <Link className="navbar-item" to="">Autre Truc</Link>
                    </div>
                </div>
            </div>
            <div className="navbar-item is-centered is-bold has-text-white has-text-weight-bold">Bonjour {user && user.username}</div>

            <div className="navbar-end">
            {
                (user.isAuthenticated)
                && (
                <Link className="navbar-item" to="/elastictool">
                    ElasticSearch Admin
                </Link>
                )
            }
                <div className="navbar-item">
                    {
                        (!user.isAuthenticated)
                        && (
                        <div className="buttons">
                        <Link className="button is-primary" to="/signup">Créer un compte</Link>
                        <Link className="button is-light" to="/signin">Se connecter</Link>
                        </div>
                        )
                    }
                    {
                        (user.isAuthenticated)
                        && (
                        <div className="buttons">
                        <Link className="button is-primary is-inverted is-outlined" to="/logout">Se Déconnecter</Link>
                        </div>
                        )
                    }
                </div>
                <div className="navbar-item">
                    <div className="tags has-addons are-normal">
                            <span className="tag">version</span>
                            <span className="tag is-black">0.1</span>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    );
};

export default NavBar;
