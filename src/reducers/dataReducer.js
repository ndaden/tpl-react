import * as Constants from '../actions/constants';

export default (state = {}, action) => {
    switch (action.type) {
        case Constants.START_SEARCH_PERSON:
            return {
                ...state,
                isSearching: true,
            };
        case Constants.SEARCH_PERSON_OK:
            return {
                ...state,
                isSearching: false,
                person: action.person,
            };
        case Constants.SEARCH_PERSON_KO:
            return {
                ...state,
                isSearching: false,
                error: action.error,
            };
        default:
            return state;
    }
};
