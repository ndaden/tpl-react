import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
const root = document.getElementById('root');

const render = (Component) => {
    ReactDOM.render(
        <Component/>,
        root
    );
};

render(App);