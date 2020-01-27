import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {
    ElasticTool,
    NavBar,
    SignIn,
    SignUp,
    SignOut,
    EditPasswordForm,
    Profile,
    Footer,
    Error404,
    TechnicalError,
    ActivationForm,
    ProtectedRoute,
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
            <Switch>
            <ProtectedRoute path="/elastictool" exact component={ElasticTool} rejectMessage="Vous devez avoir un compte actif pour acceder à cette page. pour cela saisissez le code envoyé par e-mail." />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/password" exact component={EditPasswordForm} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/activate" exact component={ActivationForm} />
            <Route path="/logout" exact component={SignOut} />
            <Route path="/toto" exact component={Toto} />
            <Route path="/toto/:id/:name" exact component={Toto} />
            <Route path="/error" exact component={TechnicalError} />
            <Route path="/" exact component={Index} />
            <Route component={Error404} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
