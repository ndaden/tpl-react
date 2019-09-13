import axios from 'axios';
import * as config from './config';

export const isAuthenticated = () => {
    const jwt = localStorage.getItem('token');
    let options = {};
    if (jwt) {
        options = {
            method: 'GET',
            headers: { Authorization: `Bearer ${jwt}` },
            url: `${config.API_URI}${config.API_AUTH}`,
        };
    } else {
        options = {
            method: 'GET',
            url: `${config.API_URI}${config.API_AUTH}`,
        };
    }

    return axios(options)
        .then(response => ({ success: true, data: response.data }))
        .catch((error) => {
            localStorage.removeItem('token');
            return { success: false, data: error.response.data };
        });
};
