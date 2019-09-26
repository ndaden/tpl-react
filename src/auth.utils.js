import { useState, useEffect } from 'react';
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
    const res = axios(options).then((data) => {
        return { ...data };
    })
    .catch(() => {
        return { isAuthenticated: false };
    });

    return res;
};

export const useAuthentication = () => {
    const [user, setuser] = useState({});

    useEffect(() => {
        async function getSession() {
            const result = await isAuthenticated();
            setuser(result.data);
        }
        getSession();
    }, []);

    if (user === undefined) {
        return { isAuthenticated: false };
    }
    return user;
};
