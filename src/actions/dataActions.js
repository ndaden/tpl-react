import * as Constants from './constants';
import {
    ping,
    search,
    addDocument,
    createIndex,
    deleteAll,
    deleteDocument,
} from '../elasticsearch/init';

// ElasticSearch management methods

const startRequest = () => ({
    type: Constants.START_REQUEST,
});

const requestOk = result => ({
    type: Constants.REQUEST_OK,
    result,
});

const requestKo = error => ({
    type: Constants.REQUEST_KO,
    error,
});

// API Calls
const Ping = () => (
    (dispatch) => {
        dispatch(startRequest());
        ping().then(body => dispatch(requestOk(body)), error => dispatch(requestKo(error)));
    }
);

const CreateIndex = indexName => (
    (dispatch) => {
        dispatch(startRequest());
        createIndex(indexName)
            .then(body => dispatch(requestOk(body)),
                error => dispatch(requestKo(error)));
    }
);

const CreateDocument = (indexName, _id, docType, payload) => (
    (dispatch) => {
        dispatch(startRequest());
        addDocument(indexName, _id, docType, payload)
            .then(body => dispatch(requestOk(body)),
                error => dispatch(requestKo(error)));
    }
);

const SearchDocument = (index, docType, payload) => (
    (dispatch) => {
        dispatch(startRequest());
        search(index, docType, payload)
            .then(body => dispatch(requestOk(body)),
                error => dispatch(requestKo(error)));
    }
);

const DeleteDocument = (index, _id, docType) => (
    (dispatch) => {
        dispatch(startRequest());
        return deleteDocument(index, _id, docType)
            .then(body => dispatch(requestOk(body)),
                error => dispatch(requestKo(error)));
    }
);

const DeleteEverything = () => (
    (dispatch) => {
        dispatch(startRequest());
        deleteAll()
            .then(body => dispatch(requestOk(body)),
                error => dispatch(requestKo(error)));
    }
);

export {
    Ping,
    CreateIndex,
    CreateDocument,
    SearchDocument,
    DeleteDocument,
    DeleteEverything,
};
