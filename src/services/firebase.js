import firebase from 'firebase'

require("firebase/firestore");

const apiKey = process.env.FIREBASE_API_KEY
const authDomain = `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`
const databaseURL = `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
const projectId = process.env.FIREBASE_PROJECT_ID
const storageBucket = `${process.env.FIREBASE_PROJECT_ID}.appspot.com`
const messagingSenderId = process.env.FIREBASE_MESSAGING_ID

const firebaseCongif = {
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId
}

const firestoneSettings = { timestampsInSnapshots: true };

const firebaseApp = firebase.initializeApp(firebaseCongif)
const database = firebaseApp.firestore();
database.settings(firestoneSettings)

export { database }
