import React, { useState } from 'react';
import { connect } from 'react-redux';

import { simpleAction } from '../actions/simpleAction';
import {
    Ping,
    DeleteEverything,
    CreateIndex,
} from '../actions/dataActions';

const Page1 = (props) => {
    const [count, setCount] = useState(0);
    const [indexName, setindexName] = useState('');
    const {
        dispatch,
        isSearching,
        result,
        error,
    } = props;

    const handleClickPlus = () => {
        setCount(count + 1);
    };

    const handleClickMoins = () => {
        setCount(count - 1);
    };

    const handleClickbtn = () => {
        dispatch(simpleAction());
    };

    const pingElasticsearch = () => {
        dispatch(Ping());
    };

    const purgeElasticsearch = () => {
        dispatch(DeleteEverything());
    };

    const createElasticSearchIndex = (name) => {
        dispatch(CreateIndex(name));
    };
/*
    const createElasticSearchDocument = (index, payload) => {
        dispatch(CreateDocument(index, null, null, payload));
    }; */

    return (
        <div>
            <section className="section">
                <div className="container">
                    <h1 className="title">Hello World</h1>
                    <div className="columns">
                        <div className="column">
                            <button className="button is-primary" onClick={handleClickPlus}>+</button>
                            <button className="button is-primary" onClick={handleClickMoins}>-</button>
                            <button className="button is-primary" onClick={handleClickbtn}>Simple Action</button>
                            <button className="button is-primary" onClick={pingElasticsearch}>ElasticSearch Test</button>
                            <button className="button is-primary" onClick={purgeElasticsearch}>Purge Elasticsearch</button>
                            <input type="text" name="indexName" onChange={e => setindexName(e.target.value)} />
                            <button className="button is-primary" onClick={() => createElasticSearchIndex(indexName)}>Create Index</button>
                        </div>
                        <div className="column">
                            <div className="notification is-primary">
                                <button className="delete"> </button>
                                Counter :
                                {count}
                                <p>
                                    {isSearching && 'Loading ...'}
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
