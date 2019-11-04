import React from 'react';
import { Redirect } from 'react-router-dom';
import SigninForm from './Forms/SigninForm';

const SignIn = (props) => {
    const { user } = props;
    if (user.isAuthenticated) {
        return <Redirect to="/" />;
    }
    return (
        <SigninForm user {...props} />
    );
};

export default SignIn;
