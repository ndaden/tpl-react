import React from 'react';
import { Redirect } from 'react-router-dom';

const SignOut = () => {
    localStorage.removeItem('token');
    window.location = '/';
    return <Redirect to="/" />;
};

export default SignOut;
