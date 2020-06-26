import React from 'react'
import {db, auth, provider} from "../firebase"

// con esta variable podemos llamar a los elementos que estamos exportando (lo que estaria dentro del div del return)
export const ChatContext = React.createContext()

const ChatProvider = (props) => {

    const dataUsuario = {
        uid: null,
        email: null,
        estado: null
    }

    const [usuario, setUsuario] = React.useState(dataUsuario)
    const [mensajes, setMensajes] = React.useState([])


    
    React.useEffect( () => {

        detectarUsuario()

        //este comando lo usamos cuando queremos sacar el waninng de la consola por no haber puesto ningna propuedad dentro de los corchetes []
        // para estar escuchado si se modifica
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    const detectarUsuario= () => {

        // esta accion se demora, es por eso que el hook usuario se le pasa en null para que muestre el "cargando..." que pusimos en el app.jsx
        auth.onAuthStateChanged(user => {

            if(user){
                setUsuario({
                    uid: user.uid,
                    email: user.email,
                    estado: true
                })

                cargarMensajes()

            }else{
                setUsuario({
                    uid: null,
                    email: null,
                    estado: false
                })
            }

        })
    }


    const ingresoUsuario = async() => {

        try {
            
            await auth.signInWithPopup(provider)

        } catch (error) {
            console.log(error)
        }
    }



    const cerrarSesion = () => {

        auth.signOut()
    }


    const cargarMensajes = () => {

        // el onsnapshot sirve para detectar los cambios en los documentos en la db en tiempo real. 
        // gracias al onSnapshot podemos trabajar con bases de datos en tiempo real
        db.collection('chat')
            .orderBy('fecha')
            .onSnapshot(query => {
                const arrayMensajes = query.docs.map(item => item.data())
                setMensajes(arrayMensajes)
            })

    }


    const agregarMensaje = async(uidChat, textoInput) => {

        try {
            await db.collection('chat').add({
                fecha: Date.now(),
                texto: textoInput,
                uid: uidChat
            })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <ChatContext.Provider value= {{usuario, ingresoUsuario, cerrarSesion, mensajes, agregarMensaje}}>
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatProvider
