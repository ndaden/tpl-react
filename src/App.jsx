import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
    ElasticTool,
    NavBar,
    SignIn,
    SignUp,
    Footer,
} from './components';
import { isAuthenticated } from './auth.utils.js';

const Index = ({ authenticatedUser }) => (
    <div>
        {authenticatedUser.username ? `Bonjour ${authenticatedUser.username}, votre email est : ${authenticatedUser.email}` : 'Connectez vous !' }
            <nav><Link to="/page1">Go to Page 1</Link></nav>
    </div>
);

const Toto = ({ match = {} }) => (
    <div>
        Stuff=
               {JSON.stringify(match)}
    </div>
);

const App = () => {
    let user = {};

    useEffect(() => {
        function toto() {
            isAuthenticated().then((res) => { user = res.data; });
        }
        toto();
    });

    return (
        <Router>
        <NavBar authenticatedUser={user} />
        <Route path="/" exact component={() => <Index authenticatedUser={user} />} />
        <Route path="/signin" component={SignIn} authenticatedUser={user} />
        <Route path="/signup" component={SignUp} authenticatedUser={user} />
        <Route path="/elastictool" component={ElasticTool} authenticatedUser={user} />
        <Route path="/toto" exact component={Toto} authenticatedUser={user} />
        <Route path="/toto/:id/:name" component={Toto} authenticatedUser={user} />
        <Footer />
        </Router>
    );
};

export default App;
