import React from 'react';
import SignupForm from './Forms/SignupForm';
import { useAuthentication } from '../auth.utils';

const SignIn = () => {
    useAuthentication();
    return (
        <SignupForm />
    );
};

export default SignIn;
