import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {cerrarSesionUsuarioAccion} from "../redux/usuarioDucks"
import {withRouter} from "react-router-dom"


const Navbar = (props) => {

    //useDispatch sirve para consumir las acciones de los ducks
    const dispatch = useDispatch()

    //con el useSelecotr podemos llamar a la tienda y consumirla
    const activo = useSelector(store => store.usuario.activo)

    const cerrarSesion = () => {
        dispatch(cerrarSesionUsuarioAccion())
        props.history.push("/login")
    }

    return (
        <div className="navbar navbr-dark bg-dark">
            <Link className="navbar-brand" to="/">APP POKE</Link>
            <div className="d-flex">

                {
                    activo ? (
                        <> 
                            <NavLink className="btn btn-dark mr-2" to="/" exact>Inicio</NavLink>
                            <NavLink className="btn btn-dark mr-2" to="/perfil" exact>Perfil</NavLink>

                            <button 
                                className="btn btn-dark mr-2"
                                onClick={ () => cerrarSesion()}
                            >
                                Cerrar sesion
                            </button>
                            
                        </>

                        ): (
                            <NavLink className="btn btn-dark mr-2" to="/login">Login</NavLink>
                        )
                }

            </div>
        </div>
    )
}

export default withRouter(Navbar)
