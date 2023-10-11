import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config ={
    apiKey: "AIzaSyDR3jzIUqpn_SMObyycL3LtRqqmjPzWwIY",
    authDomain: "crwn-db-96210.firebaseapp.com",
    projectId: "crwn-db-96210",
    storageBucket: "crwn-db-96210.appspot.com",
    messagingSenderId: "871245572946",
    appId: "1:871245572946:web:ebd7c35530a3b438c1288b",
    measurementId: "G-5VMPE59S2P"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore= firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'selesct_account'});
export const signInWithGoogle=()=> auth.signInWithPopup(provider);

export default firebase;
