import React, { useReducer, useEffect } from 'react';
import { isAuthenticated, handleLogin, activateAccount } from '../auth.utils';
import authReducer from '../reducers/authReducer';

const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, { isLoading: true });

    const checkAuth = (p) => {
        useEffect(
            () => {
                isAuthenticated().then((result) => {
                    dispatch({
                        type: 'IS_AUTHENTICATED',
                        result: result.data,
                    });
                });
            }, [p],
        );
    };

    const login = (values) => {
        handleLogin(values).then((result) => {
            if (result.data.success) {
                localStorage.setItem('token', result.data.token);
            }
            dispatch({
                type: 'LOGIN_OK',
                result: result.data,
            });
        });
    };

    const activate = (values) => {
        activateAccount(values).then((result) => {
            dispatch({
                type: 'ACTIVATION_OK',
                result,
            });
        });
    };

    const logout = () => {
        localStorage.removeItem('token');
        dispatch({
            type: 'LOGIN_OK',
            result: {},
        });
    };

    checkAuth();

    const sharedState = {
        ...state,
        user: {
            ...state.user,
            activationData: state.activationData,
            handleLogin: login,
            logout,
            checkAuth,
            activate },
    };

    return (
        <UserContext.Provider value={sharedState}>
            {children}
        </UserContext.Provider>
    );
};

const UserContextConsumer = UserContext.Consumer;

export { UserContextProvider, UserContextConsumer, UserContext };
