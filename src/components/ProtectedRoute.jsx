import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthentication } from '../auth.utils';

const ProtectedRoute = (props) => {
    const user = useAuthentication();
    if (user && user !== 'Unauthorized') {
        return <Route {...props} />;
    }
    return <Redirect to="/signin" />;
};

export default ProtectedRoute;
