import React, { useReducer } from 'react';
import { isAuthenticated } from '../auth.utils';

const UserContext = React.createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case 'IS_AUTHENTICATED':
            return {
                ...state,
                result: action.result,
            };
        default:
            return state;
    }
};

const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {});

    isAuthenticated().then((result) => {
        dispatch({
            type: 'IS_AUTHENTICATED',
            result });
    });
    return (
        <UserContext.Provider value={{ ...state }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
