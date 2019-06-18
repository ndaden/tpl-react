import React, { useState } from 'react';
import { connect } from 'react-redux';

import { simpleAction } from './actions/simpleAction';

const App = ({ dispatch, ...props }) => {
    const [count, setCount] = useState(0);

    const handleClickPlus = () => {
        setCount(count + 1);
    };

    const handleClickMoins = () => {
        setCount(count - 1);
    };

    const handleClickbtn = () => {
        dispatch(simpleAction());
    };

    return (
        <div>
            <h1>
            Counter :
            { count }
            </h1>
            <button onClick={handleClickPlus}>+</button>
            <button onClick={handleClickMoins}>-</button>
            <button onClick={handleClickbtn}>SIMPLE ACTION</button>
            <pre>{JSON.stringify(props)}</pre>
        </div>
    );
};

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(App);
