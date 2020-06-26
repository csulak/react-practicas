import React, {Fragment, useState} from 'react'

const Eventos = () => {

    // En este ejemplo muestra como manejar estados de variables con hooks. en este caso texto seria una variable que manejamos
    // su estado con hooks 
    const [texto, setTexto] = useState("default Texto")

    // Esto es una funciona solo que en react native se manejan de esta forma siendo funciones lambdas
    // esta funcion lambda, por ejemplo, no va a trabajar recibiendo ningun parametro por eso los parentesis van vacios ()
    const eventoClick = () => {
        console.log("me diste un Click!")
        setTexto("texto modificado por evento click")
    }

    return (
        <Fragment>
            <hr />
            <h2>{ texto }</h2>
            <button onClick={() => eventoClick()} > click </button>
        </Fragment>
    )
}

export default Eventos
