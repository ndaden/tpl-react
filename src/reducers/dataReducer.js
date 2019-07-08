import * as Constants from '../actions/constants';

export default (state = {}, action) => {
    switch (action.type) {
        case Constants.START_REQUEST:
            return {
                isSearching: true,
            };
        case Constants.REQUEST_OK:
            return {
                isSearching: false,
                result: action.result,
            };
        case Constants.REQUEST_KO:
            return {
                isSearching: false,
                error: action.error,
            };
        default:
            return state;
    }
};
