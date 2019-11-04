import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
    ElasticTool,
    NavBar,
    SignIn,
    SignUp,
    SignOut,
    Footer,
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
    const { isLoading } = props;
    if (isLoading) {
        return <h1>Loading... if the page does not display, please Reload</h1>;
    }
    return (
        <Router>
            <NavBar {...props} />
            <Route path="/elastictool" render={() => <ElasticTool {...props} />} />
            <Route path="/" exact component={Index} />
            <Route path="/signin" render={() => <SignIn {...props} />} />
            <Route path="/signup" render={() => <SignUp {...props} />} />
            <Route path="/logout" render={() => <SignOut {...props} />} />
            <Route path="/toto" exact component={Toto} />
            <Route path="/toto/:id/:name" component={Toto} />
            <Route path="/error" component={Error} />
            <Footer />
        </Router>
    );
};

export default App;
