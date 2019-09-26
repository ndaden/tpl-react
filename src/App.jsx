import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
    ElasticTool,
    NavBar,
    SignIn,
    SignUp,
    SignOut,
    Footer,
    ProtectedRoute,
    Error,
} from './components';
import { useAuthentication } from './auth.utils';

const Index = () => {
    const user = useAuthentication();
    return (
        <div>
        <p>{user.isAuthenticated ? `Bonjour ${user.data.username} - ${user.data.email}` : 'Bonjour invité,'}</p>
        <nav><Link to="/page1">Go to Page 1</Link></nav>
        </div>
    );
};

const Toto = ({ match = {} }) => (
    <div>
        Stuff=
               {JSON.stringify(match)}
    </div>
);

const App = () => {
    return (
        <Router>
        <NavBar />
        <ProtectedRoute path="/elastictool" component={ElasticTool} />
        <Route path="/" exact component={Index} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/logout" component={SignOut} />
        <Route path="/toto" exact component={Toto} />
        <Route path="/toto/:id/:name" component={Toto} />
        <Route path="/error" component={Error} />
        <Footer />
        </Router>
    );
};

export default App;
