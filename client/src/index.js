import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = "dev-u82jk458.us.auth0.com"
const clientId = "MQcU04Hk8L6we5nCo2ftLPEiyvAJCuH6"

ReactDOM.render(
    <Auth0Provider 
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}>
        <App />
    </Auth0Provider>, 
    document.getElementById('root')
);

