import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../../scenes/Home'
import TaskList from '../../scenes/TaskList'
import Header from '../Header'

const App = () => (
    <Fragment>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/task-list" component={TaskList} />
        </Switch>
    </Fragment>
)

export default App
