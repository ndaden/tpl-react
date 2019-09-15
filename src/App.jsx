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
} from './components';
import { useAuthentication } from './auth.utils';

const Index = () => {
    const user = useAuthentication();
    return (
        <div>
        <p>{user === 'Unauthorized' ? 'Bonjour invité,' : `Bonjour ${user.username} - ${user.email}`}</p>
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
        <Route path="/" exact component={Index} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/logout" component={SignOut} />
        <ProtectedRoute path="/elastictool" component={ElasticTool} />
        <Route path="/toto" exact component={Toto} />
        <Route path="/toto/:id/:name" component={Toto} />
        <Footer />
        </Router>
    );
};

export default App;
