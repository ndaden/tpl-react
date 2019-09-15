import React from 'react';
import SigninForm from './Forms/SigninForm';
import { useAuthentication } from '../auth.utils';

const SignIn = () => {
    const user = useAuthentication();
    if (user === 'Unauthorized') {
        return <SigninForm />;
    }
    return (
       <p>{`Bonjour ${user.username} - ${user.email}`}</p>
    );
};

export default SignIn;
