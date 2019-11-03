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

const Index = () => {
    return (
        <div>
        <p>Bonjour tu es dans la page Index</p>
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

const App = (props) => {
    return (
            <Router>
                <NavBar {...props} />
                <ProtectedRoute path="/elastictool" component={ElasticTool} {...props} />
                <Route path="/" exact component={Index} />
                <Route path="/signin" render={() => <SignIn {...props} />} />
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
