import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from 'scenes/Home'
import TaskList from 'scenes/TaskList'
import SignIn from 'scenes/SignIn'
import Header from 'components/Header'
import SessionInfo from 'components/SessionInfo'
import UserProvider from 'components/UserProvider'

const App = () => (
    <UserProvider>
        <Header />
        <SessionInfo />
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/task-list" component={TaskList} />
            <Route path="/home" component={Home} />
        </Switch>
        <div id="firebaseui-auth-container" />
    </UserProvider>
)

export default App
