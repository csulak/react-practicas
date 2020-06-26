import React from 'react'
import Imagen from './Imagen'

const Comentario = (props) => {

    console.log(props)

    return (
        <div className="media">
            
            <Imagen media={props.media}/>

            <div className="media-body">
                <h5 className="mt-0">{props.nombre}</h5>
                {props.comentario}
            </div>
        </div>
    )
}

export default Comentario
