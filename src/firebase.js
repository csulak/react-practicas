import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDpa3NOaXCzOr4Tq8JKkiSDK5FHgBjGR6A",
    authDomain: "crud-udemy-react-70f59.firebaseapp.com",
    databaseURL: "https://crud-udemy-react-70f59.firebaseio.com",
    projectId: "crud-udemy-react-70f59",
    storageBucket: "crud-udemy-react-70f59.appspot.com",
    messagingSenderId: "61200551929",
    appId: "1:61200551929:web:8d1832399ad1b3a6653728"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // instanciamos la autenticacion de firebase
  const auth = firebase.auth()

  // instanciamos la db(firestore) de firabase
  const db = firebase.firestore()

    // instanciamos el storage (donde se guardan las imagenes)
  const storage = firebase.storage()

  export {auth, firebase, db, storage}