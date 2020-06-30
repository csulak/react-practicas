import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import 'firebase/functions'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAcYLo2DdXI2KF3RzNmyZlK6l6CmLcuKi0",
    authDomain: "roles-udemy-75976.firebaseapp.com",
    databaseURL: "https://roles-udemy-75976.firebaseio.com",
    projectId: "roles-udemy-75976",
    storageBucket: "roles-udemy-75976.appspot.com",
    messagingSenderId: "899896041449",
    appId: "1:899896041449:web:1688779cf0f4066480f578"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  const auth = firebase.auth()

  // esto sirve para leer (solo leer) las funciones)
  const functions = firebase.functions()

  export {db, auth, firebase, functions}