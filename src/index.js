import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import axios from 'axios';


//seeing requests globally.
axios.interceptors.request.use(request => {
    console.log(request);
    //you always need to return request or else you will block it.
    return request;
    //error handler in the case of no internet etc.
}, error => {
    console.log(error);
    return Promise.reject(error);
});


//seeing reponses globablly.
axios.interceptors.response.use(response => {
    console.log(response);
    //you always need to return request or else you will block it.
    return response;
    //error handler in the case of no internet etc.
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
