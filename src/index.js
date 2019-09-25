import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import App from './App';
import './style.scss';


const render = (Component) => {
    ReactDOM.render(
        <Provider store={configureStore()}>
            <Component />
        </Provider>,
        document.getElementById('root'),
        );
};

render(App);
