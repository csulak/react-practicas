const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin')

admin.initializeApp();

const auth = admin.auth();

exports.agregarAdministrador = functions.https.onCall( (data, context) => {

    // valido si el usuario es administrador
    if(context.auth.token.admin !== true){
        return {error: 'No tenes los permisos necesarios'}
    }

    return auth.getUserByEmail(data.email)
        .then(user => {
            return auth.setCustomUserClaims(user.uid, {admin: true})
        })
        .then( () => {
            return {message: 'Se creo el usuario administrador'}
        })
        .catch(error => {
            return {error: error}
        })

})

exports.eliminarAdministrador = functions.https.onCall( (data, context) => {

    // valido si el usuario es administrador
    if(context.auth.token.admin !== true){
        return {error: 'No tenes los permisos necesarios'}
    }

    return auth.getUserByEmail(data.email)
        .then( user => {
            return auth.setCustomUserClaims(user.uid, {admin: false})
        })
        .then( () => {
            return {message: "usuario ya no es admin vieja"}
        })
        .catch ( (error) => {
            return {error: error}
        })

})


exports.crearAutor = functions.https.onCall( (data, context) => {

    // valido si el usuario es administrador
    if(context.auth.token.admin !== true){
        return {error: 'No tenes los permisos necesarios'}
    }

    return auth.getUserByEmail(data.email)
        .then( user => {
            return auth.setCustomUserClaims(user.uid, {autor: true})
        })
        .then( () => {
            return {message: "usuario ahora es autor"}
        })
        .catch ( (error) => {
            return {error: error}
        })

})

exports.eliminarAutor = functions.https.onCall( (data, context) => {

    // valido si el usuario es administrador
    if(context.auth.token.admin !== true){
        return {error: 'No tenes los permisos necesarios'}
    }

    return auth.getUserByEmail(data.email)
        .then( user => {
            return auth.setCustomUserClaims(user.uid, {autor: false})
        })
        .then( () => {
            return {message: "usuario eliminado como autor"}
        })
        .catch ( (error) => {
            return {error: error}
        })

})