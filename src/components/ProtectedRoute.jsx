import React from 'react';
import { Route } from 'react-router-dom';
import { useAuthentication } from '../auth.utils';
import SignIn from './SignIn';

const ProtectedRoute = (props) => {
    const user = useAuthentication();
    if (user.isAuthenticated) {
        return <Route {...props} />;
    }
    return <Route {...props} component={SignIn} />;
};

export default ProtectedRoute;
