import React, { useReducer, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import App from './App';
import './style.scss';
import { isAuthenticated, handleLogin } from './auth.utils';
import authReducer from './reducers/authReducer';


const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {});

    const checkAuth = (p) => {
        useEffect(
            () => {
                isAuthenticated().then((result) => {
                dispatch({
                    type: 'IS_AUTHENTICATED',
                    result });
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
                result });
        });
    };

    checkAuth();

    return (
        <UserContext.Provider value={{ ...state, handleLogin: login, checkAuth }}>
            {children}
        </UserContext.Provider>
    );
};

const render = (Component) => {
    ReactDOM.render(
        <UserContextProvider>
            <UserContext.Consumer>
            { props => (
                <Provider store={configureStore()}>
                    <Component {...props} />
                </Provider>
                )
            }
            </UserContext.Consumer>
        </UserContextProvider>,
        document.getElementById('root'),
        );
};

render(App);
