import React from 'react';
import { Route } from 'react-router-dom';

import SignIn from './SignIn';

const ProtectedRoute = (props) => {
    const { user } = props;
    if (user.isAuthenticated) {
        return <Route {...props} />;
    }
    return <Route render={() => <SignIn {...props} />} />;
};

export default ProtectedRoute;
