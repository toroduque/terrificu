/* eslint-disable */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { injectGlobal } from 'styled-components'
import { render } from 'react-dom';
import App from './components/App'

// Inject global styles
injectGlobal`
    body {
        font-family: 'Montserrat', 'Helvetica', 'Arial', sans-serif;
    }

    button {
        font-family: 'Montserrat', 'Helvetica', 'Arial', sans-serif;
    }
`;

const Index = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

render(<Index />, document.getElementById('app'))
