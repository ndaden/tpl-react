import React from 'react';
import { Redirect } from 'react-router-dom';

const SignOut = (props) => {
    const { user } = props;
    user.logout();
    user.checkAuth();
    return <Redirect to="/" />;
};

export default SignOut;
