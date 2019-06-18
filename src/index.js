import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

import App from './App';
const root = document.getElementById('root');

const render = (Component) => {
    ReactDOM.render(
        <Provider store={configureStore()}>
            <Component />
        </Provider>,
        root
    );
};

render(App);