import React, {useState} from 'react'
import {auth, db} from "../firebase"
import {withRouter} from "react-router-dom"

const Login = (props) => {
    const [email, setEmail] = useState('prueba@prueba.com')
    const [passwd, setPasswd] = useState('123123')
    const [error, setError] = useState(null)

    const [esRegistro, SetEsRegistro] = useState(false)

    const procesarDatos = (e) => {

        e.preventDefault()

        if(!email.trim()){
            //console.log("Ingrese un email")
            setError("Ingrese un email")
            return
        }
        if(!passwd.trim()){
            //console.log("Ingrese una contraseña")
            setError("Ingrese una contraseña")
            return
        }
        if(passwd.length < 6){
            //console.log("la contraseña debe tener mas de 6 caracteres")
            setError("la contraseña debe tener mas de 5 caracteres")
            return
        }

        console.log("paso todas las validaciones!")
        setError(null)

        if(esRegistro){
            registrar()
        }

        if(!esRegistro){
            login()
        }

    }

    const login = React.useCallback( async() => {

        try {
            const res =  await auth.signInWithEmailAndPassword(email, passwd)
            console.log("se logueo el usuario: ", res.user)
            setEmail('')
            setPasswd('')
            setError(null)
            props.history.push("/admin")

        } catch (error) {
            console.log(error)
            if(error.code === "auth/invalid-email"){
                setError("email no valido para firebase")
            }
            if(error.code === "auth/user-not-found"){
                setError("email no registrado en firebase")
            }
            if(error.code === "auth/wrong-password"){
                setError("contraseña incorrecta!")
            }
        }

    }, [email, passwd, props])


    const registrar = React.useCallback( async() => {

        try {
            // con este comando creamos un nuevo usuario
            const res = await auth.createUserWithEmailAndPassword(email, passwd)
            console.log("se registro al usuario: ", res.user)

            // aca creamos una nueva coleccion 'usuarios' y a su vez le guardamos un documento, que vendria a ser el nuevo usuario
            await db.collection('usuarios').doc(res.user.email).set({
                email: res.user.email,
                uid: res.user.uid
            })

            // await db.collection(res.user.uid).add({
            //     name: "tarea de ejemplo",
            //     fecha: Date.now()
            // })

            setEmail('')
            setPasswd('')
            setError(null)
            props.history.push("/admin")

        } catch (error) {
            console.log(error)
            if(error.code === "auth/invalid-email"){
                setError("email no valido para firebase")
            }
            if(error.code === "auth/email-already-in-use"){
                setError("email ya utilizado")
            }
        }

    },[email, passwd, props])


    return (
        <div className="mt-5">
            <h3 className="text-center">{esRegistro ? "Registro de Usuarios" : "Login de Acceso" }</h3>
            <hr />
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={procesarDatos}>
                        {
                            // es un operador ternario resumido. si no es nulo el error hace lo que esta entre parentesis
                            error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )
                        }
                        <input 
                            type="email" 
                            className="form-control mb-2"
                            placeholder="ingrese un email papa"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />

                        <input 
                            type="passwd" 
                            className="form-control mb-2"
                            placeholder="ingrese un password papa"
                            onChange={e => setPasswd(e.target.value)}
                            value={passwd}
                        />
                        
                        {/* Este boton al ser de type submit es que va a hacer que se procese el formulario */}
                        <button className="btn btn-dark btn-lg btn-block" type="submit">
                            {
                                esRegistro ? "Registrarse" : "Acceder"
                            }
                        </button>

                        {/* Este boton al ser de tipo button solo va a ejecutar la accion y no va a procesar el formulario*/}
                        <button 
                            className="btn btn-info btn-sm btn-block"
                            onClick={ () => SetEsRegistro(!esRegistro)}
                            type="button"
                        >
                            {
                                esRegistro ? "¿ya tenes cuenta?" : "¿No tenes cuenta?"
                            }
                        </button>

                        {
                            !esRegistro ? (
                                // tener en cuenta que todos los botones que agreguemos a este formulario tienen que ser de tipo button
                                // porque sino al apretarse va a ejecutar la logica del form y no es lo que queremos.
                                <button 
                                    className="btn btn-lg btn-sm mt-2 btn-danger"
                                    type="button"
                                    onClick={ () => props.history.push("/reset")}
                                >
                                        
                                Recuperar Contraseña
                            </button>

                            ): null
                        }

                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login)
