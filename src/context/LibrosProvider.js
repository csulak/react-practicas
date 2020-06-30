import React from 'react'
import {db} from "../firebase"

export const LibrosContext = React.createContext()

const LibrosProvider = (props) => {

    const [libros, setLibros] = React.useState([])

    React.useEffect( () => {

        fetchLibros()

    }, [])


    const fetchLibros = async() => {

        try {

            //leemos la coleccion 'libros'
            const res = await db.collection('libros').get()

            // mapeamos todos los documentos de la coleccion
            const arrayLibros = res.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            })

            console.log('como queda mapeada la coleccion de libros: ', arrayLibros)

            //seteamos el mapeo de toda la coleccion a nustro hook
            setLibros(arrayLibros)
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <LibrosContext.Provider value={{libros, fetchLibros}}>
            {props.children}
        </LibrosContext.Provider>
    )
}

export default LibrosProvider
