import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from 'scenes/Home'
import TaskList from 'scenes/TaskList'
import SignIn from 'scenes/SignIn'
import Header from 'components/Header'

const App = () => (
    <Fragment>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/task-list" component={TaskList} />
            <Route path="/sign-in" component={SignIn} />
        </Switch>
    </Fragment>
)

export default App
