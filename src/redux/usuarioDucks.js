import {auth, firebase, db, storage} from "../firebase"

//data inicial
const dataInicial = {
    loading: false,
    activo: false,
}


//types
const LOADING = "LOADING"
const USUARIO_ERROR = "USUARIO_ERROR"
const USUARIO_EXITO = "USUARIO_EXITO"
const CERRAR_SESION_EXITO = "CERRAR_SESION_EXITO"

//reducer
export default function usuarioReducer (state = dataInicial, action) {
    switch(action.type){
        case LOADING:
            return {...state, loading: true}

        case USUARIO_ERROR:
            return {...dataInicial}

        case USUARIO_EXITO:
            return {...state, loading: false, user: action.payload, activo: true}

        case CERRAR_SESION_EXITO:
            return {...dataInicial}

        default:
            return {...state}
    }
}


//accion

export const ingresoUsuarioAccion = () => async(dispatch) =>{

    dispatch({
        type: LOADING
    })

    try {

        const provider = new firebase.auth.GoogleAuthProvider();

        const res = await auth.signInWithPopup(provider)

        console.log("usuario logueado", res.user)

        const usuario = {
            uid: res.user.uid,
            email: res.user.email,
            displayName: res.user.displayName,
            photoURL: res.user.photoURL
        }

        //busco para ver si existe el usuario en la coleccion 'usuarios' de la DB de firestore
        const usuarioDB = await db.collection('usuarios').doc(usuario.email).get()
        console.log("usuario guardado en firebase? leer la propiedad exist en lo que retorna", usuarioDB)

        if(usuarioDB.exists){
            // cuando existe el usuario en firestore
            dispatch({
                type: USUARIO_EXITO,
                payload: usuarioDB.data()
    
            })
            localStorage.setItem("usuario", JSON.stringify(usuarioDB.data()))

        }else{
            // no existe el usuario en firestore, por eso lo guardamos
            await db.collection('usuarios').doc(usuario.email).set(usuario)

            dispatch({
                type: USUARIO_EXITO,
                payload: usuario
    
            })
            localStorage.setItem("usuario", JSON.stringify(usuario))
        }


    } catch (error) {
        console.log(error)
        dispatch({
            type: USUARIO_ERROR,

        })
    }
}


export const leerUsuarioActivoAccion = () => (dispatch) => {
    if(localStorage.getItem('usuario')){
        dispatch({
            type: USUARIO_EXITO,
            payload: JSON.parse(localStorage.getItem('usuario'))
        })
    }
}


export const cerrarSesionUsuarioAccion = () => (dispatch) => {
    auth.signOut()
    localStorage.removeItem('usuario')
    dispatch({
        type: CERRAR_SESION_EXITO
    })
}

export const actualizarUsuarioAccion = (nombreActualizado) => async(dispatch, getState) => {


    dispatch({
        type: LOADING
    })

    // traigo el user del store
    const {user} = getState().usuario   
    console.log("Usuario a Actualizar", user)

    try {

        //actualizo en firestore el usuario
        await db.collection('usuarios').doc(user.email).update({
            displayName: nombreActualizado
        })

    const usuario = {
        ...user,
        displayName: nombreActualizado
    }

    dispatch({
        type: USUARIO_EXITO,
        payload: usuario
    })

    //aca actualizo el usuario en localstorage
    localStorage.setItem("usuario", JSON.stringify(usuario))


    } catch (error) {
        console.log(error)
    }

}


export const editarFotoAccion = (imagenEditada) => async(dispatch, getState) => {

    dispatch({
        type: LOADING
    })

    // traigo el user del store
    const {user} = getState().usuario   


    try {

        // aca creamos una referencia (directorio de nuestra carpeta) donde va a guardar la foto del usuario
        const imagenRef = await storage.ref().child(user.email).child("foto-perfil")

        // se actualiza la foto en el directorio que creamos
        await imagenRef.put(imagenEditada)

        const imagenURL = await imagenRef.getDownloadURL()

        await db.collection('usuarios').doc(user.email).update({
            photoURL: imagenURL
        })

        const usuario = {
            ...user,
            photoURL: imagenURL
        }

        dispatch({
            type: USUARIO_EXITO,
            payload: usuario
        })

        //aca actualizo el usuario en localstorage
        localStorage.setItem("usuario", JSON.stringify(usuario))
        
    } catch (error) {
        console.log(error)
    }



}
// instanciamos la db, creo