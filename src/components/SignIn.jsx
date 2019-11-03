import React from 'react';
import { Redirect } from 'react-router-dom';
import SigninForm from './Forms/SigninForm';

const SignIn = ({ loginData,
                  checkAuth,
                  handleLogin,
                  result: {
                      data: { isAuthenticated } = { isAuthenticated: false } } = {} } = {}) => {
    if (isAuthenticated) {
        return <Redirect to="/" />;
    }
    return (
        <SigninForm
          handleLogin={handleLogin}
          checkAuth={checkAuth}
          loginData={loginData}
          isAuthenticated={isAuthenticated} />
    );
};

export default SignIn;
