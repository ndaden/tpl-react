import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
    Page1,
    NavBar,
    SignIn,
    SignUp,
} from './components';

const Index = () => (
    <div>
        Hello World
            <nav><Link to="/page1">Go to Page 1</Link></nav>
    </div>
);

const Toto = ({ match = {} }) => (
    <div>
        Stuff=
               {JSON.stringify(match)}
    </div>
);

const App = () => (
    <Router>
        <NavBar />
        <Route path="/" exact component={Index} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/page1" component={Page1} />
        <Route path="/toto" exact component={Toto} />
        <Route path="/toto/:id/:name" component={Toto} />
    </Router>
);

export default App;
