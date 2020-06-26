import firebase from 'firebase'

import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwMZE4rxXTOZkkv7ZAffkbDW3Xtqc5lQk",
    authDomain: "chat-udemy-8bc2b.firebaseapp.com",
    databaseURL: "https://chat-udemy-8bc2b.firebaseio.com",
    projectId: "chat-udemy-8bc2b",
    storageBucket: "chat-udemy-8bc2b.appspot.com",
    messagingSenderId: "136072500738",
    appId: "1:136072500738:web:543fb67233918825a5791b"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()


export {db,auth,provider} 