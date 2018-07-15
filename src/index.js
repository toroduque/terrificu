/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { render } from 'react-dom';
import Home from "./scenes/Home"

const App = () => (
    <div>
        <BrowserRouter>
            <Route exact path="/" component={Home} />
        </BrowserRouter>
    </div>
)

render(<App />, document.getElementById('app'))
