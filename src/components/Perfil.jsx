import React, {useState} from 'react'
import {useDispatch, useSelector, useStore} from "react-redux";
import {actualizarUsuarioAccion, editarFotoAccion} from "../redux/usuarioDucks"


const Perfil = () => {

    const usuario = useSelector(store => store.usuario.user)
    const loading = useSelector(store => store.usuario.loading)

    console.log("usuariooo", usuario)

    const [nombreUsuario, setNombreUsuario ] = useState(usuario.displayName)
    const [activarFormulario, setActivarFormulario ] = useState(false)

    const [error, setError] = useState(false)


    //useDispatch sirve para consumir las acciones de los ducks
    const dispatch = useDispatch()


    const actualizarNombreUsuario = () => {

        if(!nombreUsuario.trim()){
            console.log("Nombre Vacio")
            return
        }

        dispatch(actualizarUsuarioAccion(nombreUsuario)) 
        setActivarFormulario(false)
    }



    const seleccionarArchivo = (e) => {

        console.log("imagen seleccionada", e.target.files[0])

        const imagenSeleccionada = e.target.files[0]

        if(imagenSeleccionada === undefined){
            console.log("no se selecciono ninguna imagen")
            return
        }
        if(imagenSeleccionada.type === "image/png" || imagenSeleccionada.type === "image/jpg" ){
            dispatch(editarFotoAccion(imagenSeleccionada))

            setError(false)

        }else{
            setError(true)
        }
    }

    return (

        <div className="mt-5 text-center">
            <div className="card">
                <div className="card-body">
                    <img src={usuario.photoURL} alt="" width="100px" className="img-fluid"/>
                    <h5 className="card-title">Nombre de usuario: {usuario.displayName}</h5>
                    <p className="card-text">Email: {usuario.email}</p>
                    <button className="btn- btn-dark" onClick={ () => setActivarFormulario(true)}>
                        Editar Nombre
                    </button>

                    {
                        error &&
                        <div className="alert alert-warning mt-3">Solo archivos .png o .jpg</div>
                    }

                    <div className="custom-file">
                        <input 
                            type="file" 
                            className="custom-file-input" 
                            id="inputGroupFile01" 
                            style={{display: 'none'}}
                            onChange={e => seleccionarArchivo(e)}
                            disabled={loading}

                        />
                        
                        <label 
                            className={loading ? "btn btn-dark mt-2 disabled" : "btn btn-dark mt-2"} 
                            htmlFor="inputGroupFile01"
                        >
                            Actualizar Imagen
                        </label>
                    
                    </div>

                </div>

                {
                    loading && (
                        <div className="card-body">
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        </div>
                    )
                }


                {
                    activarFormulario && (
                        
                        <div className="card-body">
                            <div className="row justify-content-center">
                                <div className="col-md-5">
        
                                    <div className="input-group mb-3">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            value={nombreUsuario}
                                            onChange={e => setNombreUsuario(e.target.value)}
                                        />
        
                                        <div className="input-group-append">
                                            <button 
                                                className="btn btn-dark" 
                                                type="button" 
                                                onClick={ () => actualizarNombreUsuario()}
                                            >
                                                Actualizar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    )
                }
            </div>
        </div>
    )
}

export default Perfil
