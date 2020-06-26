import React from 'react'

const Saludo = (props) => {

    console.log(props)

    return (
        <div>
            saludando a {props.persona} que tiene {props.edad} años
        </div>
    )
}

export default Saludo