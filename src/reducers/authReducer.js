import * as Constants from '../actions/constants';

export default (state = {}, action) => {
    switch (action.type) {
        case Constants.START_LOGIN:
            return {
                ...state,
                isLoading: true,
            };
        case Constants.LOGIN_OK:
            return {
                ...state,
                isLoading: false,
                loginData: action.result,
            };
        case Constants.LOGIN_KO:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };
        case Constants.IS_AUTHENTICATED:
            return {
                ...state,
                isLoading: false,
                user: action.result,
            };
        case Constants.ACTIVATION_OK:
            return {
                ...state,
                isLoading: false,
                activationData: action.result.data,
            };
        default:
            return state;
    }
};
