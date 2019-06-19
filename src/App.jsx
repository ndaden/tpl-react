import React, { useState } from 'react';
import { connect } from 'react-redux';

import { simpleAction } from './actions/simpleAction';
import { searchPerson } from './actions/dataActions';

const App = (props) => {
    const [count, setCount] = useState(0);
    const { dispatch, person: { isSearching, person: { hits: { hits } = {} } = {} } = {} } = props;

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
            <h1>
                Counter :
            {count}
            </h1>
            <p>
                {isSearching && 'Loading ...'}
                {hits && hits.map(hit => (
                    JSON.stringify(hit._source.message)
                ))}
            </p>
            <button onClick={handleClickPlus}>+</button>
            <button onClick={handleClickMoins}>-</button>
            <button onClick={handleClickbtn}>SIMPLE ACTION</button>
            <button onClick={search}>ELASTICSEARCH</button>
            <pre>{JSON.stringify(props)}</pre>
        </div>
    );
};

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(App);
