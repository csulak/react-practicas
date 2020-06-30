import React from 'react'
import {db} from "../firebase"
import {LibrosContext} from "../context/LibrosProvider"
import {UsuarioContext} from "../context/UsuarioProvider"

const PintarAutor = (props) => {

    const  [autor, setAutor] = React.useState('')

    const {fetchLibros} = React.useContext(LibrosContext)
    const {usuario} = React.useContext(UsuarioContext)

    React.useEffect( () => {
        fetchAutor()
    }, [])

    const eliminarLibro = async() => {
        try {
            
            await db.collection('libros').doc(props.idLibro).delete()
            fetchLibros()

        } catch (error) {
            console.log(error)
        }
    }

    const fetchAutor = async() => {
        try {
            
            const res = await props.referencia.get()
            console.log("respuesta de llamar a la referencia(autor) de un libro especifico :", res.data())

            setAutor(res.data().email)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <span> {autor}</span>
            {
                (autor === usuario.email || usuario.rol === 'admin') && (

                    <button 
                        className="btn btn-danger float-right"
                        onClick={eliminarLibro}
                    >
                        Eliminar
                    </button>
                )
            }

        </>
    )
}

export default PintarAutor
