import React, { useContext } from 'react';
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
import { UserContext } from './providers/UserContextProvider';

const Index = () => {
    return (
        <div>
            <p>Bonjour tu es dans la page Index</p>
            <span className="fa fa-spinner"> </span>
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
    const userContext = useContext(UserContext);
    const { isLoading } = userContext;
    if (isLoading) {
        return <h1>Loading... if the page does not display, please Reload</h1>;
    }
    return (
        <Router>
            <NavBar />
            <Route path="/elastictool" component={ElasticTool} />
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
