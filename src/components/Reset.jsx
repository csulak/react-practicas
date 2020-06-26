import React, {useState} from 'react'
import {auth} from "../firebase"
import {withRouter} from "react-router-dom"

const Reset = (props) => {

    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)

    const procesarDatos = (e) => {

        e.preventDefault()

        if(!email.trim()){
            //console.log("Ingrese un email")
            setError("Ingrese un email")
            return
        }

        setError(null)

        recuperarContraseña()

    }


    const recuperarContraseña = React.useCallback( async() => {

        try {
            await auth.sendPasswordResetEmail(email)
            console.log("correo enviado")
            props.history.push("/login")

        } catch (error) {
            console.log(error)
            setError(error.message)
        }

    }, [email, props.history])


    return (
        <div className="mt-5">
            <h3 className="text-center">Reiniciar contraseña</h3>
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

                        {/* Este boton al ser de type submit es que va a hacer que se procese el formulario */}
                        <button className="btn btn-dark btn-lg btn-block" type="submit">
                            Reiniciar Contraseña
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Reset)
