import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {ingresoUsuarioAccion} from "../redux/usuarioDucks"

import {withRouter} from 'react-router-dom'
 
const Login = (props) => {

    //useDispatch sirve para consumir las acciones de los ducks
    const dispatch = useDispatch()

    //con el useSelecotr podemos llamar a la tienda y consumirla
    const loading = useSelector(store => store.usuario.loading)
    const activo = useSelector(store => store.usuario.activo)

    console.log("estado del loading", loading)

    // todo este useEffect() se queda "escuchando" a que cambie el valor de activo. si este componente es llamado tambien va a ejecutarse el useEffect()
    // en el caso que cambie se ejecuta el useEffect y valida para ver si lo tiene que redireccionar a la ruta "/"
    React.useEffect(() => {
        console.log("valor de 'activo'", activo)

        if(activo){
            props.history.push("/")
        }
    }, [activo, props.history])

    return (
        <div className="mt-5 text-center">
            <h3>Ingreso Con Google</h3>
            <hr />
            <button 
                className="btn btn-dark"
                onClick={ () => dispatch(ingresoUsuarioAccion())}
                disabled={loading}
            >
                Acceder
            </button>
        </div>
    )
}

export default withRouter(Login)
