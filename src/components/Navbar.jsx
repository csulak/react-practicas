import React from 'react'
import {ChatContext} from "../context/ChatProvider"

const Navbar = () => {

    const {usuario, ingresoUsuario, cerrarSesion} = React.useContext(ChatContext)

    return (
        <div className= "navbar navbar-dark bg-dark">
            <span className="navbar-brand">
                Chat
            </span>

            <div>

                {
                    usuario.estado ? (
                        <button 
                            className="btn btn-outline-danger my-2"
                            onClick={cerrarSesion}
                        >
                            Cerrar sesion
                        </button>

                    ) : (
               
                        <button 
                            className="btn btn-outline-success my-2"
                            onClick={ingresoUsuario}
                        >
                            Acceder
                        </button>

                    )
                }

                
            </div>
        </div>
    )
}

export default Navbar
