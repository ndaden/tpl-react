import React, { useState } from 'react';
import { connect } from 'react-redux';

import { simpleAction } from './actions/simpleAction';
import { searchPerson } from './actions/dataActions';

const App = (props) => {
    const [count, setCount] = useState(0);
    const {
        dispatch,
        person: { isSearching, person: { hits: { hits } = {} } = {}, error: { message } = {} } = {},
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

    const search = () => {
        dispatch(searchPerson({
            index: 'twitter',
        }));
    };

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
                            <button className="button is-primary" onClick={search}>ElasticSearch Test</button>
                        </div>
                        <div className="column">
                            <div className="notification is-primary">
                                <button className="delete"> </button>
                                Counter :
                                {count}
                                <p>
                                    {isSearching && 'Loading ...'}
                                    {hits && hits.map(hit => (
                                        // eslint-disable-next-line no-underscore-dangle
                                        JSON.stringify(hit._source.message)
                                    ))}
                                    {message}
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

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(App);
