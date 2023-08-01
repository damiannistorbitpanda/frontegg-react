import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
    baseUrl: 'https://app-wdsf50edp7my.frontegg.com',
    clientId: '89681848-7b39-446c-8bc9-6d1991fcfb3a'
};

ReactDOM.render(
    <FronteggProvider contextOptions={contextOptions} tracing={true} hostedLoginBox={true} authOptions={{ keepSessionAlive: true }}>
        <App />
    </FronteggProvider>,
    document.getElementById('root')
);
