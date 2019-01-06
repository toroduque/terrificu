import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from 'scenes/Home'
import TaskList from 'scenes/TaskList'
import SignIn from 'scenes/SignIn'
import Header from 'components/Header'
import UserProvider from 'components/UserProvider'

const App = () => (
    <UserProvider>
        <Header />
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/task-list" component={TaskList} />
            <Route path="/home" component={Home} />
        </Switch>
        <div id="firebaseui-auth-container" />
    </UserProvider>
)

export default App
