import React from 'react'
import {db} from "../firebase"

import {UsuarioContext} from "../context/UsuarioProvider"
import {LibrosContext} from "../context/LibrosProvider"

const AgregarLibros = () => {


    const [titulo, setTitulo] = React.useState('')
    const [paginas, setPaginas] = React.useState('')

    const {usuario} = React.useContext(UsuarioContext)
    const {fetchLibros} = React.useContext(LibrosContext)

    const agregarLibro = (e) => {

        e.preventDefault()

        if(!titulo.trim() || !paginas.trim()){
            console.log("campos vacios")
            return
        }

        db.collection('libros').add({
            titulo: titulo,
            paginas: paginas,
            uidAutor: usuario.uid,
            autor: db.collection('usuarios').doc(usuario.email)
        })
            .then(doc => {
                console.log("libro que queremos guardar", doc)
                fetchLibros()
            })
            .catch(error => console.log(error))

        setTitulo('')
        setPaginas('')
    }    

    return (
        <div className="mt-5">
            <h3>Agregar Libros</h3>
            <form onSubmit={agregarLibro}>
                <input 
                    type="text" 
                    className="form-contrl mb-2"
                    placeholder="ingresa un titulo"
                    onChange={ (e) => setTitulo(e.target.value)}
                    value={titulo}
                />

                <input 
                    type="text" 
                    className="form-contrl mb-2"
                    placeholder="ingresa paginas"
                    onChange={ (e) => setPaginas(e.target.value)}
                    value={paginas}

                />
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        </div>
    )
}

export default AgregarLibros
