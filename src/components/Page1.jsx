import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
    Ping,
    DeleteEverything,
    CreateIndex,
    CreateDocument,
    SearchDocument,
} from '../actions/dataActions';

const Page1 = (props) => {
    const [indexName, setindexName] = useState('');
    const [documentName, setdocumentName] = useState('');
    const [searchQuery, setsearchQuery] = useState('');
    const {
        dispatch,
        isSearching,
        result,
        error,
    } = props;

    const pingElasticsearch = () => {
        dispatch(Ping());
    };

    const purgeElasticsearch = () => {
        dispatch(DeleteEverything());
    };

    const createElasticSearchIndex = (name) => {
        dispatch(CreateIndex(name));
    };

    const createElasticSearchDocument = (index, payload) => {
        dispatch(CreateDocument(index, null, null, payload));
    };

    const searchElasticSearch = (index, payload) => {
        dispatch(SearchDocument(index, null, payload));
    };

    return (
        <div>
            <section className="section">
                <div className="container">
                    <h1 className="title">ElasticSearch Demo</h1>
                    <div className="level">
                        <div className="level-item">
                            <button className="button is-primary" onClick={pingElasticsearch}>Ping</button>
                        </div>
                        <div className="level-item">
                            <button className="button is-primary" onClick={purgeElasticsearch}>Purge</button>
                        </div>
                        <div className="level-item">
                            <div className="field has-addons">
                                <div className="control">
                                    <input type="text" className="input" name="indexName" onChange={e => setindexName(e.target.value)} placeholder="Index name" />
                                </div>
                                <div className="control">
                                    <button className="button is-primary" onClick={() => createElasticSearchIndex(indexName)}>New Index</button>
                                </div>
                            </div>
                        </div>
                        <div className="level-item">
                            <div className="field has-addons">
                                <div className="control">
                                    <input type="text" className="input" name="documentName" onChange={e => setdocumentName(e.target.value)} placeholder="Document name" />
                                </div>
                                <div className="control">
                                    <button className="button is-primary" onClick={() => createElasticSearchDocument(indexName, documentName)}>New Document</button>
                                </div>
                            </div>
                        </div>
                        <div className="level-item">
                            <div className="field has-addons">
                                <div className="control">
                                    <input type="text" className="input" name="searchQuery" onChange={e => setsearchQuery(e.target.value)} placeholder="Query" />
                                </div>
                                <div className="control">
                                    <button className="button is-primary" onClick={() => searchElasticSearch(indexName, searchQuery)}>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="level">
                        <div className="level-item">
                            {isSearching && <progress className="progress is-small is-dark" max="100">10%</progress>}
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <input type="text" name="indexName" onChange={e => setindexName(e.target.value)} />
                            <button className="button is-primary" onClick={() => createElasticSearchIndex(indexName)}>Create Index</button>
                        </div>
                        <div className="column">
                            <div className="notification is-primary">
                                <button className="delete"> </button>
                                <p>
                                    {result && JSON.stringify(result)}
                                    {error && JSON.stringify(error)}
                                </p>
                            </div>
                        </div>
                        <div className="column">3</div>
                        <div className="column">4</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const mapStateToProps = state => ({
    isSearching: state.data.isSearching,
    result: state.data.result,
    error: state.data.error,
});
export default connect(mapStateToProps)(Page1);
