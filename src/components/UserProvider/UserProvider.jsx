import React, { Component } from 'react';
import firebase from 'firebase';
import { UserContext } from 'services/contexts'
import * as Api from 'services/api'

class UserProvider extends Component {
    state = {
        uid: null,
        name: null,
        tasksList: null
    }

    // BUG COULD BE HERE!
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            console.log('user', user)

            Api.getUndoneTasksByUser(user.uid)
                .then( tasksList => {
                    this.setState({
                        uid: user.uid,
                        name: user.displayName,
                        tasksList
                    })}
                )
        })
    }

    render() {
        const { name, tasksList, uid } = this.state
        const { children } = this.props

        return (
            <UserContext.Provider
                value={{
                    user: {
                        uid,
                        name,
                        tasksList
                    }
                }}
            >
                { children }
            </UserContext.Provider>
        );
    }

}

export default UserProvider;