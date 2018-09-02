import React from 'react';
import firebase from 'firebase';
import firebaseui from 'firebaseui'

const uiConfig = {
    signInSuccessUrl: 'http://localhost:9000/task-list',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    tosUrl: 'http://localhost:9000/task-list'
};

const ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', uiConfig);

const SignIn = () => (
    <div>
        <h1>Log In</h1>
        <div id="firebaseui-auth-container" />
    </div>
);

export default SignIn;
