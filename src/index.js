/* eslint-disable */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { injectGlobal } from 'styled-components'
import { render } from 'react-dom';
import Header from './components/Header'
import Home from "./scenes/Home"
import TaskList from "./scenes/TaskList"

injectGlobal`
    body {
        font-family: 'Montserrat', 'Helvetica', 'Arial', sans-serif;
    }
`;

const App = () => (
    <div>
        <Header />
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/task-list" component={TaskList} />
            </Switch>
        </BrowserRouter>
    </div>
)

render(<App />, document.getElementById('app'))
