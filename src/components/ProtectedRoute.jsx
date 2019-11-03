import React from 'react';
import { Route } from 'react-router-dom';

import SignIn from './SignIn';

const ProtectedRoute = ({ result:
                { data: { isAuthenticated } = { isAuthenticated: false } } = {},
                 ...props } = {}) => {
    if (isAuthenticated) {
        return <Route {...props} />;
    }
    return <Route {...props} component={SignIn} />;
};

export default ProtectedRoute;
