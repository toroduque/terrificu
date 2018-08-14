/* eslint-disable */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { injectGlobal } from 'styled-components'
import { render } from 'react-dom';
import App from './components/App'

injectGlobal`
    body {
        font-family: 'Montserrat', 'Helvetica', 'Arial', sans-serif;
    }
`;

const Index = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

render(<Index />, document.getElementById('app'))
