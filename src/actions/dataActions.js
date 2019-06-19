import * as Constants from './constants';
import client, {ping} from '../elasticsearch/init';

const startSearchPerson = () => {
    return {
        type: Constants.START_SEARCH_PERSON
    };
};

const searchPersonOk = (person) => {
    return {
        type: Constants.SEARCH_PERSON_OK,
        person,
    };
};

const searchPersonKo = (error) => {
    return {
        type: Constants.SEARCH_PERSON_KO,
        error,
    };
};

export const searchPerson = (query) => {
    return (dispatch) => {
        dispatch(startSearchPerson());
        ping();

        return client.search(query)
                    .then((body) => dispatch(searchPersonOk(body)),
                    (error) => dispatch(searchPersonKo(error)));
    }
};