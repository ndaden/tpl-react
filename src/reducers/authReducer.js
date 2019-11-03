import * as Constants from '../actions/constants';

export default (state = {}, action) => {
    switch (action.type) {
        case Constants.START_LOGIN:
            return {
                ...state,
                isLogingIn: true,
            };
        case Constants.LOGIN_OK:
            return {
                ...state,
                isLogingIn: false,
                loginData: action.result,
            };
        case Constants.LOGIN_KO:
            return {
                ...state,
                isLogingIn: false,
                error: action.error,
            };
        case Constants.IS_AUTHENTICATED:
            return {
                ...state,
                isLogingIn: false,
                result: action.result,
            };
        default:
            return state;
    }
};
