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
            console.log('user', user.providerData[0].photoURL)
            console.log('HERE', user.providerData[0].photoURL)
            Api.getUndoneTasksByUser(user.uid)
                .then( tasksList => {
                    this.setState({
                        img: user.providerData[0].photoURL,
                        uid: user.uid,
                        name: user.displayName,
                        tasksList
                    })}
                )
        })
    }

    render() {
        const { name, tasksList, uid, img } = this.state
        const { children } = this.props

        return (
            <UserContext.Provider
                value={{
                    user: {
                        uid,
                        name,
                        tasksList,
                        img
                    }
                }}
            >
                { children }
            </UserContext.Provider>
        );
    }

}

export default UserProvider;
