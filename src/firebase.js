import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAvpXhLswzgdfmFXnvSRrpdmhFWWfBZLow",
    authDomain: "react-firebase-auth-83258.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-83258.firebaseio.com",
    projectId: "react-firebase-auth-83258",
    storageBucket: "react-firebase-auth-83258.appspot.com",
    messagingSenderId: "612362768284"
};

firebase.initializeApp(config);

export default firebase;
export const db = firebase.database();
export const auth = firebase.auth();
